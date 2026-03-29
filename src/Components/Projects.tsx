import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/FadeIn";

const projects = [
  { title: "Smart Irrigation System", tags: ["IoT", "ESP32", "Sensors"], desc: "Automated soil-moisture based watering system with mobile dashboard and cloud logging." },
  { title: "Home Automation Hub", tags: ["Embedded", "Relay", "WiFi"], desc: "Voice-controlled smart home controller with scheduling, OTA updates, and energy monitoring." },
  { title: "RFID Attendance Tracker", tags: ["RFID", "Arduino", "Database"], desc: "Contactless attendance system with real-time database sync and admin reporting panel." },
  { title: "4-bit ALU Design", tags: ["VLSI", "Verilog", "Simulation"], desc: "Synthesizable 4-bit arithmetic logic unit with full testbench verification and timing analysis." },
  { title: "Weather Station", tags: ["IoT", "Sensors", "Display"], desc: "Multi-sensor environmental monitor with OLED display and ThingSpeak data visualization." },
  { title: "Line Following Robot", tags: ["Robotics", "Arduino", "PID"], desc: "PID-controlled autonomous robot with IR sensor array and real-time path correction." },
];

const Projects = () => (
  <section id="projects" className="py-28 px-6">
    <div className="max-w-6xl mx-auto space-y-14">
      <FadeIn>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Featured <span className="text-gradient">Projects</span>
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <div className="glass-card rounded-xl p-6 h-full flex flex-col transition-all duration-300 group hover:scale-105 hover:shadow-xl border border-transparent hover:border-yellow-400/30">

              {/* Yellow Accent Line */}
              <div className="w-10 h-[2px] bg-yellow-400 mb-2"></div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-[hsl(48_96%_53%_/_0.2)] text-primary text-[10px] font-mono uppercase tracking-wider"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mt-2">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {p.desc}
              </p>

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

export default Projects;