export default function Pulse() {
  return (
    <span className="relative mr-2 flex size-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0089E5] opacity-75"></span>
      <span className="relative inline-flex size-3 rounded-full bg-[#0089E5]"></span>
    </span>
  );
}
