"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, User, FolderKanban, Briefcase, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemePicker } from "@/components/theme-picker"

export default function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const isHome = pathname === "/"

    const navLinks = [
        { name: "Home", href: isHome ? "#home" : "/", icon: Home },
        { name: "About", href: isHome ? "#about" : "/#about", icon: User },
        { name: "Work", href: isHome ? "#work" : "/#work", icon: FolderKanban },
        { name: "Hire Me", href: "/hire-me", icon: Briefcase },
        { name: "Contact", href: "/contact", icon: Mail },
    ]

    return (
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3.5 md:py-4">
                <nav className="flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                            Adarsh Saxena<span className="text-primary">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[13px] font-medium tracking-tight hover:text-primary transition-colors ${
                                    pathname === link.href ? "text-primary font-semibold" : "text-foreground/70"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Controls & Hamburger Button */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <ThemePicker />

                        {/* Mobile Hamburger Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden h-9 w-9 rounded-full hover:bg-secondary transition-all"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5 text-foreground" />
                            ) : (
                                <Menu className="h-5 w-5 text-foreground" />
                            )}
                        </Button>
                    </div>
                </nav>

                {/* Mobile Dropdown Menu Drawer */}
                {mobileMenuOpen && (
                    <div className="md:hidden pt-3 pb-4 px-1 space-y-1.5 border-t border-border/40 mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        {navLinks.map((link) => {
                            const Icon = link.icon
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                        isActive
                                            ? "bg-secondary text-foreground font-semibold"
                                            : "text-foreground/80 hover:bg-secondary/60"
                                    }`}
                                >
                                    <Icon className="w-4 h-4 text-muted-foreground" />
                                    <span>{link.name}</span>
                                </Link>
                            )
                        })}
                    </div>
                )}
            </div>
        </header>
    )
}
