"use client"

import { useState, useEffect } from "react"

export type Theme = "dark" | "blue" | "purple" | "light"

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("dark")

    useEffect(() => {
        const savedTheme = localStorage.getItem("portfolio-theme") as Theme
        if (savedTheme) {
            setTheme(savedTheme)
            document.documentElement.setAttribute("data-theme", savedTheme)
        }
    }, [])

    const updateTheme = (newTheme: Theme) => {
        setTheme(newTheme)
        localStorage.setItem("portfolio-theme", newTheme)
        document.documentElement.setAttribute("data-theme", newTheme)
    }

    return { theme, setTheme: updateTheme }
}
