"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
  ArrowUpRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MusicCard from "@/components/music-card"
import ProjectBentoGrid from "@/components/ProjectBentoGrid"

const projects = [
  {
    id: 1,
    title: "Envval",
    description: "Manage your environmental secrets with ease and security in a modern platform.",
    image: "/images/screenshot-202025-12-29-20221418.png",
    bgImage: "/images/bg-1.png",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Pixlr Chat",
    description: "Multi-modal AI chat app with AI agents for intelligent conversations.",
    image: "/images/screenshot-202025-12-29-20221436.png",
    bgImage: "/images/bg-2.png",
    tech: ["React", "OpenAI", "TypeScript"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Echo Chat",
    description: "Real-time chat rooms for seamless communication and collaboration.",
    image: "/images/screenshot-202025-12-29-20221354.png",
    bgImage: "/images/bg-3.png",
    tech: ["Vue.js", "Firebase", "Tailwind"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 4,
    title: "UI Craft",
    description: "A comprehensive design system and component library for modern web apps.",
    image: "/images/screenshot-202025-12-29-20221453.png",
    bgImage: "/images/bg-4.png",
    tech: ["Next.js", "Chart.js", "MongoDB"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Zen Flow",
    description: "Mindfulness and productivity tracker with integrated meditation tools.",
    image: "/images/blue-hero.png",
    bgImage: "/images/bg-5.png",
    tech: ["React Native", "Firebase", "HealthKit"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 6,
    title: "Swiss Analytics",
    description: "Minimalist data visualization dashboard for precise business insights.",
    image: "/images/swiss-minimal.png",
    bgImage: "/images/bg-6.png",
    tech: ["D3.js", "Next.js", "Prisma"],
    link: "#",
    github: "https://github.com",
  },
]


import GenerativeCanvas from "@/components/generative-canvas"

export default function Portfolio() {
  const [currentSkill, setCurrentSkill] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative overflow-hidden px-6 pt-8 pb-16 md:pt-16 md:pb-24 text-center">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 space-y-10 w-full max-w-7xl flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/30 border border-border/50 backdrop-blur-sm shadow-sm group hover:border-primary/30 transition-all cursor-default w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/70">
              Open for world-domination
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4 w-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight text-foreground w-full uppercase">
              I build. <br />
              <span className="text-muted-foreground">Mostly</span> on purpose.
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            I am currently working as a <span className="text-foreground font-medium">Fullstack Developer at XZ Company.</span><br />
            99% caffeine, 1% code, 100% passion.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-foreground/5 font-semibold">
              Explore Work
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full h-14 px-10 text-lg hover:bg-secondary/80 transition-all flex items-center gap-3 group font-medium">
              Say Hello
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <ChevronRight className="w-4 h-4 text-primary" />
              </div>
            </Button>
          </div>
        </div>
      </section>

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

        <ProjectBentoGrid projects={projects} />
      </section>

      <section className="mt-32 px-6 max-w-7xl mx-auto mb-24">
        <h2 className="text-5xl font-bold mb-16 text-center">More About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {/* Education Card */}
          <Card className="md:col-span-3 lg:col-span-4 bg-secondary/10 backdrop-blur-xl border-border/40 hover:border-primary/30 transition-all duration-700 group p-8 rounded-[2rem] flex flex-col justify-between min-h-[300px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
            <div className="w-14 h-14 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-2 relative z-10">
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-[10px]">Foundation</p>
              <h3 className="font-bold text-3xl text-foreground">Education</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">BTech in Chemical Engineering from a premier institute.</p>
            </div>
          </Card>

          {/* Resume Card */}
          <Card className="md:col-span-3 lg:col-span-4 bg-secondary/10 backdrop-blur-xl border-border/40 hover:border-primary/30 transition-all duration-700 group p-8 rounded-[2rem] flex flex-col justify-between min-h-[300px] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
            <div className="w-14 h-14 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-4 relative z-10">
              <div>
                <p className="text-primary font-medium tracking-[0.2em] uppercase text-[10px]">Credentials</p>
                <h3 className="font-bold text-3xl text-foreground">Resume</h3>
              </div>
              <Button variant="outline" className="rounded-full border-border/50 hover:bg-primary hover:text-primary-foreground transition-all group/btn w-fit">
                Download PDF
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Philosophy Card (Links to new page) */}
          <Link href="/journal" className="md:col-span-6 lg:col-span-4 block group">
            <Card className="bg-zinc-950 border-zinc-900 overflow-hidden hover:border-primary/40 transition-all duration-1000 shadow-2xl relative p-0 border-0 rounded-[2rem] min-h-[300px] cursor-pointer h-full">
              <div className="relative h-full min-h-[300px] overflow-hidden">
                <Image
                  src="/images/about-philosophy-bg.jpeg"
                  alt="Serene Mountain Landscape"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-[2000ms] ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-1000" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="space-y-2 transform transition-all duration-1000 group-hover:-translate-y-2">
                    <h3 className="text-3xl font-medium text-white tracking-tight uppercase">
                      Journey is Home
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed font-light max-w-[240px]">
                      Finding clarity in the stillness of the mountains. Click to read more.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
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
