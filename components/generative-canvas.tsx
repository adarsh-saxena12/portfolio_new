"use client"

import React, { useRef, useEffect } from "react"

export default function GenerativeCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouse = useRef({ x: 0, y: 0, active: false })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let time = 0

        const resize = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.clientWidth
                canvas.height = parent.clientHeight
            }
        }

        const draw = () => {
            time += 0.01
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const centerX = canvas.width / 2
            const centerY = canvas.height / 2

            // Draw background gradient
            const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
            bgGradient.addColorStop(0, "rgba(8, 145, 178, 0.05)") // Cyan-600
            bgGradient.addColorStop(1, "rgba(147, 51, 234, 0.05)") // Purple-600
            ctx.fillStyle = bgGradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Reactive Blobs
            for (let i = 0; i < 3; i++) {
                const x = centerX + Math.cos(time + i * 2) * (canvas.width * 0.2)
                const y = centerY + Math.sin(time + i * 3) * (canvas.height * 0.2)

                // Interaction
                let dx = 0
                let dy = 0
                if (mouse.current.active) {
                    const dist = Math.hypot(mouse.current.x - x, mouse.current.y - y)
                    if (dist < 200) {
                        dx = (mouse.current.x - x) * 0.05
                        dy = (mouse.current.y - y) * 0.05
                    }
                }

                const gradient = ctx.createRadialGradient(
                    x + dx, y + dy, 0,
                    x + dx, y + dy, 200 + Math.sin(time) * 50
                )

                if (i === 0) {
                    gradient.addColorStop(0, "rgba(6, 182, 212, 0.2)") // Cyan
                } else if (i === 1) {
                    gradient.addColorStop(0, "rgba(168, 85, 247, 0.15)") // Purple
                } else {
                    gradient.addColorStop(0, "rgba(236, 72, 153, 0.1)") // Pink
                }
                gradient.addColorStop(1, "transparent")

                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(x + dx, y + dy, 300, 0, Math.PI * 2)
                ctx.fill()
            }

            animationFrameId = requestAnimationFrame(draw)
        }

        window.addEventListener("resize", resize)
        resize()
        draw()

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    const handleMouseMove = (e: React.MouseEvent) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect()
        mouse.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true
        }
    }

    const handleMouseLeave = () => {
        mouse.current.active = false
    }

    return (
        <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full h-full block"
        />
    )
}
