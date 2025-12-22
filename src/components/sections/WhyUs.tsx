import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Globe, 
  Settings, 
  Smartphone,
  Zap
} from 'lucide-react';

const reasons = [
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description: 'We deliver advanced EV charging equipment designed for efficient and rapid power delivery.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable and Safe',
    description: 'Our EV charging stations adhere to the highest safety standards for safe charging operation every time.',
  },
  {
    icon: Globe,
    title: 'Nationwide Accessibility',
    description: 'Enjoy convenient access to our extensive network of charging stations strategically set up across Bangladesh.',
  },
  {
    icon: Settings,
    title: 'Flexible Options',
    description: 'We offer versatile charging solutions suitable for residential and commercial EV charging needs.',
  },
  {
    icon: Smartphone,
    title: 'Smart App Integration',
    description: 'Our app provides intuitive control and real-time management of your charging sessions at your fingertips.',
  },
];

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />

      <div ref={ref} className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Why Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient">Satota</span> EV Charger?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our goal is to establish a strong network of electric car charging stations nationwide to support sustainable transportation.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-6 animate-pulse-glow">
              <Zap className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Need EV Charging Services?
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Satota Electrical Vehicle Solution proudly stands as a pioneer in EV charging infrastructure in Bangladesh. Contact us to learn more about our solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow hover:opacity-90 transition-opacity"
            >
              Contact Us Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
