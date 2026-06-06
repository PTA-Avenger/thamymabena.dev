export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between font-mono text-[0.68rem] text-text-dim relative z-10 gap-3 text-center md:text-left">
      <span>© {new Date().getFullYear()} Thato Mabena</span>
      <span>Pretoria, Gauteng · South African Citizen</span>
    </footer>
  );
}
