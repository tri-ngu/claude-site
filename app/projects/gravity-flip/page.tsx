'use client';

export default function GravityFlipPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-4 inline-block">
            ← Back to Projects
          </a>
          <h1 className="text-4xl font-bold text-black dark:text-white">Gravity Flip</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">A fast-paced browser game with gravity mechanics</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative bg-zinc-100 dark:bg-zinc-900 rounded-lg aspect-video flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mb-6 overflow-hidden group">
              <img
                src="/gravity-flip-thumbnail.png"
                alt="Gravity Flip Game Thumbnail"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => window.open('/projects/gravity-flip/game', '_blank')}
                className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors duration-200"
              >
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Open Game in New Tab
                </span>
              </button>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">About</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Navigate a constantly scrolling world filled with obstacles while flipping gravity to avoid collisions.
                The game gets progressively harder with increasing speed and spawn density.
              </p>
              <h3 className="text-lg font-semibold text-black dark:text-white mt-6 mb-3">Features</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 mb-6">
                <li>• Progressive difficulty with smooth scaling</li>
                <li>• 15+ unique obstacle types with different behaviors</li>
                <li>• Parallax scrolling city background with multiple layers</li>
                <li>• Responsive canvas scaling for any screen size</li>
                <li>• Real-time score tracking with multipliers</li>
              </ul>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Controls</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>• <strong>Spacebar or Click:</strong> Flip gravity</li>
                <li>• <strong>ESC or R:</strong> Restart game</li>
              </ul>
            </div>
          </div>

          <aside>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800 sticky top-6">
              <h3 className="font-semibold text-black dark:text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["HTML5", "Canvas API", "JavaScript"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold text-black dark:text-white mb-3">Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Type</dt>
                  <dd className="text-black dark:text-white">Browser Game</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Status</dt>
                  <dd className="text-black dark:text-white">Completed</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Built With</dt>
                  <dd className="text-black dark:text-white">Vanilla JavaScript</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
