// Footer Component
// Generated: 2025-08-28T11:40:32.074Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Settings,
  Factory,
  Cog
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "SAP Solutions",
      links: [
        { name: "SAP S/4HANA", href: "#sap-s4hana" },
        { name: "Manufacturing Execution", href: "#mes" },
        { name: "Plant Maintenance", href: "#plant-maintenance" },
        { name: "Quality Management", href: "#quality" },
        { name: "Supply Chain", href: "#supply-chain" },
        { name: "Integration Services", href: "#integration" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Automotive", href: "#automotive" },
        { name: "Aerospace", href: "#aerospace" },
        { name: "Electronics", href: "#electronics" },
        { name: "Pharmaceuticals", href: "#pharma" },
        { name: "Food & Beverage", href: "#food-beverage" },
        { name: "Chemical", href: "#chemical" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Implementation", href: "#implementation" },
        { name: "Migration", href: "#migration" },
        { name: "Support & Maintenance", href: "#support" },
        { name: "Training", href: "#training" },
        { name: "Optimization", href: "#optimization" },
        { name: "Consulting", href: "#consulting" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "#case-studies" },
        { name: "White Papers", href: "#whitepapers" },
        { name: "Best Practices", href: "#best-practices" },
        { name: "ROI Calculator", href: "#roi-calculator" },
        { name: "Knowledge Base", href: "#knowledge" },
        { name: "Compliance", href: "#compliance" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/manufacturesmart" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/manufacturesmart" },
    { name: "GitHub", icon: Github, href: "https://github.com/manufacturesmart" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="size-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Settings className="size-6 text-background" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-foreground">ManufactureSmart</span>
                  <span className="text-sm text-accent font-medium">Solutions</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Leading SAP manufacturing integration specialists. We transform production operations 
                with intelligent automation, real-time analytics, and seamless system integration 
                for Industry 4.0 excellence.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">solutions@manufacturesmart.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 789-0123</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Industrial Tech Center, Manufacturing District</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <Factory className="size-4 text-accent" />
                Manufacturing Insights
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get SAP manufacturing trends, case studies, and implementation insights.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                  <Cog className="size-3 text-accent" />
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 ManufactureSmart Solutions. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Engineered with <Heart className="size-3 text-accent fill-current" /> for manufacturing excellence
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted/50 hover:bg-accent/20 flex items-center justify-center transition-colors duration-200 group border border-primary/10"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Security & Compliance
            </Link>
            <Link href="/partner-portal" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Partner Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}