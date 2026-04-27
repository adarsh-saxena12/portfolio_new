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
      <section id="home" className="min-h-screen flex flex-col justify-center bg-background px-6 relative overflow-hidden">
        {/* Subtle Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto w-full space-y-24 relative z-10">
          {/* Top Metadata */}
          <div className="flex justify-between items-end border-b border-border/40 pb-8">
            <div className="space-y-1">
              <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Adarsh Saxena</p>
              <p className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase italic">Software Development Engineer</p>
            </div>
            <div className="hidden md:flex flex-col items-end space-y-1">
              <span className="text-[9px] font-black tracking-[0.4em] text-foreground uppercase">Independent / Studio</span>
              <span className="text-[9px] font-medium tracking-[0.2em] text-muted-foreground uppercase">Based in India © 2025</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="space-y-0">
                <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter leading-[0.8] uppercase">
                  Digital
                </h1>
                <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-extralight tracking-tighter leading-[0.8] uppercase text-foreground">
                  Architect
                </h1>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pt-12 space-y-12">
              <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-sm">
                Obsessed with the intersection of functional engineering and high-end aesthetic clarity. Currently scaling products at Algorizz.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 pt-4">
                <button 
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-foreground"
                >
                  <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span>Explore Work</span>
                </button>
                
                <Link href="/contact" className="group flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground group-hover:text-primary transition-colors border-b border-transparent group-hover:border-primary/40 pb-1">
                    Get in touch
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Badge/Scroll */}
          <div className="flex items-center gap-6 pt-12">
            <div className="w-12 h-12 rounded-full border border-border/40 flex items-center justify-center animate-bounce">
               <ChevronRight className="w-5 h-5 text-muted-foreground rotate-90" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-muted-foreground uppercase">Scroll to Discover</span>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {/* Creative Developer Card - Spans 6 columns */}
          <Card className="md:col-span-6 lg:col-span-6 bg-card border-border/40 overflow-hidden group hover:border-primary/30 transition-all duration-700 relative rounded-xl shadow-sm hover:shadow-md">
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity">
              <GenerativeCanvas />
            </div>
            <div className="relative h-[320px] flex flex-col justify-end p-10 z-10">
              <div className="space-y-4 transform transition-transform duration-700 group-hover:-translate-y-2">
                <p className="text-primary font-bold tracking-[0.3em] uppercase text-[9px]">Current Role</p>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tighter text-card-foreground leading-tight">SDE @ <br />Algorizz</h3>
                <p className="text-muted-foreground font-light text-lg max-w-xs">Building the future as an SDE for the past year at a high-growth startup.</p>
              </div>
            </div>
          </Card>

          {/* Introduction Card - Spans 6 columns */}
          <Card className="md:col-span-6 lg:col-span-6 bg-card border-border/40 p-10 flex flex-col justify-center rounded-xl shadow-sm space-y-8">
            <div className="space-y-2">
              <p className="text-primary font-bold tracking-[0.3em] uppercase text-[9px]">The Intro</p>
              <h3 className="text-4xl font-medium tracking-tighter text-card-foreground">Hi, I'm Adarsh 👋</h3>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
              I'm a full-stack developer obsessed with creating beautiful, performant web experiences. Currently scaling digital products at Algorizz, I combine intentional design with clean, scalable code.
            </p>
            <div className="pt-4 flex items-center gap-4">
               <div className="w-12 h-[1px] bg-border" />
               <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase italic">Based in Earth</span>
            </div>
          </Card>

          {/* Professional Projects Card - Spans 8 columns */}
          <Card
            className="md:col-span-6 lg:col-span-8 bg-zinc-950 border-zinc-900 p-10 flex flex-col justify-between relative group cursor-pointer h-[380px] transition-all duration-700 rounded-xl overflow-hidden shadow-2xl"
            onClick={() => setCurrentExperience((prev) => (prev + 1) % 4)}
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase group-hover:text-white/40 transition-colors">
                Experience / 0{currentExperience + 1}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-medium tracking-tighter text-white">Professional Journey</h3>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
            </div>

            <div className="flex-1 flex items-center">
              <div className="space-y-6 w-full">
                {currentExperience === 0 && (
                  <div className="space-y-2 transition-all duration-700 animate-in fade-in slide-in-from-left-4">
                    <p className="text-primary text-sm font-bold tracking-widest uppercase">Overview</p>
                    <h4 className="text-5xl md:text-6xl font-medium tracking-tighter text-white/40">Building the <br />Future.</h4>
                  </div>
                )}
                {currentExperience === 1 && (
                  <div className="space-y-2 transition-all duration-700 animate-in fade-in slide-in-from-left-4">
                    <p className="text-primary text-sm font-bold tracking-widest uppercase">2023 - Present</p>
                    <h4 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">E-Commerce Platform</h4>
                    <p className="text-zinc-400 text-xl font-light">Lead Architect for Global Retail Solutions</p>
                  </div>
                )}
                {currentExperience === 2 && (
                  <div className="space-y-2 transition-all duration-700 animate-in fade-in slide-in-from-left-4">
                    <p className="text-primary text-sm font-bold tracking-widest uppercase">2022 - 2023</p>
                    <h4 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">Healthcare Suite</h4>
                    <p className="text-zinc-400 text-xl font-light">Fullstack Dev for Medical Analytics</p>
                  </div>
                )}
                {currentExperience === 3 && (
                  <div className="space-y-2 transition-all duration-700 animate-in fade-in slide-in-from-left-4">
                    <p className="text-primary text-sm font-bold tracking-widest uppercase">2021 - 2022</p>
                    <h4 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">FinTech Core</h4>
                    <p className="text-zinc-400 text-xl font-light">Backend Engineer for Secure Payments</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase">Click to navigate</p>
              <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </Card>

          {/* Stats Card - Spans 4 columns */}
          <Card className="md:col-span-6 lg:col-span-4 bg-card border-border/40 p-8 h-[380px] rounded-xl shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative h-full flex flex-col justify-between">
               <div className="space-y-2">
                 <p className="text-primary font-bold tracking-[0.3em] uppercase text-[9px]">Activity</p>
                 <h3 className="text-3xl font-medium tracking-tighter text-card-foreground">Metrics</h3>
               </div>

               <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/30 rounded-2xl p-6 flex flex-col items-center justify-center space-y-2 group-hover:bg-secondary/50 transition-colors">
                  <Github className="w-6 h-6 text-foreground/70" />
                  <div className="text-2xl font-bold tracking-tighter">1.9k</div>
                  <p className="text-[8px] uppercase tracking-widest text-muted-foreground">Commits</p>
                </div>
                <div className="bg-secondary/30 rounded-2xl p-6 flex flex-col items-center justify-center space-y-2 group-hover:bg-secondary/50 transition-colors">
                  <Code2 className="w-6 h-6 text-foreground/70" />
                  <div className="text-2xl font-bold tracking-tighter">130+</div>
                  <p className="text-[8px] uppercase tracking-widest text-muted-foreground">Projects</p>
                </div>
                <div className="bg-secondary/30 rounded-2xl p-6 flex flex-col items-center justify-center space-y-2 group-hover:bg-secondary/50 transition-colors">
                  <BarChart3 className="w-6 h-6 text-foreground/70" />
                  <div className="text-2xl font-bold tracking-tighter">99.9%</div>
                  <p className="text-[8px] uppercase tracking-widest text-muted-foreground">Uptime</p>
                </div>
                <div className="bg-primary/10 rounded-2xl p-6 flex flex-col items-center justify-center space-y-2 border border-primary/20">
                  <Zap className="w-6 h-6 text-primary" />
                  <div className="text-2xl font-bold tracking-tighter text-primary">Fast</div>
                  <p className="text-[8px] uppercase tracking-widest text-primary/70">Delivery</p>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </section>

      {/* Technical Arsenal Section - A14 Style */}
      <section id="arsenal" className="max-w-7xl mx-auto px-6 py-32 border-t border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-baseline gap-4">
              <h2 className="text-5xl md:text-6xl font-medium tracking-tighter uppercase">Arsenal</h2>
              <span className="text-xl font-light italic text-muted-foreground">(16)</span>
            </div>
            <p className="text-muted-foreground text-lg font-light max-w-xs leading-relaxed">
              A curated collection of tools and technologies I've mastered over the years to build scalable digital products.
            </p>
          </div>

          {/* Right Column: Skills List */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-border/40">
              {[
                { category: 'Backend', skills: 'Node.js, Python, PostgreSQL, Express, MongoDB' },
                { category: 'Frontend', skills: 'React, Next.js, TypeScript, Tailwind, Redux' },
                { category: 'DevOps', skills: 'Docker, AWS, CI/CD, Kubernetes, Vercel' },
                { category: 'Tools', skills: 'Git, REST APIs, GraphQL, WebSockets, Figma' },
              ].map((item, i) => (
                <div key={item.category} className="group py-12 flex flex-col md:flex-row md:items-baseline justify-between gap-4 first:pt-0 last:pb-0 cursor-default">
                  <div className="flex items-baseline gap-6">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">0{i + 1}</span>
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tighter uppercase group-hover:text-primary transition-colors">
                      {item.category}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg font-light md:text-right max-w-md group-hover:text-foreground transition-colors">
                    {item.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="max-w-7xl mx-auto px-6 py-32 border-t border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-baseline gap-4">
              <p className="text-primary font-bold tracking-[0.4em] uppercase text-[9px]">Works</p>
              <span className="text-[10px] font-medium text-muted-foreground uppercase italic tracking-widest">(04 Selected)</span>
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter uppercase leading-none">
              Featured <br />Projects
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-16">
            <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-xl">
              A collection of digital products where intentional design meets robust engineering. Each project is a testament to the pursuit of performance and aesthetic clarity.
            </p>
          </div>
        </div>

        <ProjectBentoGrid projects={projects} />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border/40 mt-32">
        <div className="space-y-4 mb-16">
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-[9px]">Further</p>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter uppercase">More About Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {/* Education Card */}
          <Card className="md:col-span-3 lg:col-span-4 bg-card border-border/40 hover:border-primary/30 transition-all duration-700 group p-10 rounded-xl flex flex-col justify-between min-h-[350px] relative overflow-hidden shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-primary font-bold tracking-[0.3em] uppercase text-[9px]">Foundation</p>
                <h3 className="text-4xl font-medium tracking-tighter text-card-foreground">Education</h3>
              </div>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                BTech in Chemical Engineering from a premier national institute. A journey of analytical problem solving.
              </p>
            </div>
          </Card>

          {/* Resume Card */}
          <Card className="md:col-span-3 lg:col-span-4 bg-card border-border/40 hover:border-primary/30 transition-all duration-700 group p-10 rounded-xl flex flex-col justify-between min-h-[350px] relative overflow-hidden shadow-sm hover:shadow-md">
             <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-bold tracking-[0.3em] uppercase text-[9px]">Credentials</p>
                <h3 className="text-4xl font-medium tracking-tighter text-card-foreground">Resume</h3>
              </div>
              <Button variant="outline" className="rounded-full h-12 px-8 text-xs border-border/50 hover:bg-primary hover:text-primary-foreground transition-all group/btn w-full md:w-fit font-bold uppercase tracking-widest">
                Download PDF
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Philosophy Card */}
          <Link href="/journal" className="md:col-span-6 lg:col-span-4 block group">
            <Card className="bg-zinc-950 border-zinc-900 overflow-hidden hover:border-primary/40 transition-all duration-1000 shadow-2xl relative p-0 border-0 rounded-xl min-h-[350px] h-full">
              <Image
                src="/images/about-philosophy-bg.jpeg"
                alt="Serene Mountain Landscape"
                fill
                className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <div className="space-y-3 transform transition-all duration-1000 group-hover:-translate-y-2">
                  <p className="text-primary font-bold tracking-[0.3em] uppercase text-[9px]">Spirit</p>
                  <h3 className="text-4xl font-medium text-white tracking-tighter uppercase">
                    Journey is <br />Home
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed font-light max-w-[240px]">
                    Finding clarity and purpose in the stillness of nature.
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      <footer className="py-24 px-6 border-t border-border/40 mt-32 bg-background">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none">Let's build <br />together.</h2>
              <p className="text-muted-foreground text-xl font-light max-w-sm">
                Open for interesting collaborations and full-time opportunities.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:saxenaadarsh35@gmail.com">
                  <Button className="rounded-full h-14 px-10 text-xs bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:opacity-90">
                    Get in touch
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end space-y-8">
              <div className="flex items-center gap-6">
                {[
                  { icon: Github, href: "https://github.com", label: "Github" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Mail, href: "mailto:saxenaadarsh35@gmail.com", label: "Email" }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-[10px] font-bold tracking-[0.4em] text-muted-foreground uppercase">
                ADARSH SAXENA © 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
}
