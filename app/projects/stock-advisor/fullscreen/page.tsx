export default function StockAdvisorFullscreenPage() {
  return (
    <div className="w-screen h-screen bg-white dark:bg-black flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <iframe
          src="https://stock-three-henna.vercel.app"
          className="w-full h-full border-none"
          title="Meridian Stock Advisor AI"
        />
      </div>
    </div>
  );
}
