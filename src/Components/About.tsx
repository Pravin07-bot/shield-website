import FadeIn from "@/components/FadeIn";

const About = () => (
  <section id="about" className="py-28 px-6">
    <div className="max-w-4xl mx-auto space-y-8">
      <FadeIn>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Who We Are</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Engineering the <span className="text-gradient">Future</span>
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="text-lg text-muted-foreground leading-relaxed">
          S.H.I.E.L.D. is a technology platform built for engineers, makers, and innovators.
          We bridge the gap between concept and execution — delivering end-to-end solutions in
          IoT, embedded systems, VLSI design, and hardware prototyping.
        </p>
      </FadeIn>
      <FadeIn delay={0.25}>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Whether you need a production-ready PCB, a smart automation system, or a fully
          documented project — we bring precision engineering to every engagement. Our mission:
          empower builders with the tools, components, and expertise to ship faster and smarter.
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="line-accent mt-16" />
      </FadeIn>
    </div>
  </section>
);

export default About;
