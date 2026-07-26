"use client"

import Image from "next/image"
import { ArrowUpRight, Download, Briefcase, GraduationCap, TrendingUp } from "lucide-react"

export default function HireMePage() {
  return (
    <main className="min-h-screen bg-background selection:bg-foreground selection:text-background font-sans overflow-x-hidden">

      {/* 1. HERO SECTION (The Hook) */}
      <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto relative">
        <div className="space-y-6 relative z-10 max-w-4xl">
          <p className="text-foreground font-bold tracking-[0.4em] uppercase text-[10px]">Open to Opportunities</p>
          <h1 className="text-6xl md:text-9xl font-medium tracking-tighter uppercase leading-[0.85] text-foreground">
            Hire <br />Me.
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-2xl pt-8">
            I build high-performance, scalable web applications that combine robust engineering with museum-grade aesthetic clarity.
          </p>
        </div>
      </section>

      {/* 2. VALUE SECTION (The Pitch) */}
      <section className="py-16 px-6 border-t border-border/40 relative group">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase">How I <br/>Drive Value</h2>
            <p className="text-muted-foreground font-light max-w-xs">Focusing on business outcomes, not just writing code.</p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12 relative group/value">
              

              
              <div className="space-y-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 group/item cursor-default border-b border-border/40 pb-12">
                  <div className="md:col-span-4">
                    <h4 className="text-xl font-medium group-hover/item:text-indigo-500 transition-colors">Scalable Architecture</h4>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-muted-foreground font-light text-lg leading-relaxed group-hover/item:text-foreground transition-colors">
                      Building robust, resilient backend systems that easily handle high-traffic spikes without crashing, ensuring your platform is always online and ready to scale.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 group/item cursor-default border-b border-border/40 pb-12">
                  <div className="md:col-span-4">
                    <h4 className="text-xl font-medium group-hover/item:text-indigo-500 transition-colors">Product Velocity</h4>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-muted-foreground font-light text-lg leading-relaxed group-hover/item:text-foreground transition-colors">
                      Moving quickly from concept to production. I focus on shipping high-impact features that directly drive revenue and user engagement, without sacrificing code quality.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 group/item cursor-default border-b border-border/40 pb-12">
                  <div className="md:col-span-4">
                    <h4 className="text-xl font-medium group-hover/item:text-indigo-500 transition-colors">Premium Experiences</h4>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-muted-foreground font-light text-lg leading-relaxed group-hover/item:text-foreground transition-colors">
                      Bridging the gap between complex engineering and beautiful design. I build pixel-perfect, highly responsive interfaces that make your product feel premium and effortless.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 group/item cursor-default border-b border-border/40 pb-12">
                  <div className="md:col-span-4">
                    <h4 className="text-xl font-medium group-hover/item:text-indigo-500 transition-colors">Performance Optimization</h4>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-muted-foreground font-light text-lg leading-relaxed group-hover/item:text-foreground transition-colors">
                      Speed is revenue. I optimize Core Web Vitals and load times to ensure higher conversion rates, better search rankings, and incredibly smooth user journeys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RECENT WORK SECTION (The Proof) */}
      <section className="py-48 px-6 relative overflow-hidden group">
        
        {/* Vintage Colored Lily Accent */}
        <div className="absolute top-1/2 -right-16 md:-right-32 w-80 h-80 opacity-40 group-hover:opacity-80 transition-opacity duration-1000 -rotate-12 pointer-events-none z-0 animate-float" style={{ animationDuration: '10s' }}>
          <Image src="/images/colored_lily.png" alt="" fill unoptimized className="object-contain" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 border-b border-border/40 pb-8 mb-16">
            <Briefcase className="w-8 h-8 text-muted-foreground" />
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase text-foreground">Recent Work</h2>
          </div>

          <div className="space-y-16 max-w-4xl">
            {/* Algorizz Role */}
            <div className="group cursor-default relative">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-3xl font-medium text-foreground group-hover:text-indigo-500 transition-colors">Software Development Engineer</h3>
                  <p className="text-muted-foreground font-mono text-sm mt-2 uppercase tracking-widest">Algorizz • Full Time</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground">Past Year — Present</span>
              </div>
              
              <ul className="space-y-6">
                <li className="flex gap-6 items-start">
                  <span className="text-muted-foreground/50 font-mono text-xs mt-1">01</span>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Spearheaded the architectural redesign of the core client dashboard, transitioning a legacy monolith to a highly decoupled Next.js application, resulting in a <strong className="text-foreground font-normal">40% reduction in initial load times</strong> and significantly improved Core Web Vitals.
                  </p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-muted-foreground/50 font-mono text-xs mt-1">02</span>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Engineered robust backend API microservices using Node.js and PostgreSQL, optimizing complex database queries to handle high-volume concurrent data processing with near-zero latency for enterprise clients.
                  </p>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-muted-foreground/50 font-mono text-xs mt-1">03</span>
                  <p className="text-lg font-light text-foreground/80 leading-relaxed">
                    Collaborated closely with the product and design teams to implement a strict, accessible design system, ensuring pixel-perfect UI consistency across all responsive breakpoints while maintaining strict performance budgets.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDATION & CTA SECTION */}
      <section className="py-16 px-6 relative group overflow-hidden bg-background">
        


        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-center">
          
          {/* Education Foundation */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4 border-b border-border/40 pb-4">
              <GraduationCap className="w-6 h-6 text-muted-foreground" />
              <h3 className="text-2xl font-medium tracking-tight">The Foundation</h3>
            </div>
            <div className="group cursor-default">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <h4 className="text-xl font-medium group-hover:text-indigo-500 transition-colors">B.Tech in Computer Science</h4>
                <span className="text-sm font-mono text-muted-foreground">2020 — 2024</span>
              </div>
              <p className="text-muted-foreground font-light mt-2">Built a rigorous understanding of Distributed Systems, Advanced Data Structures, and Software Architecture before entering the industry.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="lg:col-span-7 flex justify-end">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group/btn relative inline-flex flex-col items-start p-12 bg-foreground text-background rounded-3xl hover:bg-indigo-600 transition-colors duration-500 overflow-hidden">
              <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-70 mb-4">View The Details</span>
              <span className="text-4xl md:text-5xl font-medium tracking-tighter uppercase flex items-center gap-6">
                Download <br/>Resume
                <div className="w-16 h-16 rounded-full bg-background/10 flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:-rotate-12 transition-all duration-500">
                  <Download className="w-8 h-8" />
                </div>
              </span>
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}
