import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Building2, Smartphone } from 'lucide-react';
import evMallImage from '@/assets/ev-charging-mall.jpg';

const features = [
  {
    icon: Zap,
    title: 'EV Charging Station Network',
    description: 'Satota is working to create Bangladesh\'s first and largest EV charging network so that you never worry about the charging range within the city or highways.',
  },
  {
    icon: Building2,
    title: 'EV Charging Station Installation',
    description: 'We supply a convenient, professional technical & field support team for EV charging station installation. Select the best pack of EV chargers according to your requirements and budget.',
  },
  {
    icon: Smartphone,
    title: 'Smart EV Charging App',
    description: 'Our app helps you instantly locate the nearest electric vehicle charging station in Bangladesh. Access detailed, real-time information about each EV charging point.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            EV Charging Stations in <span className="text-gradient">Bangladesh</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Satota Electrical Vehicle Solution proudly stands as a pioneer in EV charging infrastructure in Bangladesh, committed to a sustainable future.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={evMallImage}
                alt="EV Charging at Shopping Mall"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Zap className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">24/7</p>
                    <p className="text-muted-foreground">Charging Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/30 rounded-2xl" />
          </motion.div>

          {/* Features Side */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group flex gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-card border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
