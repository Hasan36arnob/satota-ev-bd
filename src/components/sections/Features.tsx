import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  Battery, 
  Home, 
  Map, 
  Settings2, 
  CreditCard 
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AC Charger',
    subtitle: 'Efficient and Reliable Charging',
    description: 'Our AC chargers deliver consistent and reliable power, ideal for daily charging needs at home or office locations.',
  },
  {
    icon: Battery,
    title: 'DC Charger',
    subtitle: 'Fast and Safe Charging',
    description: 'Satota DC fast chargers provide rapid power delivery, significantly reducing charging times for busy lifestyles.',
  },
  {
    icon: Home,
    title: 'Residential Charger',
    subtitle: 'Home Charging Solutions',
    description: 'Enjoy hassle-free, convenient charging right from your own home with our easy-to-use home chargers.',
  },
  {
    icon: Map,
    title: 'Charging Points',
    subtitle: 'Range of Charging Stations',
    description: 'Extensive range of electric car charging stations across major locations in Bangladesh.',
  },
  {
    icon: Settings2,
    title: 'Effortless Control',
    subtitle: 'Smart Charging Management',
    description: 'Optimize your EV charging with our intelligent management system that offers real-time control and monitoring.',
  },
  {
    icon: CreditCard,
    title: 'Easy Payments',
    subtitle: 'Flexible Payment Options',
    description: 'Integrated payment solutions give you the flexibility to pay securely through various convenient methods.',
  },
];

const qualities = [
  { number: '01', title: 'High Quality', description: 'We focus on providing high-quality products and services for a convenient and satisfactory service.' },
  { number: '02', title: 'Fast Charging', description: 'Our EV chargers are capable of delivering fast charging for a convenient charging experience.' },
  { number: '03', title: '24/7 Support', description: 'We provide 24/7 customer support for resolving any issue to ensure satisfactory service.' },
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div ref={ref} className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Our Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient">Satota</span> EV Charging Management for Everyone
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every EV owner deserves convenient, reliable, and accessible charging solutions. Let's explore our wide range of services.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-primary/80 mb-3">{feature.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Qualities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {qualities.map((quality, index) => (
            <div
              key={quality.title}
              className="relative p-8 rounded-2xl bg-gradient-card border border-border overflow-hidden"
            >
              {/* Large Number Background */}
              <div className="absolute -top-4 -right-4 text-[120px] font-bold text-primary/5 leading-none pointer-events-none">
                {quality.number}
              </div>
              
              <div className="relative z-10">
                <span className="text-primary font-bold text-lg mb-4 block">{quality.number}</span>
                <h3 className="text-xl font-semibold text-foreground mb-3">{quality.title}</h3>
                <p className="text-muted-foreground">{quality.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
