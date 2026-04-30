export default function DiagramFullscreenPage() {
  return (
    <div className="w-screen h-screen bg-white dark:bg-black flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <iframe
          src="/diagram.html"
          className="w-full h-full border-none"
          title="AI Agent Visualizer"
        />
      </div>
    </div>
  );
}
