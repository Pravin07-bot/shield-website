import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const Contact = () => (
  <section id="contact" className="py-28 px-6 relative">
    <div className="glow-dot w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2" />
    <div className="relative z-10 max-w-2xl mx-auto text-center space-y-10">
      <FadeIn>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Let's Talk</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Get in <span className="text-gradient">Touch</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-lg text-muted-foreground">
          Ready to build something remarkable? Reach out and let's discuss your next project.
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* WhatsApp Button */}
          <Button variant="hero" size="lg" className="text-base px-10 py-7 gap-3" asChild>
            <a 
              href="https://wa.me/919342937921?text=Hi%20S.H.I.E.L.D.,%20I%20am%20interested%20in%20your%20services%20/%20components"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              Contact on WhatsApp
            </a>
          </Button>

          {/* Email Button */}
          <Button variant="hero-outline" size="lg" className="text-base px-10 py-7 gap-3" asChild>
            <a href="mailto:SHIELDHUB05@outlook.com">
              <Mail className="h-5 w-5" />
              Send Email
            </a>
          </Button>

        </div>
      </FadeIn>
    </div>
  </section>
);

export default Contact;