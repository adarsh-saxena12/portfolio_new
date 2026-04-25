"use client"

import { Github, ExternalLink, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  bgImage: string
  tech: string[]
  link?: string
  github?: string
}

interface ProjectBentoGridProps {
  projects: Project[]
}

export default function ProjectBentoGrid({ projects }: ProjectBentoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => {
        return (
          <div 
            key={project.id} 
            className="group relative flex flex-col"
          >
            {/* Main Container */}
            <div className="relative aspect-[4/3] md:aspect-auto md:h-[320px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-primary/10 border border-border/40">
              {/* Background Image (Anime) */}
              <Image
                src={project.bgImage}
                alt={`${project.title} background`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Foreground Content (Screenshot) */}
              <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl transform transition-all duration-700 group-hover:-translate-y-2">
                   <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="mt-4 px-1 space-y-1.5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2.5">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  <a 
                    href={project.link || "#"} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex items-center gap-2 pt-1 opacity-60">
                <div className="h-px flex-1 bg-border/50" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
