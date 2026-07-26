"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, GraduationCap, FileText } from "lucide-react"

export default function JournalPage() {
  return (
    <main className="w-full font-sans overflow-x-hidden selection:bg-foreground selection:text-background">
      {/* Hero Section */}
      <div className="relative pt-16 pb-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="relative z-10 space-y-6">
          <p className="text-foreground font-bold tracking-[0.4em] uppercase text-[10px]">Volume I</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter uppercase leading-[0.85] text-foreground">
            The <br /> Journal
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-md pt-8">
            Thoughts, reflections, and explorations at the intersection of robust engineering and minimalist design.
          </p>
        </div>

        {/* Right: Uploaded Image */}
        <div className="relative w-full aspect-[4/3] lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          {/* Vintage Filter Overlay */}
          <div className="absolute inset-0 bg-[#8c7853] mix-blend-color z-10 opacity-10 pointer-events-none"></div>
          <Image src="/images/journal_flower.jpg" alt="Journal Cover" fill className="object-cover blur-[1.5px] sepia-[.2] contrast-110 saturate-75 scale-[1.05]" />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16 relative">


        {/* Philosophical Reflection */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 border-t border-border/40 pt-16">
          <div className="lg:col-span-4 space-y-6">
            <p className="text-foreground font-bold tracking-[0.3em] uppercase text-[9px]">Reflection</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase">
              Clarity <br /> In Stillness
            </h2>
          </div>
          <div className="lg:col-span-8 prose prose-invert prose-xl max-w-3xl">
            <p className="text-foreground leading-relaxed font-light italic text-3xl">
              "Life is not the absence of noise, but the presence of self—a quiet lake reflecting a vast, unchanging sky."
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mt-12">
              Every step we take along the winding path of life is a step closer to understanding who we truly are. In my journey as a creator, I've realized that the tools we use and the languages we speak are merely extensions of our intent.
            </p>
            <p className="text-muted-foreground/80 leading-relaxed font-light text-lg mt-8">
              The true magic happens in the moments of silence between the lines of code, where we define our purpose and our passion. True architecture is not about adding more; it is about taking away until nothing is left but the absolute essential.
            </p>
          </div>
        </section>

        {/* Foundations Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 border-t border-border/40 pt-24 pb-24">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4 border-b border-border/40 pb-4">
              <GraduationCap className="w-6 h-6 text-muted-foreground" />
              <h3 className="text-2xl font-medium tracking-tight">Foundation of Logic</h3>
            </div>
            <div className="group cursor-default">
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                My background in engineering wasn't just about formulas; it was about learning how to break down complex systems into their core components. This analytical foundation drives my approach to fullstack development today, allowing me to see the architecture behind the interface.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 hidden lg:block"></div>

          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4 border-b border-border/40 pb-4">
              <FileText className="w-6 h-6 text-muted-foreground" />
              <h3 className="text-2xl font-medium tracking-tight">The Craft of Building</h3>
            </div>
            <div className="group cursor-default space-y-8">
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                Currently, I'm channeling this energy into high-performance digital experiences, focusing on the beautiful intersection of utility and absolute minimalism.
              </p>
              <Link href="/hire-me" className="inline-block border-b border-foreground text-foreground uppercase tracking-widest text-xs font-bold pb-2 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                View My Recent Work
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation & Footer */}
        <div className="pt-32 pb-16 border-t border-border/20 relative z-10">
          <nav className="flex justify-center mb-16">
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform duration-500 group">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>
          </nav>
          <footer className="text-center text-muted-foreground/40 font-sans">
            Written with purpose. 2026.
          </footer>
        </div>
      </div>
    </main>
  )
}
