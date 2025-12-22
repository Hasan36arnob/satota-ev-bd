import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dcCharger from '@/assets/dc-charger.jpg';
import acCharger from '@/assets/ac-charger.jpg';

const products = [
  {
    image: dcCharger,
    title: 'DC Fast Charger',
    category: 'Commercial',
    description: 'High-power DC fast charging stations for rapid energy delivery, perfect for commercial locations and highways.',
    specs: ['Up to 120kW', 'CCS2 / CHAdeMO', '20-80% in 30 mins'],
  },
  {
    image: acCharger,
    title: 'AC Wall Box',
    category: 'Residential',
    description: 'Compact and efficient wall-mounted chargers for home and office use with smart features.',
    specs: ['7kW - 22kW', 'Type 2 Connector', 'WiFi Enabled'],
  },
];

const usageScenarios = [
  'Office Buildings',
  'Shopping Malls',
  'Residential Areas',
  'Petrol Stations',
  'Parking Lots',
  'Hotels & Resorts',
];

export const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Our Products</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Essential <span className="text-gradient">EV Charging</span> Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide a range of EV charging products to meet the growing demands of EV charging in Bangladesh.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative bg-gradient-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1.5 rounded-lg bg-muted text-sm text-foreground"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Usage Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Usage Scenarios</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {usageScenarios.map((scenario, index) => (
              <motion.div
                key={scenario}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-6 py-3 rounded-full glass hover:border-primary/50 transition-colors cursor-default"
              >
                <span className="text-foreground font-medium">{scenario}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
