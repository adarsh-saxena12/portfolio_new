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
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <nav className="flex items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="flex items-center group-hover:scale-105 transition-transform duration-500">
                            <span className="text-2xl font-serif italic tracking-tighter">AS<span className="text-primary">.</span></span>
                        </div>
                    </Link>

                    <div className="flex-1 flex justify-center items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[13px] font-medium tracking-tight hover:text-primary transition-colors ${pathname === link.href ? "text-primary" : "text-foreground/60"
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
