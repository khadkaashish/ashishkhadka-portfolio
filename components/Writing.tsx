import { ExternalLink } from 'lucide-react';

// Replace with your actual Medium username when you have posts
const MEDIUM_USERNAME = 'khadka'; // update this

async function getMediumPosts() {
  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
      { next: { revalidate: 3600 } } // refresh every hour
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
  return html.replace(/<[^>]*>/g, '').slice(0, 160) + '…';
}

export default async function Writing() {
  const posts = await getMediumPosts();

  return (
    <section id="writing" className="py-24 max-w-6xl mx-auto section-padding">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
        <div>
          <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
            Writing
          </span>
        </div>

        <div className="space-y-4">
          {posts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center space-y-3">
              <p className="text-sm text-slate-400 dark:text-slate-500">
                Writing coming soon. I'll be publishing on distributed systems, databases, and
                software engineering.
              </p>
              <a
                href={`https://medium.com/@${MEDIUM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-indigo-500 dark:text-indigo-400 hover:underline font-mono"
              >
                Follow on Medium <ExternalLink size={11} />
              </a>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-3 gap-4">
                {posts.map((post: any) => (
                  <a
                    key={post.guid}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 p-5 space-y-3 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors"
                  >
                    <p className="font-mono text-xs text-slate-400 dark:text-slate-500">
                      {formatDate(post.pubDate)}
                    </p>
                    <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">
                      {stripHtml(post.description)}
                    </p>
                    <span className="text-xs text-indigo-500 dark:text-indigo-400 font-mono group-hover:underline">
                      Read →
                    </span>
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={`https://medium.com/@${MEDIUM_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  All posts on Medium <ExternalLink size={13} />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
