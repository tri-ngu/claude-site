export default function Home() {
  const projects = [
    {
      id: "gravity-flip",
      title: "Gravity Flip",
      description: "A fast-paced browser game where you navigate obstacles while flipping gravity. Built with vanilla HTML5 Canvas.",
      tech: ["HTML5", "Canvas", "JavaScript"],
      link: "/projects/gravity-flip",
    },
    {
      id: "grocery-planner",
      title: "Grocery Planning Agent",
      description: "AI-powered meal planning app that generates 14-day meal plans based on your food preferences and integrates with Walmart shopping.",
      tech: ["Node.js", "Express", "Claude AI", "Anthropic SDK"],
      link: "/projects/grocery-planner",
    },
    {
      id: "diagram",
      title: "Diagram Project",
      description: "Interactive visualization and diagramming tool built with web technologies.",
      tech: ["HTML5", "JavaScript"],
      link: "/projects/diagram",
    },
    {
      id: "stock-advisor",
      title: "Meridian · Stock Advisor AI",
      description: "AI-powered investment advisor that builds personalized portfolios, screens stocks, and explains investment concepts in plain language.",
      tech: ["FastAPI", "Python", "React", "Groq", "yfinance"],
      link: "/projects/stock-advisor",
    },
    {
      id: "tui-xanh",
      title: "Túi Xanh · Food Rescue",
      description: "A Vietnamese food rescue app inspired by Too Good To Go — browse discounted surplus meals from local restaurants and pick them up before they go to waste.",
      tech: ["Vite", "React", "Tailwind CSS", "Lucide"],
      link: "/projects/tui-xanh",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Projects
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col h-full">
                <h2 className="text-xl font-semibold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
