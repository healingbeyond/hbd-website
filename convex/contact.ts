import { v } from "convex/values";
import { action, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

declare const process: { env: Record<string, string | undefined> };

const VIKTOR_API_URL = process.env.VIKTOR_SPACES_API_URL!;
const PROJECT_NAME = process.env.VIKTOR_SPACES_PROJECT_NAME!;
const PROJECT_SECRET = process.env.VIKTOR_SPACES_PROJECT_SECRET!;

// Internal mutation to save to database
export const saveSubmission = internalMutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("contactSubmissions", {
      name: args.name,
      email: args.email,
      message: args.message,
      submittedAt: Date.now(),
    });
  },
});

// Action that saves to DB and sends email notification
export const submitContact = action({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    // Save to database
    await ctx.runMutation(internal.contact.saveSubmission, {
      name: args.name,
      email: args.email,
      message: args.message,
    });

    // Send email notification to Corey
    const emailBody = [
      `## New Contact Form Submission`,
      ``,
      `**From:** ${args.name}`,
      `**Email:** ${args.email}`,
      ``,
      `---`,
      ``,
      `${args.message}`,
      ``,
      `---`,
      ``,
      `*This message was sent via the contact form on healingbeyonddiagnosis.ca*`,
    ].join("\n");

    try {
      const response = await fetch(
        `${VIKTOR_API_URL}/api/viktor-spaces/tools/call`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            project_name: PROJECT_NAME,
            project_secret: PROJECT_SECRET,
            role: "coworker_send_email",
            arguments: {
              to: ["corey@healingbeyonddiagnosis.ca"],
              subject: `[HBD Contact] Message from ${args.name}`,
              body: emailBody,
            },
          }),
        },
      );

      if (!response.ok) {
        console.error("Email send failed:", response.status, await response.text());
      } else {
        const result = await response.json();
        if (!result.success) {
          console.error("Email tool error:", result.error);
        } else {
          console.log("Contact email sent successfully");
        }
      }
    } catch (error) {
      console.error("Failed to send contact email:", error);
      // Don't throw - the submission was saved to DB even if email fails
    }

    return { success: true };
  },
});
