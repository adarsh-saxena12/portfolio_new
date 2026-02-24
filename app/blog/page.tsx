"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="space-y-12 mb-20">
                    <div className="space-y-4">
                        <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Writing</p>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Blog</h1>
                    </div>
                    <p className="text-muted-foreground max-w-2xl text-lg md:text-xl font-light leading-relaxed">
                        Thoughts on digital craftsmanship, personal evolution, and the intersection of life and code.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="group block h-full">
                            <Card className="h-full bg-card/40 backdrop-blur-xl border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500">
                                <div className="p-8 h-full flex flex-col justify-between space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase tracking-wider rounded-full font-medium">
                                                {post.category}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm font-light leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="space-y-6 pt-6 border-t border-border/50">
                                        <div className="flex items-center gap-6 text-xs text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <div className="text-primary group/btn flex items-center gap-2 text-sm font-medium">
                                            Read Post
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            <footer className="py-12 px-6 border-t border-border mt-32">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm text-muted-foreground">© 2025 Adarsh. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
