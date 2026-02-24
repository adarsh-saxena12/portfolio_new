export interface BlogPost {
    id: number
    title: string
    excerpt: string
    content: string
    date: string
    readTime: string
    category: string
    author: string
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Art of Minimal Coding",
        excerpt: "Why less is often more when it comes to building sustainable and performant applications in 2025.",
        content: `
      <p>In the rapidly evolving landscape of software development, a new philosophy is taking root: Minimal Coding. It's not about writing less code for the sake of it, but about crafting with intentionality and precision.</p>
      
      <h3>1. Clarity over Cleverness</h3>
      <p>One of the biggest traps developers fall into is the pursuit of "clever" code. While it might feel satisfying locally, clever code is often opaque and difficult to maintain. Minimal coding prioritizes readability and simplicity, ensuring that your intent is clear to anyone who reads it.</p>
      
      <h3>2. Reducing Dependency Bloat</h3>
      <p>Modern applications are often weighed down by an excessive number of packages. A minimal approach involves carefully evaluating every dependency. Can this be solved with a small utility function instead of a heavy library? Minimal coding isn't just about the lines of code you write, but the ecosystem you build.</p>
      
      <h3>3. Performance as a Feature</h3>
      <p>Less code often translates to faster load times and better performance. By stripping away the unnecessary, you create a swifter, more responsive user experience. In 2025, performance isn't just a technical metric; it's a core component of user satisfaction.</p>
    `,
        date: "Feb 15, 2025",
        readTime: "5 min read",
        category: "Development",
        author: "Adarsh",
    },
    {
        id: 2,
        title: "Balancing Growth and Stillness",
        excerpt: "Personal reflections on finding peace while pursuing ambitious career goals in the tech industry.",
        content: `
      <p>In an industry that celebrates "hustle" and constant growth, the concept of stillness can feel like a radical act. Yet, it's often in the moments of quiet that we find our greatest breakthroughs.</p>
      
      <h3>1. Defining Your Own Success</h3>
      <p>The tech world often provides a pre-defined path to success: better titles, higher salaries, and more influence. However, true growth comes from aligning your external progress with your internal values. What does success look like to you when the noise stops?</p>
      
      <h3>2. The Power of "No"</h3>
      <p>Personal growth isn't just about addition; it's about subtraction. Learning to say no to opportunities that don't serve your core mission is essential for maintaining your energy and focus. Stillness provides the clarity needed to make these difficult choices.</p>
      
      <h3>3. Integrating Rest</h3>
      <p>Rest isn't the absence of work; it's the foundation of it. By integrating stillness into your daily rituals, you create the mental space necessary for long-term creativity and resilience. You are more than your productivity.</p>
    `,
        date: "Feb 10, 2025",
        readTime: "8 min read",
        category: "Life",
        author: "Adarsh",
    },
    {
        id: 3,
        title: "Building My Personal OS",
        excerpt: "How I designed my daily rituals and digital environment for maximum creativity and focus.",
        content: `
      <p>Just as we optimize our software environments, we can also optimize our personal lives. I like to think of this as building a "Personal Operating System"—a set of rituals and environments that support my best work.</p>
      
      <h3>1. Morning Rituals</h3>
      <p>The first hour of the day sets the tone for everything that follows. My Personal OS includes a tech-free first hour, focused on hydration, movement, and intentional planning. By starting with "inward focus," I'm better prepared for "outward execution."</p>
      
      <h3>2. Digital Environment Optimization</h3>
      <p>Our tools should serve us, not the other way around. I've stripped my digital workspace to the essentials, using minimal UI settings and aggressive notification management to protect my deep work states. If it doesn't contribute to focus, it has no place in the system.</p>
      
      <h3>3. Iteration and Feedback</h3>
      <p>A personal OS is never finished. Every week, I review what worked and what didn't, making small adjustments to my rituals. This continuous improvement ensures that the system evolves as I do, always remaining a supportive framework for my goals.</p>
    `,
        date: "Feb 05, 2025",
        readTime: "6 min read",
        category: "Personal Growth",
        author: "Adarsh",
    },
]
