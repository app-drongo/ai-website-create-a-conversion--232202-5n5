// Features Component
// Generated: 2025-08-28T11:40:32.074Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Cog, 
  Shield, 
  BarChart3, 
  Globe, 
  Zap, 
  Database,
  Settings,
  Headphones,
  TrendingUp
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Cog,
      title: "Production Optimization",
      description: "Real-time monitoring and optimization of manufacturing processes with AI-driven insights.",
      badge: "Operations"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols ensuring your manufacturing data stays protected.",
      badge: "Security"
    },
    {
      icon: Database,
      title: "SAP Integration",
      description: "Seamless integration with SAP ERP, MES, and WMS systems for unified operations.",
      badge: "Integration"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards and KPI tracking for data-driven manufacturing decisions.",
      badge: "Analytics"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to reduce errors and increase efficiency.",
      badge: "Automation"
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description: "Deep visibility into OEE, throughput, and quality metrics across all production lines.",
      badge: "Performance"
    },
    {
      icon: Settings,
      title: "Custom Configuration",
      description: "Tailored solutions that adapt to your unique manufacturing processes and requirements.",
      badge: "Customization"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Dedicated SAP specialists and manufacturing consultants available 24/7.",
      badge: "Support"
    },
    {
      icon: Globe,
      title: "Multi-Plant Management",
      description: "Centralized control and visibility across multiple manufacturing facilities worldwide.",
      badge: "Scalability"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-accent/30 text-accent">
            Manufacturing Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Complete SAP Manufacturing
            <span className="block bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Integration Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive enterprise solutions designed to optimize your manufacturing operations, 
            enhance productivity, and accelerate your digital transformation journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-accent/20 bg-card hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors duration-300">
                      <Icon className="size-6 text-accent" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-secondary/80 text-accent">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-accent/30 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your manufacturing operations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-accent text-secondary rounded-lg font-medium hover:bg-accent/90 transition-colors">
              Request Demo
            </button>
            <button className="px-6 py-3 border border-accent/30 text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors">
              Download Whitepaper
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}