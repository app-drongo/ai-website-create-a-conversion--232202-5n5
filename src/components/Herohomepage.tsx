// Herohomepage Component
// Generated: 2025-08-28T11:40:32.074Z
// Template: hero-s001
// Context: Homepage
// Position: pages.0.sections.0

// components/hero/SplitHero.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Play } from "lucide-react"
import Image from "next/image"

export default function Herohomepage() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Subtle gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* LEFT: Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/20 px-3 py-1.5 text-sm font-medium text-accent">
              <span className="inline-block h-2 w-2 rounded-full bg-accent"></span>
              Enterprise SAP Integration Leader
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Transform Manufacturing with
              <span className="block bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                Smart SAP Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Streamline operations, boost efficiency, and drive digital transformation with our enterprise-grade SAP manufacturing integration solutions.
            </p>

            {/* Feature list */}
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Real-time production visibility",
                "Seamless ERP integration",
                "Advanced analytics & reporting",
                "Industry 4.0 ready solutions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group px-7 text-base bg-accent hover:bg-accent/90 text-secondary">
                Schedule Consultation
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base border-accent/30 text-accent hover:bg-accent/10">
                <Play className="mr-2 size-5" /> View Case Studies
              </Button>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            {/* Mockup container */}
            <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop"
                  alt="SAP Manufacturing Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Tag overlay */}
              <div className="absolute left-4 top-4 rounded-full bg-secondary/90 px-3 py-1 text-xs font-medium text-accent shadow">
                Live Manufacturing Data
              </div>
            </div>

            {/* Floating accents */}
            <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border border-accent/20 bg-secondary/95 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Efficiency Gain</p>
              <p className="text-sm text-accent">
                <span className="font-semibold">35%</span> Average
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border border-accent/20 bg-secondary/95 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Implementation</p>
              <p className="text-sm text-accent">
                <span className="font-semibold">90</span> Days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}