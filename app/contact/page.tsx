import ContactForm from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-background py-16 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Get in Touch</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Let's <span className="text-muted-foreground">Talk.</span></h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Have a project in mind or just want to say hello? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors border border-border/40">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Email</p>
                    <p className="text-lg font-medium group-hover:text-primary transition-colors">saxenaadarsh35@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors border border-border/40">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Location</p>
                    <p className="text-lg font-medium">Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-widest">Connect Socially</h2>
              <div className="flex gap-4">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all border border-border/40 group shadow-sm"
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 rounded-[2rem]">
              <h3 className="text-xl font-bold mb-2">Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. My typical response time is within 24 hours.
              </p>
            </Card>
          </div>

          {/* Contact Form Card */}
          <Card className="lg:col-span-7 bg-card/50 backdrop-blur-xl border-border/40 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  )
}
