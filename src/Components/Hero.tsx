import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
    {/* Ambient glow effects */}
    <div className="glow-dot w-[500px] h-[500px] top-1/4 left-1/2 -translate-x-1/2" />
    <div className="glow-dot w-[300px] h-[300px] bottom-1/4 right-1/4" style={{ background: "hsl(48 96% 53% / 0.04)" }} />

    <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-mono text-xs md:text-sm tracking-[0.35em] uppercase text-muted-foreground"
      >
        Secure Hub for Intelligent Engineering & Learning Design
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
      >
        <span className="text-gradient">S.H.I.E.L.D.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto font-light"
      >
        Where Innovation Meets Implementation
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
      >
        <Button variant="hero" size="lg" className="text-base px-10 py-7" asChild>
          <a href="#contact">Get Your Project Done</a>
        </Button>
        <Button variant="hero-outline" size="lg" className="text-base px-10 py-7" asChild>
          <a href="#components">Explore Components</a>
        </Button>
      </motion.div>
    </div>

    {/* Bottom accent line */}
    <div className="absolute bottom-0 left-0 right-0 line-accent" />
  </section>
);

export default Hero;
