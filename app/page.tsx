"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code2,
  Music,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  FileText,
  Layers,
  Terminal,
  BarChart3,
  Pause,
  Play,
  Database,
  Server,
  Palette,
  Cloud,
  Zap,
  GitBranch,
  GraduationCap,
} from "lucide-react"
import Image from "next/image"
import MusicCard from "@/components/music-card"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform with real-time inventory, advanced filtering, and seamless checkout experience built with Next.js and Stripe.",
    image: "/images/screenshot-202025-12-29-20221418.png",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps creators write blog posts, social media content, and marketing copy using advanced language models.",
    image: "/images/screenshot-202025-12-29-20221436.png",
    tech: ["React", "OpenAI", "TypeScript"],
  },
  {
    id: 3,
    title: "Project Management Dashboard",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and team analytics built for modern teams.",
    image: "/images/screenshot-202025-12-29-20221354.png",
    tech: ["Vue.js", "Firebase", "Tailwind"],
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "A powerful analytics platform that helps businesses track social media performance, engagement metrics, and audience insights across multiple platforms.",
    image: "/images/screenshot-202025-12-29-20221453.png",
    tech: ["Next.js", "Chart.js", "MongoDB"],
  },
]


import GenerativeCanvas from "@/components/generative-canvas"

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(1)
  const [currentSkill, setCurrentSkill] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      <section id="home" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="relative group perspective-1000">
          <Card className="bg-card/40 backdrop-blur-2xl border-border/50 rounded-xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-primary/5">
            <div className="p-8 md:p-16 lg:p-24 space-y-12 md:space-y-20 text-center">
              {/* Minimal Hero Text */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
                    Available for new projects
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight leading-[1.1] text-foreground">
                  Elevating Digital <br />
                  <span className="text-muted-foreground">Experiences</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                  Crafting minimal, high-performance solutions for the modern web.
                </p>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12">
                <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
                  View Projects
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg border-border hover:bg-secondary transition-all hover:scale-105 active:scale-95">
                  Get in Touch
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section >

      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {/* Creative Developer Card - Spans 6 columns */}
          <Card className="md:col-span-6 lg:col-span-6 bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-500 relative">
            <div className="absolute inset-0 z-0">
              <GenerativeCanvas />
            </div>
            <div className="relative h-80 flex flex-col justify-end p-10 z-10">
              <div className="space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-primary font-medium tracking-[0.2em] uppercase text-[10px]">Philosophy</p>
                <h3 className="text-4xl font-bold tracking-tight text-foreground">Creative <br />Developer</h3>
                <p className="text-muted-foreground font-light text-lg">Where logic meets aesthetic vision.</p>
              </div>
            </div>
          </Card>

          {/* Introduction Card - Spans 6 columns */}
          <Card className="md:col-span-6 lg:col-span-6 bg-card border-border p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Introduction</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a full-stack developer passionate about creating beautiful, functional web experiences. With expertise
              in modern web technologies, I craft digital solutions that combine aesthetic design with clean, performant
              code.
            </p>
          </Card>

          {/* Professional Projects Card - Spans 8 columns */}
          <Card
            className="md:col-span-6 lg:col-span-8 bg-black border-zinc-800 p-10 flex flex-col justify-between relative group cursor-pointer h-96 transition-all duration-700"
            onClick={() => setCurrentExperience((prev) => (prev + 1) % 4)}
          >
            <div className="flex items-center gap-3">
              <h3 className="text-4xl font-bold text-white">Professional Projects</h3>
              <span className="text-4xl">🤞</span>
            </div>

            <div className="flex-1 flex items-center justify-center">
              {currentExperience === 0 && (
                <div className="text-center space-y-2 transition-all duration-700">
                  {/* Empty first slide - only shows heading */}
                </div>
              )}
              {currentExperience === 1 && (
                <div className="text-center space-y-2 transition-all duration-700">
                  <h4 className="text-3xl font-bold text-white">E-Commerce Platform</h4>
                  <p className="text-zinc-400 text-lg">Built for Global Retail Corp</p>
                  <p className="text-sm text-zinc-500">2023 - 2024</p>
                </div>
              )}
              {currentExperience === 2 && (
                <div className="text-center space-y-2 transition-all duration-700">
                  <h4 className="text-3xl font-bold text-white">Healthcare Dashboard</h4>
                  <p className="text-zinc-400 text-lg">Medical Data Analytics System</p>
                  <p className="text-sm text-zinc-500">2022 - 2023</p>
                </div>
              )}
              {currentExperience === 3 && (
                <div className="text-center space-y-2 transition-all duration-700">
                  <h4 className="text-3xl font-bold text-white">FinTech Mobile App</h4>
                  <p className="text-zinc-400 text-lg">Payment Processing Platform</p>
                  <p className="text-sm text-zinc-500">2021 - 2022</p>
                </div>
              )}
            </div>

            <div className="absolute bottom-10 right-10">
              <ChevronRight className="w-12 h-12 text-white group-hover:translate-x-2 transition-transform" />
            </div>
          </Card>

          {/* Stats Card - Spans 4 columns */}
          <Card className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 border-0 p-6 h-96">
            <div className="grid grid-cols-2 gap-3 h-full">
              <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                <Github className="w-10 h-10 text-zinc-900" />
              </div>
              <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-900">1945</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                <div className="text-center text-zinc-900 text-xl font-bold">...</div>
              </div>
              <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                <Code2 className="w-10 h-10 text-zinc-900" />
              </div>
              <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                <BarChart3 className="w-10 h-10 text-zinc-900" />
              </div>
              <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-900">1314</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Music Card - Spans 4 columns */}
          {/* <Card className="md:col-span-6 lg:col-span-4 bg-zinc-900 border-zinc-800 overflow-hidden p-8 flex flex-col justify-between relative group h-80">
            <Image
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
              alt="Music Background"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Music className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-bold text-white">Now Playing</h3>
              </div>

              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white mb-1">Lofi Hip Hop</p>
                  <p className="text-white/80">Chill Beats to Code To</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const audio = document.getElementById("portfolio-audio") as HTMLAudioElement
                      if (audio) {
                        if (isPlaying) {
                          audio.pause()
                        } else {
                          audio.play()
                        }
                        setIsPlaying(!isPlaying)
                      }
                    }}
                    className="w-16 h-16 rounded-full bg-white hover:bg-white/90 flex items-center justify-center transition-all"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-purple-600" />
                    ) : (
                      <Play className="w-8 h-8 text-purple-600 ml-1" />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full w-1/3"></div>
                    </div>
                    <div className="flex justify-between text-xs text-white/80 mt-1">
                      <span>1:24</span>
                      <span>3:45</span>
                    </div>
                  </div>
                </div>
              </div>

              <audio id="portfolio-audio" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
            </div>
          </Card> */}
          <MusicCard />

          {/* Skills Card - Spans 8 columns */}
          <Card className="md:col-span-6 lg:col-span-8 bg-zinc-950 border-zinc-800 p-8 h-auto">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-4xl font-bold text-white/90 mb-4">My Skills</h3>
              <span className="text-4xl">🏅</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Backend */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white/90 mb-4">Backend</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">Node.js</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">Python</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">Express</span>
                  </div>
                </div>
              </div>

              {/* Frontend */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white/90 mb-4">Frontend</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">React</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">Next.js</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palette className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">Tailwind</span>
                  </div>
                </div>
              </div>

              {/* DevOps */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white/90 mb-4">DevOps</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">Docker</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">AWS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">CI/CD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">Kubernetes</span>
                  </div>
                </div>
              </div>

              {/* Miscellaneous */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white/90 mb-4">Miscellaneous</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">Git</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">REST APIs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">GraphQL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-white/60" />
                    <span className="text-white/70 text-sm">WebSockets</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="work" className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <p className="text-orange-500 font-medium tracking-[0.3em] uppercase text-xs">Selection</p>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Featured Work</h2>
          </div>
          <p className="text-muted-foreground max-w-xs md:text-right leading-relaxed text-lg italic transition-all duration-700">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>

        <div className="relative group">
          <div className="overflow-visible">
            {/* Cinematic Project Card */}
            <Card className="bg-secondary/5 border-border/50 rounded-[3rem] overflow-hidden backdrop-blur-sm relative transition-all duration-700">
              <div className="relative aspect-[16/9] lg:aspect-[21/9] flex items-center">
                <Image
                  key={currentProject}
                  src={projects.find((p) => p.id === currentProject)?.image || projects[0].image}
                  alt="Featured Project"
                  fill
                  className="object-cover opacity-60 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

                <div className="relative z-10 p-8 md:p-20 space-y-8 max-w-3xl">
                  <div className="relative">
                    <span className="text-[6rem] md:text-[12rem] font-bold text-foreground/[0.03] absolute -top-16 md:-top-32 -left-4 md:-left-12 select-none leading-none">
                      0{projects.findIndex((p) => p.id === currentProject) + 1}
                    </span>
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground transition-all duration-500">
                        {projects.find((p) => p.id === currentProject)?.title}
                      </h3>
                      <p className="text-muted-foreground text-lg md:text-2xl font-light leading-relaxed max-w-2xl">
                        {projects.find((p) => p.id === currentProject)?.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {projects
                      .find((p) => p.id === currentProject)
                      ?.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md text-foreground/80 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="group/btn h-14 px-10 rounded-full border-foreground/10 hover:bg-foreground hover:text-background transition-all duration-500 gap-3 text-lg"
                    >
                      View Case Study
                      <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation Controls */}
            <div className="flex items-center gap-8 mt-12 justify-center md:justify-start">
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const currentIndex = projects.findIndex((p) => p.id === currentProject)
                    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
                    setCurrentProject(projects[newIndex].id)
                  }}
                  className="w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all group/nav"
                >
                  <ChevronLeft className="w-6 h-6 transition-transform group-nav:-translate-x-1" />
                </button>
                <button
                  onClick={() => {
                    const currentIndex = projects.findIndex((p) => p.id === currentProject)
                    const newIndex = (currentIndex + 1) % projects.length
                    setCurrentProject(projects[newIndex].id)
                  }}
                  className="w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all group/nav"
                >
                  <ChevronRight className="w-6 h-6 transition-transform group-nav:translate-x-1" />
                </button>
              </div>

              <div className="hidden md:flex items-center gap-4">
                <div className="h-[2px] w-48 bg-foreground/5 relative overflow-hidden rounded-full">
                  <div
                    className="absolute inset-0 bg-orange-500 transition-all duration-500"
                    style={{
                      width: `${(1 / projects.length) * 100}%`,
                      left: `${(projects.findIndex((p) => p.id === currentProject) / projects.length) * 100}%`,
                    }}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm font-medium tabular-nums">
                  <span className="text-foreground">0{projects.findIndex((p) => p.id === currentProject) + 1}</span>
                  <span className="text-foreground/20">/</span>
                  <span className="text-foreground/40">0{projects.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 px-6 max-w-7xl mx-auto mb-24">
        <h2 className="text-5xl font-bold mb-16 text-center">More About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-card backdrop-blur border-border hover:border-blue-500/50 transition-all cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-12 group">
            <div className="w-24 h-24 mb-8 rounded-3xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <GraduationCap className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="font-bold text-3xl mb-4 text-foreground">Education</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">BTech in Chemical Engineering</p>
            <p className="text-muted-foreground/70 text-sm mt-2">My academic background and foundation</p>
          </Card>

          <Card className="bg-card backdrop-blur border-border hover:border-blue-500/50 transition-all cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-12 group">
            <div className="w-24 h-24 mb-8 rounded-3xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <FileText className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="font-bold text-3xl mb-4 text-foreground">Resume</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Download my CV & credentials</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-all">
            <div className="relative h-[600px]">
              <Image
                src="/images/pexels-aronvisuals-1694631.jpg"
                alt="Nature Photography"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center max-w-3xl">
                  <h3 className="text-6xl font-bold text-white mb-6 leading-tight">
                    Build with Purpose,
                    <br />
                    Create with Passion
                  </h3>
                  <p className="text-zinc-200 text-xl leading-relaxed">
                    Every line of code is an opportunity to make a difference. I believe in crafting solutions that not
                    only solve problems but inspire and elevate human experiences.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">© 2025 Adarsh. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <a
                href="mailto:adarsh@example.com"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-foreground" />
              </a>

              <a
                href="https://github.com"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-foreground" />
              </a>

              <a
                href="https://linkedin.com"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-foreground" />
              </a>

              <a
                href="https://twitter.com"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-foreground" />
              </a>

              <a
                href="/resume.pdf"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Resume"
              >
                <FileText className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
}
