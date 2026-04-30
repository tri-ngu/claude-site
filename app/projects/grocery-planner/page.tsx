export default function GroceryPlannerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-4 inline-block">
            ← Back to Projects
          </a>
          <h1 className="text-4xl font-bold text-black dark:text-white">Grocery Planning Agent</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">AI-powered meal planner with Walmart integration</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg aspect-video flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mb-6">
              <a
                href="https://agent-two-iota.vercel.app"
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
                An AI-powered meal planning application that generates personalized 14-day meal plans based on your food preferences.
                It uses Claude AI to analyze your taste profile and creates shopping lists integrated with Walmart.
              </p>

              <h3 className="text-lg font-semibold text-black dark:text-white mt-6 mb-3">Features</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 mb-6">
                <li>• Interactive food preference survey with 20 food pairs</li>
                <li>• AI-generated personalized meal plans</li>
                <li>• Consolidated shopping lists with price estimates</li>
                <li>• Walmart store locator and direct shopping links</li>
                <li>• Pantry management with item tracking</li>
                <li>• Meal swapping and regeneration</li>
                <li>• Rating system for continuous improvement</li>
              </ul>

              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">User Flow</h3>
              <ol className="text-zinc-600 dark:text-zinc-400 space-y-2 mb-6 list-decimal pl-6">
                <li>Set dietary constraints and preferences</li>
                <li>Complete food preference survey (visual card picker)</li>
                <li>Specify household info (size, budget, skill level)</li>
                <li>AI generates personalized 14-day meal plan</li>
                <li>Review plan and create consolidated shopping list</li>
                <li>Find nearby Walmart stores and shop</li>
                <li>Rate meals for improved future recommendations</li>
              </ol>

              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">AI Integration</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                Uses Claude Sonnet 4.6 from Anthropic to:
              </p>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>• Analyze food preferences from visual card selections</li>
                <li>• Generate personalized meal plans respecting constraints</li>
                <li>• Create detailed recipes and ingredient lists</li>
                <li>• Handle meal substitutions and regenerations</li>
              </ul>
            </div>
          </div>

          <aside>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800 sticky top-6">
              <h3 className="font-semibold text-black dark:text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Node.js", "Express", "Claude AI", "Upstash Redis"].map((tech) => (
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
                  <dt className="text-zinc-500 dark:text-zinc-400">Deployment</dt>
                  <dd className="text-black dark:text-white">Vercel Functions</dd>
                </div>
              </dl>

              <a
                href="https://agent-two-iota.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Visit App →
              </a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
