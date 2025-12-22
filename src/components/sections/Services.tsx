import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Plug, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Gauge, 
  CheckCircle2 
} from 'lucide-react';

const services = [
  {
    icon: Plug,
    title: 'Compatibility',
    description: 'Our EV chargers come with a hybrid plug-in feature, making them compatible with a wide range of EV cars and a one-stop solution for every EV owner.',
  },
  {
    icon: Shield,
    title: 'Safety Features',
    description: 'The EV chargers are equipped with advanced safety features, such as overvoltage protection, and sturdy build quality to ensure a safe and reliable charging experience.',
  },
  {
    icon: BarChart3,
    title: 'Intelligent Monitoring',
    description: 'You\'ll get essential information on EV charging progress, battery health, over or undervoltage insights, etc. with the built-in intelligent monitoring features.',
  },
  {
    icon: CheckCircle2,
    title: 'Easy to Use',
    description: 'The EV charger comes with a super easy user-friendly interface and functionality, which makes the EV charging device more convenient and easy to operate.',
  },
  {
    icon: Smartphone,
    title: 'Smart App Control',
    description: 'With our app, you can find EV charging stations, manage charging sessions, schedule future charges, and track your energy usage.',
  },
  {
    icon: Gauge,
    title: 'High-Speed Charging',
    description: 'Our EV chargers are designed to deliver quick charging to EVs. The innovative technology provides a convenient and time-efficient charging experience.',
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div ref={ref} className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Best EV Charging Service Provider <br className="hidden md:block" />
            <span className="text-gradient">In Bangladesh</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide comprehensive EV charging solutions with advanced technology and exceptional service quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 card-shadow">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
