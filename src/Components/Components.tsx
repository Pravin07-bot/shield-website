import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const components = [
  { name: "ESP32 DevKit V1", price: "₹450", desc: "Wi-Fi + Bluetooth dual-core microcontroller, 30-pin development board.", image: "/images/components/esp32.jpg" },
  { name: "DHT22 Sensor", price: "₹180", desc: "High-precision digital temperature and humidity sensor module.", image: "/images/components/dht22.jpg" },
  { name: "4-Channel Relay Module", price: "₹220", desc: "Optocoupler-isolated relay module for AC/DC load switching.", image: "/images/components/relay.jpg" },
  { name: "Arduino Uno R3", price: "₹550", desc: "ATmega328P-based development board, the industry standard for prototyping.", image: "/images/components/arduino.jpg" },
  { name: "Ultrasonic Sensor HC-SR04", price: "₹90", desc: "Non-contact distance measurement module, 2cm–400cm range.", image: "/images/components/ultrasonic.jpg" },
  { name: "Servo Motor SG90", price: "₹120", desc: "Micro servo with 180° rotation, ideal for robotics and automation.", image: "/images/components/servo.jpg" },
];

const Components = () => (
  <section id="components" className="py-28 px-6">
    <div className="max-w-6xl mx-auto space-y-14">
      <FadeIn>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Shop</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Components <span className="text-gradient">Store</span>
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((c, i) => (
          <FadeIn key={c.name} delay={i * 0.08}>
            <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 group hover:scale-105 hover:shadow-xl border border-transparent hover:border-yellow-400/30">

              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img 
                  src={c.image} 
                  alt={c.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {c.desc}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-primary font-mono font-bold text-xl">
                    {c.price}
                  </span>

                  <Button size="sm" variant="hero" className="px-5" asChild>
                    <a href="#contact">Buy Now</a>
                  </Button>
                </div>
              </div>

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

export default Components;