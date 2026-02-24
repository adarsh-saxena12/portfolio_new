"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemePicker } from "@/components/theme-picker"

export default function Header() {
    const pathname = usePathname()

    const isHome = pathname === "/"

    const navLinks = [
        { name: "Home", href: isHome ? "#home" : "/" },
        { name: "About", href: isHome ? "#about" : "/#about" },
        { name: "Work", href: isHome ? "#work" : "/#work" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: isHome ? "#contact" : "/#contact" },
    ]

    return (
        <header className="border-b border-border backdrop-blur-lg sticky top-0 z-50 bg-background/80">
            <div className="max-w-7xl mx-auto px-6 py-5">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold">
                        AC
                    </Link>

                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium hover:text-primary transition-colors ${pathname === link.href ? "text-primary" : "text-foreground/70"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <ThemePicker />
                    </div>
                </nav>
            </div>
        </header>
    )
}
