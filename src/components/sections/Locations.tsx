import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const locations = [
  { city: 'ঢাকা বিভাগ', stations: 25, status: 'active', areas: 'গুলশান, বনানী, ধানমন্ডি, উত্তরা' },
  { city: 'চট্টগ্রাম বিভাগ', stations: 12, status: 'active', areas: 'জিইসি, নাসিরাবাদ, হালিশহর' },
  { city: 'সিলেট বিভাগ', stations: 6, status: 'active', areas: 'জিন্দাবাজার, আম্বরখানা' },
  { city: 'রাজশাহী বিভাগ', stations: 4, status: 'active', areas: 'সাহেব বাজার, নিউ মার্কেট' },
  { city: 'খুলনা বিভাগ', stations: 3, status: 'active', areas: 'বয়রা, দৌলতপুর' },
  { city: 'কক্সবাজার', stations: 4, status: 'coming', areas: 'কলাতলী, ইনানী বিচ' },
  { city: 'রংপুর বিভাগ', stations: 2, status: 'coming', areas: 'শাপলা চত্বর' },
  { city: 'বরিশাল বিভাগ', stations: 2, status: 'coming', areas: 'সদর রোড' },
];

export const Locations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="locations" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">চার্জিং পয়েন্ট</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ৮ বিভাগে আমাদের <span className="text-gradient">চার্জিং স্টেশন</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            পদ্মা সেতু পার হয়ে দক্ষিণবঙ্গে, বঙ্গবন্ধু সেতু পার হয়ে উত্তরবঙ্গে - সর্বত্র সাতোতার চার্জিং নেটওয়ার্ক।
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 card-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {location.city}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {location.stations}টি স্টেশন
                      </p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    location.status === 'active' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-accent/20 text-accent'
                  }`}>
                    {location.status === 'active' ? 'সক্রিয়' : 'শীঘ্রই আসছে'}
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mt-2">{location.areas}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
                  <span className="text-sm text-muted-foreground">সব স্টেশন দেখুন</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: '৫০+', label: 'চার্জিং স্টেশন' },
            { value: '৫০০০+', label: 'সন্তুষ্ট গ্রাহক' },
            { value: '৮', label: 'বিভাগে সেবা' },
            { value: '৪০%', label: 'খরচ সাশ্রয়' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl glass"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
