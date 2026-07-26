import ContactForm from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-background py-16 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center space-y-4 mb-12 relative z-10">
          <p className="text-foreground font-bold tracking-[0.3em] uppercase text-[9px]">Get in Touch</p>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-foreground">Let's <span className="text-muted-foreground">Talk.</span></h1>
          <p className="text-muted-foreground text-xl max-w-xl mx-auto font-light leading-relaxed">
            Have a project in mind or just want to say hello? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-medium tracking-tighter">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-sm border border-transparent">
                    <Mail className="w-6 h-6 text-foreground group-hover:text-background" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Email</p>
                    <p className="text-xl font-medium group-hover:text-muted-foreground transition-colors">saxenaadarsh35@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-sm border border-transparent">
                    <MapPin className="w-6 h-6 text-foreground group-hover:text-background" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Location</p>
                    <p className="text-xl font-medium">Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-4">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Connect Socially</h2>
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
                    className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 group shadow-sm"
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            <Card className="p-10 bg-card border-transparent shadow-sm rounded-3xl mt-8">
              <h3 className="text-2xl font-medium tracking-tighter mb-4">Availability</h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                I'm currently available for freelance work and full-time opportunities. My typical response time is within 24 hours.
              </p>
            </Card>
          </div>

          {/* Contact Form Card */}
          <Card className="lg:col-span-7 bg-card border-transparent p-10 md:p-16 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-700">
            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  )
}
