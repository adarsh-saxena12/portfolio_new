"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description?: string
  image: string
  bgImage?: string
  tech?: string[]
  link?: string
  github?: string
}

interface ProjectBentoGridProps {
  projects: Project[]
}

export default function ProjectBentoGrid({ projects }: ProjectBentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => {
        return (
          <Link 
            key={project.id} 
            href={project.link || `#`}
            className="group flex flex-col bg-card/60 dark:bg-card/40 border border-border/50 rounded-2xl p-4 hover:border-border/90 hover:shadow-sm transition-all duration-300 relative overflow-hidden"
          >
            {/* Image Preview Frame */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-muted/60 border border-border/30 mb-3">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Just Project Name */}
            <div className="flex items-center justify-between px-1 pt-1 pb-1">
              <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="w-7 h-7 rounded-full bg-secondary/80 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300 shrink-0">
                <ChevronRight className="w-4 h-4 text-foreground group-hover:text-background group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
