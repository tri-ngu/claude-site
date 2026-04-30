export default function GravityFlipGamePage() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <iframe
          src="/gravity-flip.html"
          className="w-full h-full border-none"
          title="Gravity Flip Game"
        />
      </div>
    </div>
  );
}
