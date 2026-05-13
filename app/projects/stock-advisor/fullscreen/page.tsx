'use client';

export default function StockAdvisorFullscreenPage() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-indigo-950 flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <div className="text-8xl mb-8">📊</div>
        <h1 className="text-5xl font-bold text-black dark:text-white mb-4">Meridian Stock Advisor</h1>
        <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-8">
          AI-powered investment advisor for personalized portfolio building and stock analysis
        </p>

        <div className="bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6">How to Use</h2>
          <div className="text-left space-y-4 text-zinc-700 dark:text-zinc-400">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Option 1: View on GitHub</h3>
              <a
                href="https://github.com/tri-ngu/stock"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                github.com/tri-ngu/stock
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Option 2: Run Locally</h3>
              <p className="mb-3">Install Python 3.8+ and run:</p>
              <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded overflow-x-auto text-sm">
                <code>{`git clone https://github.com/tri-ngu/stock
cd stock
pip install -r requirements.txt
export GROQ_API_KEY=your_key_here
python backend/main.py`}</code>
              </pre>
              <p className="mt-3 text-sm">Get your free Groq API key at <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">console.groq.com</a></p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Note: This is a full-stack Python/React application designed for local development.
            It requires a Groq API key for the AI functionality.
          </p>
          <button
            onClick={() => window.history.back()}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
