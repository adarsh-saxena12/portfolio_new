"use client"

import { Github, ExternalLink, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-16 md:gap-y-24">
      {projects.map((project, index) => {
        return (
          <Link 
            key={project.id} 
            href={`/projects/${project.id}`}
            className="group flex flex-col space-y-3 cursor-pointer"
          >
            {/* Image Block */}
            <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-border/40">
              {/* Background Image (Anime) */}
              <Image
                src={project.bgImage}
                alt={`${project.title} background`}
                fill
                className="object-cover transition-all duration-[1.5s] grayscale group-hover:grayscale-0 opacity-30 group-hover:opacity-50"
              />
              
              {/* Foreground Content (Screenshot) - Centered */}
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                <div className="relative w-full h-full rounded-md overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:-translate-y-2 grayscale group-hover:grayscale-0">
                   <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Below */}
            <div className="space-y-4 px-0">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground tracking-tight flex items-center justify-between">
                  {project.title}
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
