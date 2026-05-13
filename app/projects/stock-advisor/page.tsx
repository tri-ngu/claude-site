'use client';

export default function StockAdvisorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-4 inline-block">
            ← Back to Projects
          </a>
          <h1 className="text-4xl font-bold text-black dark:text-white">Meridian · Stock Advisor AI</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">AI-powered investment advisor for personalized portfolio building</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative bg-zinc-100 dark:bg-zinc-900 rounded-lg aspect-video flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mb-6 overflow-hidden group">
              <iframe
                src="https://stock-three-henna.vercel.app"
                title="Meridian Stock Advisor AI"
                className="w-full h-full border-none"
                loading="lazy"
              />
              <button
                onClick={() => window.open('/projects/stock-advisor/fullscreen', '_blank')}
                className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors z-10 shadow-lg"
              >
                Open Full Screen ↗
              </button>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">About</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Meridian is an AI-powered investment advisor built to help beginners invest safely and wisely. Powered by Claude AI via Groq, it combines real-time market data with intelligent reasoning to generate personalized portfolio recommendations.
              </p>

              <h3 className="text-lg font-semibold text-black dark:text-white mt-6 mb-3">Key Features</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 mb-6">
                <li>• <strong>AI Chat Interface</strong> - Talk to an intelligent stock investment advisor</li>
                <li>• <strong>Stock Analysis</strong> - Get detailed information and metrics on any stock ticker</li>
                <li>• <strong>Portfolio Building</strong> - Build diversified portfolios matched to your risk tolerance and goals</li>
                <li>• <strong>Stock Screening</strong> - Find stocks based on fundamental criteria like P/E ratios and growth metrics</li>
                <li>• <strong>Real Market Data</strong> - Powered by yfinance for current stock prices and historical analysis</li>
                <li>• <strong>Educational</strong> - Learn investment concepts in beginner-friendly language</li>
                <li>• <strong>Portfolio Optimization</strong> - Uses Mean-Variance optimization for Sharpe ratio maximization</li>
              </ul>

              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">How It Works</h3>
              <ol className="text-zinc-600 dark:text-zinc-400 space-y-2 mb-6 list-decimal list-inside">
                <li>Answer questions about your investment goals, budget, and risk tolerance</li>
                <li>The AI analyzes your profile and generates personalized recommendations</li>
                <li>Real market data is fetched for recommended stocks</li>
                <li>Portfolio is optimized using modern financial theory</li>
                <li>Get detailed reasoning behind each recommendation</li>
              </ol>

              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Disclaimer</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                This is an educational tool providing AI-powered insights, not financial advice. Past performance does not guarantee future results. Always conduct your own research and consult a licensed financial advisor before making investment decisions.
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
                  <dd className="text-black dark:text-white">Live</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">AI Model</dt>
                  <dd className="text-black dark:text-white">Groq llama-3.3-70b</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Backend</dt>
                  <dd className="text-black dark:text-white">FastAPI + Vercel</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Market Data</dt>
                  <dd className="text-black dark:text-white">Real-time (yfinance)</dd>
                </div>
              </dl>

              <a
                href="https://stock-three-henna.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Open in New Tab →
              </a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
