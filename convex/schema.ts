import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  contactSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    submittedAt: v.number(),
  }),
});

export default schema;
