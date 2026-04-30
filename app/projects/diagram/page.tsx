'use client';

export default function DiagramPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-4 inline-block">
            ← Back to Projects
          </a>
          <h1 className="text-4xl font-bold text-black dark:text-white">AI Agent Visualizer</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">Interactive educational tool explaining how AI agents work</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative bg-zinc-100 dark:bg-zinc-900 rounded-lg aspect-video flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mb-6 overflow-hidden group">
              <img
                src="/diagram-thumbnail.png"
                alt="AI Agent Visualizer Thumbnail"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => window.open('/projects/diagram/fullscreen', '_blank')}
                className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors duration-200"
              >
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Open Full Screen
                </span>
              </button>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">About</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                An interactive single-page application that teaches how AI agents work through an animated diagram.
                The experience grows in complexity across 6 stages, each building on the previous, suitable for audiences with varying levels of AI knowledge.
              </p>

              <h3 className="text-lg font-semibold text-black dark:text-white mt-6 mb-3">Learning Stages</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 mb-6">
                <li><strong>Stage 1:</strong> Basic LLM Request - Understanding fundamental prompt and response</li>
                <li><strong>Stage 2:</strong> Tool Calling - LLMs using external APIs and tools</li>
                <li><strong>Stage 3:</strong> ReAct Loop - Iterative reasoning and action cycles</li>
                <li><strong>Stage 4:</strong> Memory & Context - Maintaining state across interactions</li>
                <li><strong>Stage 5:</strong> Multi-Agent Orchestration - Multiple specialized agents working together</li>
                <li><strong>Stage 6:</strong> Failure & Recovery - Error handling and human-in-the-loop</li>
              </ul>

              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Audience Levels</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 mb-6">
                <li><strong>Newcomer:</strong> No AI background - plain-language explanations and tooltips</li>
                <li><strong>Curious Learner:</strong> Familiar with ChatGPT - deeper insights into agent internals</li>
                <li><strong>Practitioner:</strong> Developers and researchers - technical details on demand</li>
              </ul>

              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Design Features</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>• Single self-contained HTML file - no build tools or dependencies</li>
                <li>• Interactive SVG diagram with smooth animations</li>
                <li>• Progressive complexity - stages build on each other</li>
                <li>• Color-coded node types (LLM, tools, memory, decisions, humans)</li>
                <li>• Tooltips and "Go Deeper" sections for each audience level</li>
              </ul>
            </div>
          </div>

          <aside>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800 sticky top-6">
              <h3 className="font-semibold text-black dark:text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["HTML5", "SVG", "CSS", "JavaScript"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold text-black dark:text-white mb-3">Details</h3>
              <dl className="space-y-3 text-sm mb-6">
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Type</dt>
                  <dd className="text-black dark:text-white">Interactive Visualization</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Status</dt>
                  <dd className="text-black dark:text-white">Completed</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Complexity Stages</dt>
                  <dd className="text-black dark:text-white">6 progressive stages</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Audience Levels</dt>
                  <dd className="text-black dark:text-white">3 (Beginner to Expert)</dd>
                </div>
              </dl>

              <button
                onClick={() => window.open('/projects/diagram/fullscreen', '_blank')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Open Full Screen →
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
