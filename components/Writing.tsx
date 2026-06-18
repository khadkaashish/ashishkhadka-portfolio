import { ExternalLink } from 'lucide-react';

const MEDIUM_USERNAME = 'khadka';

async function getMediumPosts() {
  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (data.status !== 'ok') return [];
    return data.items?.slice(0, 3) ?? [];
  } catch {
    return [];
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').slice(0, 140) + '…';
}

export default async function Writing() {
  const posts = await getMediumPosts();

  return (
    <section id="writing" className="py-24 max-w-5xl mx-auto section-padding">
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
        <p className="font-mono text-xs text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mb-10">
          <span className="text-zinc-300 dark:text-zinc-700 mr-1">06</span> writing
        </p>

        {posts.length === 0 ? (
          <div className="border border-dashed border-zinc-200 dark:border-zinc-800 p-8 space-y-3">
            <p className="font-mono text-sm text-zinc-400 dark:text-zinc-600">
              <span className="text-zinc-200 dark:text-zinc-800">$ </span>
              writing on distributed systems, databases, and software engineering — coming soon
            </p>
            <a
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 dark:text-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              follow on medium <ExternalLink size={10} />
            </a>
          </div>
        ) : (
          <>
            <div className="space-y-0">
              {posts.map((post: any) => (
                <a
                  key={post.guid}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-start gap-4 py-5 border-b border-zinc-200/80 dark:border-zinc-800/60 first:border-t first:border-zinc-200/80 dark:first:border-zinc-800/60 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors -mx-4 px-4"
                >
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 shrink-0 pt-0.5 w-24">
                    {formatDate(post.pubDate)}
                  </span>
                  <div>
                    <h3 className="text-zinc-700 dark:text-zinc-200 text-sm font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-zinc-400 dark:text-zinc-600 leading-relaxed">
                      {stripHtml(post.description)}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <a
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 dark:text-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mt-6"
            >
              all posts on medium <ExternalLink size={10} />
            </a>
          </>
        )}
      </div>
    </section>
  );
}
