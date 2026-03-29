import { Cpu, CircuitBoard, Layers, FolderKanban, FileText } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  { icon: Cpu, title: "IoT Solutions", desc: "Smart connected systems with cloud integration, real-time monitoring, and edge computing capabilities." },
  { icon: CircuitBoard, title: "Embedded Systems", desc: "Firmware development, microcontroller programming, and hardware-software co-design for production." },
  { icon: Layers, title: "VLSI Design", desc: "Digital and analog IC design, RTL coding, synthesis, and full verification workflows." },
  { icon: FolderKanban, title: "Project Development", desc: "Full-cycle project execution from architecture to deployment with professional documentation." },
  { icon: FileText, title: "Documentation", desc: "IEEE-standard reports, technical write-ups, and presentation-ready deliverables." },
];

const Services = () => (
  <section id="services" className="py-28 px-6">
    <div className="max-w-6xl mx-auto space-y-14">
      <FadeIn>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">What We Do</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Our <span className="text-gradient">Services</span>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 h-full space-y-4 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn>
        <div className="line-accent mt-8" />
      </FadeIn>
    </div>
  </section>
);

export default Services;
