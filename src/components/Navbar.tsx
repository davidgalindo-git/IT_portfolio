import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#security-labs", label: "Security Labs" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
      <nav className="fixed left-0 top-0 z-40 h-screen w-30 border-r border-zinc-800/60 bg-black/60 backdrop-blur-xl">
        <div className="flex h-full flex-col px-6 py-8">

          {/* Top Section: Your Name (Bigger and On Top) */}
          <div className="mb-10">
            <Link
                href="#home"
                className="text-2xl font-bold tracking-tighter text-zinc-100 transition hover:opacity-80 block"
            >
              <div className="mt-1">David Galindo</div>
              <span className="text-cyan-400">&gt;_</span>
            </Link>
          </div>

          {/* Middle Section: Vertical Navigation Links */}
          <div className="flex-1">
            <NavigationMenu orientation="vertical" className="max-w-none">
              <NavigationMenuList className="flex flex-col items-start gap-4 space-x-0">
                {NAV_ITEMS.map((item) => (
                    <NavigationMenuItem key={item.href} className="w-full">
                      <NavigationMenuLink
                          href={item.href}
                          className="block w-full rounded-lg px-4 py-3 text-lg font-medium text-zinc-400 transition hover:bg-zinc-800/50 hover:text-white"
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Optional: Footer info (Status/System) */}
          <div className="mt-auto text-[10px] uppercase tracking-widest text-zinc-500">
            System Status: <span className="text-emerald-500 animate-pulse">Online</span>
          </div>
        </div>
      </nav>
  );
}