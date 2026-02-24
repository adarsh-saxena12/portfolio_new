"use client"

import * as React from "react"
import { Paintbrush, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useTheme, Theme } from "@/hooks/use-theme"

export function ThemePicker() {
    const { theme, setTheme } = useTheme()

    const themes: { id: Theme; name: string; color: string }[] = [
        { id: "dark", name: "Dark", color: "bg-zinc-800" },
        { id: "blue", name: "Blue", color: "bg-cyan-500" },
        { id: "purple", name: "Purple", color: "bg-purple-500" },
        { id: "light", name: "Light", color: "bg-white border-2 border-zinc-300" },
    ]

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-secondary transition-all hover:rotate-12 active:scale-95">
                    <Paintbrush className="h-5 w-5 stroke-[1.5]" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-48 p-2 rounded-xl border-border bg-card/95 backdrop-blur-md shadow-xl">
                <div className="grid gap-1">
                    <p className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Select Theme
                    </p>
                    {themes.map((t) => (
                        <Button
                            key={t.id}
                            variant="ghost"
                            className={`w-full justify-start gap-3 rounded-lg px-2 h-10 hover:bg-secondary transition-colors ${theme === t.id ? "bg-secondary text-foreground" : "text-muted-foreground"
                                }`}
                            onClick={() => setTheme(t.id)}
                        >
                            <div className={`h-4 w-4 rounded-full ${t.color}`} />
                            <span className="flex-1 text-sm font-medium">{t.name}</span>
                            {theme === t.id && <Check className="h-4 w-4 text-primary" />}
                        </Button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}
