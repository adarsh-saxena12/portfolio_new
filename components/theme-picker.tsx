"use client"

import * as React from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

export function ThemePicker() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="h-10 w-10 rounded-full hover:bg-secondary transition-all active:scale-95 group relative"
        >
            <div className="relative h-5 w-5 flex items-center justify-center">
                <Sun className={`h-5 w-5 transition-all duration-500 absolute ${theme === "light" ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
                <Moon className={`h-5 w-5 transition-all duration-500 absolute ${theme === "dark" ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
            </div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
