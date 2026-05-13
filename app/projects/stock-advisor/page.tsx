export default function StockAdvisorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-4 inline-block">
            ← Back to Projects
          </a>
          <h1 className="text-4xl font-bold text-black dark:text-white">Meridian · Stock Advisor AI</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">AI-powered investment advisor with personalized portfolio building</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg aspect-video flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mb-6">
              <a
                href="https://stock-three-henna.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Open App →
              </a>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">About</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Meridian is an AI-powered investment advisor built to help beginners invest safely and wisely. Powered by Claude AI via Groq, it combines real-time market data with intelligent reasoning to generate personalized portfolio recommendations.
              </p>

              <h3 className="text-lg font-semibold text-black dark:text-white mt-6 mb-3">Key Features</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 mb-6">
                <li>• AI-powered chat interface for investment advice</li>
                <li>• Detailed stock analysis and metrics</li>
                <li>• Personalized portfolio building based on risk tolerance</li>
                <li>• Stock screening with fundamental criteria</li>
                <li>• Real-time market data via yfinance</li>
                <li>• Educational investment concepts explained</li>
                <li>• Portfolio optimization using modern financial theory</li>
              </ul>

              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Start Using It</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Click the "Open App" button above to start getting AI-powered investment advice. The app will guide you through a preference survey to create a personalized portfolio.
              </p>

              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Disclaimer</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                This is an educational tool providing AI-powered insights, not financial advice. Always conduct your own research and consult a licensed financial advisor before making investment decisions.
              </p>
            </div>
          </div>

          <aside>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800 sticky top-6">
              <h3 className="font-semibold text-black dark:text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["FastAPI", "Python", "React", "Groq", "yfinance", "SciPy"].map((tech) => (
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
                  <dd className="text-black dark:text-white">Full Stack Web App</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Status</dt>
                  <dd className="text-black dark:text-white">Live on Vercel</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">AI Model</dt>
                  <dd className="text-black dark:text-white">Groq llama-3.3-70b</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Backend</dt>
                  <dd className="text-black dark:text-white">FastAPI + Vercel</dd>
                </div>
              </dl>

              <a
                href="https://stock-three-henna.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Open App →
              </a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
