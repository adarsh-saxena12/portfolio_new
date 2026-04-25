"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, GraduationCap, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/about-philosophy-bg.jpg"
          alt="Philosophy Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-16 left-0 right-0 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary font-medium tracking-[0.4em] uppercase text-xs mb-4">Volume I</p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground uppercase leading-[0.9]">
              The <br /> Journal
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-24 space-y-24">
        {/* Philosophical Reflection */}
        <section className="space-y-12">
          <div className="space-y-6">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Reflection</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-foreground uppercase max-w-2xl">
              "In the stillness of the mountains, we find the clarity that the world obscures."
            </h2>
          </div>
          <div className="prose prose-invert prose-xl max-w-3xl">
            <p className="text-muted-foreground leading-relaxed font-light italic text-2xl">
              Life is not the absence of noise, but the presence of self—a quiet lake reflecting a vast, unchanging sky. I believe that every step we take along the winding path of life is a step closer to understanding who we truly are.
            </p>
            <p className="text-muted-foreground/80 leading-relaxed font-light text-lg mt-8">
              In my journey as a creator, I've realized that the tools we use and the languages we speak are merely extensions of our intent. The true magic happens in the moments of silence between the lines of code, where we define our purpose and our passion.
            </p>
          </div>
        </section>

        {/* Foundations Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-24 border-t border-border/50">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <GraduationCap className="w-6 h-6" />
              <p className="font-medium tracking-[0.1em] uppercase text-xs">Education</p>
            </div>
            <h3 className="text-3xl font-bold">Foundation of Logic</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My BTech in Chemical Engineering wasn't just about formulas; it was about learning how to break down complex systems into their core components. This analytical foundation is what drives my approach to fullstack development today.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <FileText className="w-6 h-6" />
              <p className="font-medium tracking-[0.1em] uppercase text-xs">Career Path</p>
            </div>
            <h3 className="text-3xl font-bold">The Craft of Building</h3>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Currently, I'm channeling this energy into high-performance digital experiences at XZ Company, focusing on the intersection of utility and beauty.
            </p>
            <Button className="rounded-full h-12 px-8 bg-foreground text-background hover:bg-foreground/90 transition-all">
              View Detailed CV
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-32 pb-16 text-center text-muted-foreground/30 italic font-serif">
          Written with purpose. 2025.
        </footer>
      </main>
    </div>
  )
}
