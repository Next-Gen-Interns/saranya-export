"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



function NavLink({ href, label, active }) {
  return (
    <Link href={href} className="relative group">
      <span>{label}</span>

      {/* underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300
        ${active ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-black/60 backdrop-blur">
  <nav className="w-full px-6 py-4 text-white">
    <div className="max-w-7xl mx-auto flex justify-between">
      <span className="font-bold text-lg">SARANYA EXPORT</span>

      <div className="flex gap-8 text-sm">
        <NavLink href="/" label="Home" active={pathname === "/"} />
        <NavLink href="/about" label="About" active={pathname === "/about"} />
      </div>
    </div>
  </nav>
</header>

  );
}
