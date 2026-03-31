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
    <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-sm font-semibold tracking-tight text-zinc-100">
          <span className="text-cyan-400">&gt;_</span> Smart CV
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden gap-2 md:flex">
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

