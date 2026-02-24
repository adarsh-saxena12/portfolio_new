"use client"

import { useParams } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import { Calendar, Clock, ChevronLeft, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPostDetail() {
    const { id } = useParams()
    const post = blogPosts.find((p) => p.id === Number(id))

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Post not found</h1>
                    <Link href="/blog">
                        <Button variant="outline">Back to Blog</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <article className="max-w-4xl mx-auto px-6 py-24 md:py-32">
                <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Blog
                </Link>

                <header className="space-y-8 mb-16">
                    <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase tracking-wider rounded-full font-medium">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </div>
                    </div>
                </header>

                <div
                    className="prose prose-invert prose-lg max-w-none 
          prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed 
          prose-strong:text-foreground prose-li:text-muted-foreground
          [&>h3]:text-3xl [&>h3]:font-bold [&>h3]:mt-12 [&>h3]:mb-6
          [&>p]:mb-8"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <footer className="mt-24 pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 text-center md:text-left">
                        <p className="text-sm font-medium">Enjoyed this post?</p>
                        <p className="text-xs text-muted-foreground">Share your thoughts on Twitter or LinkedIn.</p>
                    </div>

                    <div className="flex gap-4">
                        <Link href="/blog">
                            <Button variant="outline" className="rounded-full">
                                Read More Posts
                            </Button>
                        </Link>
                    </div>
                </footer>
            </article>

            <footer className="py-12 px-6 border-t border-border mt-32">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm text-muted-foreground">© 2025 Adarsh. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
