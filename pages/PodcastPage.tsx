const SPOTIFY_SHOW_URL = "https://open.spotify.com/show/033hiLHKfhB2oyLlVvyYz2?si=vrA8b6N9Squ7SPCikQX-8A&utm_source=copy-link";
const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/show/033hiLHKfhB2oyLlVvyYz2";
const APPLE_PODCASTS_URL = "https://podcasts.apple.com/ca/podcast/healing-beyond-diagnosis-podcast/id1896699686";

const topics = [
  { icon: "🧠", title: "Brain Injury", description: "ABI, TBI, concussion, and the invisible impact of brain injury on identity and daily life." },
  { icon: "💔", title: "Invisible Grief", description: "The grief that comes after diagnosis — mourning a life that changed when nobody told you it's okay to grieve." },
  { icon: "🪞", title: "Identity Rebuilding", description: "Who am I now? Conversations about the process of discovering who you're becoming after everything changed." },
  { icon: "🤝", title: "Caregiving", description: "The weight nobody sees. Burnout, compassion fatigue, invisible grief, and the caregiver's own journey." },
  { icon: "🌅", title: "Recovery Stories", description: "Real people sharing real experiences. No scripts. No sugarcoating. Just honest conversations about healing." },
  { icon: "🧭", title: "Life After Diagnosis", description: "Finding purpose, meaning, and direction when the life you planned is no longer the life you're living." },
];

export function PodcastPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-teal text-sm font-semibold tracking-widest uppercase">Listen Now</p>
            <h1 className="text-4xl md:text-5xl font-bold text-cream leading-tight">
              Healing Beyond Diagnosis
              <span className="block text-teal mt-2">Podcast</span>
            </h1>
            <div className="w-16 h-1 bg-orange mx-auto rounded-full" />
            <p className="text-cream/60 text-lg leading-relaxed max-w-2xl mx-auto">
              Real conversations about brain injury, invisible grief, identity, caregiving, and recovery.
              Hosted by Corey Furnival.
            </p>
          </div>
        </div>
      </section>

      {/* Spotify Embed */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={`${SPOTIFY_EMBED_URL}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Healing Beyond Diagnosis Podcast on Spotify"
                style={{ borderRadius: "12px" }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SPOTIFY_SHOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1DB954] text-white font-semibold rounded-xl hover:bg-[#1ed760] transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Listen on Spotify
              </a>
              <a
                href={APPLE_PODCASTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#9933CC] text-white font-semibold rounded-xl hover:bg-[#aa44dd] transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.6-.24 1.2-.84 1.32-.6.12-1.2-.24-1.32-.84-.264-1.332-.804-2.412-1.704-3.348-1.272-1.332-2.94-2.04-4.776-2.04-1.044 0-2.052.216-2.964.66a7.33 7.33 0 00-2.46 1.86 7.092 7.092 0 00-1.62 3.456c-.12.6-.72.972-1.32.852-.6-.12-.972-.72-.852-1.32.348-1.656 1.02-3.12 2.136-4.416C6.156 3.936 8.508 2.568 11.865 2.568zm.12 4.092c1.44 0 2.748.588 3.756 1.668.888.948 1.38 2.172 1.38 3.456 0 .66-.516 1.2-1.176 1.2s-1.2-.54-1.2-1.2c0-.756-.288-1.476-.828-2.04-.6-.636-1.38-.984-2.232-.984-.444 0-.876.096-1.272.288-.396.192-.744.468-1.044.816a3.612 3.612 0 00-.768 1.62c-.072.408-.324.744-.696.924-.372.18-.792.168-1.152-.024-.36-.192-.612-.516-.684-.912-.036-.204-.036-.42.012-.636.216-1.092.72-2.064 1.476-2.856 1.008-1.056 2.328-1.32 4.428-1.32zM12 12.456c.984 0 1.776.792 1.776 1.776a1.77 1.77 0 01-.876 1.536v3.444c0 .492-.396.888-.888.888a.895.895 0 01-.9-.888v-3.444A1.77 1.77 0 0110.236 14.232c0-.984.78-1.776 1.764-1.776z"/>
                </svg>
                Listen on Apple Podcasts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="container mx-auto">
          <div className="text-center space-y-6 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-cream">
              What We Talk About
            </h2>
            <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-bold text-cream mb-2">{topic.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <blockquote className="text-2xl md:text-3xl font-bold text-navy italic">
              "Healing was never meant to be faced alone."
            </blockquote>
            <p className="text-navy/60 text-lg">
              Subscribe and join the conversation. New episodes regularly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
