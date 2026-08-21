"use client"

import { Great_Vibes } from "next/font/google"

const greatVibes = Great_Vibes({ 
  weight: "400", 
  subsets: ["latin"],
  display: "swap"
})

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code2,
  ChevronRight,
  FileText,
  BarChart3,
  Zap,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProjectBentoGrid from "@/components/ProjectBentoGrid"
import GenerativeCanvas from "@/components/generative-canvas"

const projects = [
  {
    id: 1,
    title: "Envval Platform",
    description: "Cloud environment secrets & config manager built for developer teams.",
    image: "/images/screenshot-202025-12-29-20221418.png",
    bgImage: "/images/bg-1.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Pixlr AI Chat",
    description: "Multi-modal conversational AI suite powered by custom agent workflows.",
    image: "/images/screenshot-202025-12-29-20221436.png",
    bgImage: "/images/bg-2.png",
    tech: ["React", "OpenAI", "Tailwind"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Echo Realtime",
    description: "Ultra low-latency collaborative workspace for remote engineering teams.",
    image: "/images/screenshot-202025-12-29-20221354.png",
    bgImage: "/images/bg-3.png",
    tech: ["WebSockets", "Node.js", "Redis"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 4,
    title: "UI Craft System",
    description: "Museum-grade accessible component library and design token system.",
    image: "/images/screenshot-202025-12-29-20221453.png",
    bgImage: "/images/bg-4.png",
    tech: ["React", "Radix UI", "Tailwind"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Aura Telemetry",
    description: "Real-time performance dashboards and analytics for SaaS platforms.",
    image: "/modern-web-app-dashboard-ui-dark-theme.jpg",
    bgImage: "/images/bg-5.png",
    tech: ["Next.js", "Recharts", "Prisma"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 6,
    title: "Journal Platform",
    description: "Minimalist editorial reading experience for long-form engineering essays.",
    image: "/images/read-1.png",
    bgImage: "/images/bg-6.png",
    tech: ["MDX", "Next.js", "Tailwind"],
    link: "#",
    github: "https://github.com",
  },
]

export default function Portfolio() {
  const [currentExperience, setCurrentExperience] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* HERO SECTION - Minimal editorial introduction */}
      <section id="home" className="mx-auto w-full max-w-7xl px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-end lg:gap-20">
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              <span>Independent fullstack engineer</span>
              <span className="text-border">/</span>
              <span>India · 2026</span>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="max-w-4xl text-balance text-5xl font-medium leading-[0.98] tracking-[-0.06em] text-foreground sm:text-7xl lg:text-[7rem]">
                I build the quiet layer behind great digital products.
              </h1>
              <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground md:text-lg">
                Adarsh Saxena designs and engineers high-performance web applications where thoughtful systems meet clear visual language.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#work">
                <Button className="h-11 rounded-full px-6 text-sm">View selected work <ArrowUpRight data-icon="inline-end" /></Button>
              </a>
              <a href="/hire-me" className="text-sm font-medium text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground">
                Start a conversation
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative aspect-[4/3] overflow-hidden border border-border bg-muted">
              <Image src="/images/hero_man_sunset_far.png" alt="A warm dusk silhouette representing thoughtful digital craft" fill className="object-cover grayscale-[20%] transition-transform duration-700 hover:scale-[1.03]" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-background">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-background/70">Currently shaping</span>
                  <span className="text-sm font-medium">Algorizz · product engineering</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-background/70">01—26</span>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-y border-border py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Selected work</span>
              <span className="h-px bg-border" aria-hidden="true" />
              <span>Scroll to explore</span>
            </div>
            <div className="flex flex-col divide-y divide-border">
              {projects.slice(0, 3).map((project, index) => (
                <a key={project.id} href="#work" className="group flex items-center justify-between gap-4 py-3 text-sm transition-colors hover:text-muted-foreground">
                  <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
                  <span className="flex-1 font-medium">{project.title}</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-5">
          
          {/* Creative Developer Card */}
          <Card className="md:col-span-6 lg:col-span-6 bg-card border border-border/10 hover:border-foreground/30 overflow-hidden group transition-all duration-700 relative rounded-2xl hover:bg-muted/30">
            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity">
              <GenerativeCanvas />
            </div>

            <div className="relative h-[400px] flex flex-col justify-end p-8 md:p-10 z-10">
              <div className="space-y-4 transform transition-transform duration-700 group-hover:-translate-y-2">
                <p className="text-foreground font-bold tracking-[0.3em] uppercase text-[9px]">Current Role</p>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground leading-tight">SDE @ <br />Algorizz</h3>
                <p className="text-muted-foreground font-light text-lg max-w-xs">Building the future as an SDE for the past year at a high-growth startup.</p>
              </div>
            </div>
          </Card>

          {/* Introduction Card */}
          <Card className="md:col-span-6 lg:col-span-6 bg-card border-transparent p-8 md:p-10 flex flex-col justify-center rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 space-y-8 group relative overflow-hidden">
            <div className="space-y-2 relative z-10">
              <p className="text-foreground font-bold tracking-[0.3em] uppercase text-[9px]">The Intro</p>
              <h3 className="text-4xl font-medium tracking-tighter text-foreground">Hi, I'm Adarsh 👋</h3>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
              I'm a full-stack developer obsessed with creating beautiful, performant web experiences. Currently scaling digital products at Algorizz, I combine intentional design with clean, scalable code.
            </p>
            <div className="pt-4 flex items-center gap-4">
               <div className="w-12 h-[1px] bg-border" />
               <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase italic">Based in India</span>
            </div>
          </Card>

          {/* Professional Projects Card */}
          <Card
            className="md:col-span-6 lg:col-span-8 bg-card border border-border/10 hover:border-foreground/30 hover:bg-muted/30 p-8 md:p-10 flex flex-col justify-between relative group cursor-pointer min-h-[380px] transition-all duration-700 rounded-2xl overflow-hidden"
            onClick={() => setCurrentExperience((prev) => (prev + 1) % 4)}
          >
            <div className="absolute top-0 right-0 p-8 md:p-10 relative z-10">
              <span className="text-[10px] font-bold tracking-[0.4em] text-muted-foreground uppercase group-hover:text-foreground transition-colors">
                Experience / 0{currentExperience + 1}
              </span>
            </div>

            <div className="flex items-center gap-4 relative z-10">
              <h3 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Professional Journey</h3>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <Zap className="w-4 h-4 text-foreground" />
              </div>
            </div>

            <div className="flex-1 flex items-center my-6">
              <div className="space-y-4 w-full">
                {currentExperience === 0 && (
                  <div className="space-y-3 transition-all duration-700 animate-in fade-in slide-in-from-left-4">
                    <p className="text-foreground text-xs font-bold tracking-widest uppercase">Overview</p>
                    <h4 className="text-4xl md:text-5xl font-medium tracking-tighter text-muted-foreground">Building the <br />Future.</h4>
                  </div>
                )}
                {currentExperience === 1 && (
                  <div className="space-y-3 transition-all duration-700 animate-in fade-in slide-in-from-left-4">
                    <p className="text-foreground text-xs font-bold tracking-widest uppercase">2023 - Present</p>
                    <h4 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">E-Commerce Platform</h4>
                    <p className="text-muted-foreground text-lg font-normal">Lead Architect for Global Retail Solutions</p>
                  </div>
                )}
                {currentExperience === 2 && (
                  <div className="space-y-3 transition-all duration-700 animate-in fade-in slide-in-from-left-4">
                    <p className="text-foreground text-xs font-bold tracking-widest uppercase">2022 - 2023</p>
                    <h4 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Healthcare Suite</h4>
                    <p className="text-muted-foreground text-lg font-normal">Fullstack Dev for Medical Analytics</p>
                  </div>
                )}
                {currentExperience === 3 && (
                  <div className="space-y-3 transition-all duration-700 animate-in fade-in slide-in-from-left-4">
                    <p className="text-foreground text-xs font-bold tracking-widest uppercase">2021 - 2022</p>
                    <h4 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">FinTech Core</h4>
                    <p className="text-muted-foreground text-lg font-normal">Backend Engineer for Secure Payments</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-border/30 relative z-10">
              <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">Click card to navigate ({currentExperience + 1}/4)</p>
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-300 shadow-sm shrink-0">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </Card>          
          
          {/* Stats Card */}
          <Card className="md:col-span-6 lg:col-span-4 bg-card border border-border/10 hover:border-foreground/30 hover:bg-muted/30 p-8 md:p-10 min-h-[380px] rounded-2xl relative overflow-hidden group transition-all duration-500 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative h-full flex flex-col justify-between">
               <div className="space-y-2">
                 <p className="text-foreground font-bold tracking-[0.3em] uppercase text-[9px]">Activity</p>
                 <h3 className="text-3xl font-medium tracking-tighter text-foreground">Metrics</h3>
               </div>
 
               <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-secondary/80 rounded-2xl p-5 flex flex-col items-center justify-center space-y-1 group-hover:bg-border transition-colors">
                  <Github className="w-5 h-5 text-foreground" />
                  <div className="text-2xl font-bold tracking-tight text-foreground">1.9k</div>
                  <p className="text-[8px] uppercase tracking-widest text-muted-foreground font-medium">Commits</p>
                </div>
                <div className="bg-secondary/80 rounded-2xl p-5 flex flex-col items-center justify-center space-y-1 group-hover:bg-border transition-colors">
                  <Code2 className="w-5 h-5 text-foreground" />
                  <div className="text-2xl font-bold tracking-tight text-foreground">130+</div>
                  <p className="text-[8px] uppercase tracking-widest text-muted-foreground font-medium">Projects</p>
                </div>
                <div className="bg-secondary/80 rounded-2xl p-5 flex flex-col items-center justify-center space-y-1 group-hover:bg-border transition-colors">
                  <BarChart3 className="w-5 h-5 text-foreground" />
                  <div className="text-2xl font-bold tracking-tight text-foreground">99.9%</div>
                  <p className="text-[8px] uppercase tracking-widest text-muted-foreground font-medium">Uptime</p>
                </div>
                <div className="bg-foreground rounded-2xl p-5 flex flex-col items-center justify-center space-y-1">
                  <Zap className="w-5 h-5 text-background" />
                  <div className="text-2xl font-bold tracking-tight text-background">Fast</div>
                  <p className="text-[8px] uppercase tracking-widest text-background/70 font-medium">Delivery</p>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </section>

      {/* ARSENAL SECTION */}
      <section id="arsenal" className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative overflow-hidden group">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 relative z-10">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 space-y-6 relative">

            <div className="flex items-baseline gap-4 relative z-10">
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase text-foreground">Arsenal</h2>
              <span className="text-xl font-light italic text-muted-foreground">(16)</span>
            </div>
            <p className="text-muted-foreground text-lg font-light max-w-sm leading-relaxed relative z-10">
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
                <div key={item.category} className="group py-16 flex flex-col md:flex-row md:items-baseline justify-between gap-6 first:pt-0 last:pb-0 cursor-default transition-all duration-300 hover:px-4">
                  <div className="flex items-baseline gap-8">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">0{i + 1}</span>
                    <h3 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase text-foreground group-hover:text-muted-foreground transition-colors">
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

      <section id="work" className="max-w-7xl mx-auto px-6 py-16 border-t border-border/40 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground">WORKS</span>
              <span className="text-[11px] font-mono text-muted-foreground font-semibold">(06 Selected)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-base font-normal leading-relaxed max-w-md">
            A curated selection of 6 digital products built with robust fullstack architecture and modern UI clarity.
          </p>
        </div>

        <ProjectBentoGrid projects={projects} />
      </section>

      {/* MORE ABOUT ME SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative overflow-hidden group">
        
        <div className="space-y-6 mb-16 relative z-10">
          <p className="text-foreground font-bold tracking-[0.3em] uppercase text-[9px]">Further</p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase text-foreground">More About Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-5 relative z-10">
          
          {/* Education Card */}
          <Card className="md:col-span-3 lg:col-span-4 bg-card border border-border/10 hover:border-foreground/30 hover:bg-muted/30 transition-all duration-700 group p-8 md:p-10 rounded-2xl flex flex-col justify-between min-h-[360px] relative overflow-hidden">

            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-700 relative z-10">
              <GraduationCap className="w-5 h-5 text-foreground" />
            </div>
            <div className="space-y-6 mt-8 relative z-10">
              <div className="space-y-2">
                <p className="text-foreground font-bold tracking-[0.3em] uppercase text-[9px]">Foundation</p>
                <h3 className="text-4xl font-medium tracking-tighter text-foreground">Education</h3>
              </div>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                BTech in Chemical Engineering from a premier national institute. A journey of analytical problem solving.
              </p>
            </div>
          </Card>

          {/* Resume Card */}
          <Card className="md:col-span-3 lg:col-span-4 bg-card border border-border/10 hover:border-foreground/30 hover:bg-muted/30 transition-all duration-700 group p-8 md:p-10 rounded-2xl flex flex-col justify-between min-h-[360px] relative overflow-hidden">
             


             <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-700 relative z-10">
              <FileText className="w-5 h-5 text-foreground" />
            </div>
            <div className="space-y-8 mt-8 relative z-10">
              <div className="space-y-2">
                <p className="text-foreground font-bold tracking-[0.3em] uppercase text-[9px]">Credentials</p>
                <h3 className="text-4xl font-medium tracking-tighter text-foreground">Resume</h3>
              </div>
              <Button variant="outline" className="rounded-full h-14 px-8 text-xs border-border hover:bg-foreground hover:text-background transition-all group/btn w-full md:w-fit font-bold uppercase tracking-widest">
                Download PDF
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Philosophy Card */}
          <Link href="/journal" className="md:col-span-6 lg:col-span-4 block group">
            <Card className="bg-foreground border border-border/10 hover:border-foreground/30 overflow-hidden transition-all duration-1000 relative p-0 rounded-2xl min-h-[400px] h-full">
              <Image
                src="/images/about-philosophy-bg.jpeg"
                alt="Serene Mountain Landscape"
                fill
                className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[2000ms] ease-out mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <div className="space-y-4 transform transition-all duration-1000 group-hover:-translate-y-2">
                  <p className="text-white/80 font-bold tracking-[0.3em] uppercase text-[9px]">Spirit</p>
                  <h3 className="text-4xl font-medium text-white tracking-tighter uppercase">
                    Journey is <br />Home
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed font-light max-w-[240px]">
                    Finding clarity and purpose in the stillness of nature.
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* INTELLECTUAL PURSUITS & LIBRARY */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative group overflow-hidden">

        <div className="space-y-4 mb-16 relative z-10">
          <p className="text-foreground font-bold tracking-[0.4em] uppercase text-[9px]">Continuous Learning</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Intellectual Pursuits & Library</h2>
        </div>

        <div className="max-w-4xl space-y-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 border-b border-border/40 pb-6 group/item cursor-default">
            <span className="text-xs font-mono text-muted-foreground w-32 shrink-0 group-hover/item:text-foreground transition-colors">01. Reading</span>
            <p className="text-lg md:text-xl font-light text-foreground/80 group-hover/item:text-foreground transition-colors">Designing Data-Intensive Applications, Clean Architecture, The Pragmatic Programmer.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 border-b border-border/40 pb-6 group/item cursor-default">
            <span className="text-xs font-mono text-muted-foreground w-32 shrink-0 group-hover/item:text-foreground transition-colors">02. Exploring</span>
            <p className="text-lg md:text-xl font-light text-foreground/80 group-hover/item:text-foreground transition-colors">Distributed systems, Multi-agent AI architectures, and Core web vitals.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 border-b border-border/40 pb-6 group/item cursor-default">
            <span className="text-xs font-mono text-muted-foreground w-32 shrink-0 group-hover/item:text-foreground transition-colors">03. Following</span>
            <p className="text-lg md:text-xl font-light text-foreground/80 group-hover/item:text-foreground transition-colors">Uber's API Gateway, OpenAI Multi-Agent frameworks, Cloudflare engineering blog.</p>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="py-20 px-6 border-t border-border/40 bg-background relative overflow-hidden group">
        


        <div className="max-w-7xl mx-auto space-y-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
            <div className="space-y-8">
              <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-none text-foreground">Let's build <br />together.</h2>
              <p className="text-muted-foreground text-xl font-light max-w-sm">
                Open for interesting collaborations and full-time opportunities.
              </p>
              <div className="flex flex-wrap gap-4 pt-8">
                <a href="mailto:saxenaadarsh35@gmail.com">
                  <Button className="rounded-full h-16 px-12 text-sm bg-foreground text-background font-bold uppercase tracking-widest hover:opacity-90">
                    Get in touch
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end space-y-12">
              <div className="flex items-center gap-8">
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
                    className="group flex flex-col items-center gap-3"
                  >
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                      <social.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
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
