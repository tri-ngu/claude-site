export default function TuiXanhPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-4 inline-block">
            ← Back to Projects
          </a>
          <h1 className="text-4xl font-bold text-black dark:text-white">Túi Xanh · Food Rescue</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">Rescue surplus meals from local restaurants before they go to waste</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg aspect-video flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mb-6">
              <a
                href="https://food-seven-virid.vercel.app"
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
                Túi Xanh (Green Bag) is a food rescue app that connects customers with local restaurants in Vietnam
                that have surplus food at the end of the day. Restaurants list discounted bags of leftover meals,
                and customers can browse, reserve, and pick them up — reducing food waste while saving money.
                The UI is fully in Vietnamese.
              </p>

              <h3 className="text-lg font-semibold text-black dark:text-white mt-6 mb-3">Features</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 mb-6">
                <li>• Browse discounted surprise bags from nearby restaurants</li>
                <li>• Filter by category, distance, and pickup time</li>
                <li>• Checkout flow with payment method selection (cards, e-wallets)</li>
                <li>• Order tracking and pickup confirmation</li>
                <li>• Account management with payment methods and order history</li>
                <li>• Guided onboarding tutorial for new users</li>
              </ul>

              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Background</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Built as a prototype exploring how a food rescue marketplace would look and feel
                for the Vietnamese market. The app was migrated from an HTML prototype to a full
                Vite + React + Tailwind stack, with Vietnamese copy throughout.
              </p>
            </div>
          </div>

          <aside>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800 sticky top-6">
              <h3 className="font-semibold text-black dark:text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Vite", "React", "Tailwind CSS", "Lucide"].map((tech) => (
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
                  <dd className="text-black dark:text-white">Frontend Web App</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Language</dt>
                  <dd className="text-black dark:text-white">Vietnamese UI</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Status</dt>
                  <dd className="text-black dark:text-white">Live on Vercel</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Focus</dt>
                  <dd className="text-black dark:text-white">Food waste reduction</dd>
                </div>
              </dl>

              <a
                href="https://food-seven-virid.vercel.app"
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
