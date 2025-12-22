import { Zap, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Locations', href: '#locations' },
  ],
  support: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQs', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  solutions: [
    { name: 'Residential Charging', href: '#' },
    { name: 'Commercial Charging', href: '#' },
    { name: 'Fleet Solutions', href: '#' },
    { name: 'Installation Services', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-padding max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-20" />
                <Zap className="w-7 h-7 text-primary relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Satota</span>
                <span className="text-xs text-muted-foreground">Electrical Vehicle Solution</span>
              </div>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              সাতোতা বাংলাদেশের বিশ্বস্ত ইভি চার্জিং পার্টনার। দ্রুত, নির্ভরযোগ্য এবং সাশ্রয়ী চার্জিং সেবা - bKash ও Nagad-এ পেমেন্ট সুবিধা।
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">কোম্পানি</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">সাপোর্ট</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">সেবাসমূহ</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-padding max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} সাতোতা ইলেকট্রিক্যাল ভেহিকল সলিউশন। সর্বস্বত্ব সংরক্ষিত। 🇧🇩
          </p>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">উপরে যান</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
