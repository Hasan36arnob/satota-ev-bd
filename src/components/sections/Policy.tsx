import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, FileText, CheckCircle } from 'lucide-react';

const policyPoints = [
  {
    icon: Shield,
    title: 'Compliance with Laws and Regulations',
    description: 'Satota Engineering and its employees, contractors, interns, and volunteers must uphold all legal requirements and regulations pertinent to the business operations.',
  },
  {
    icon: CheckCircle,
    title: 'Ethical Business Practices',
    description: 'Every action taken by Satota Engineering should align with ethical principles. This means conducting business with honesty, integrity, and fairness.',
  },
  {
    icon: FileText,
    title: 'Code of Conduct',
    description: 'Our comprehensive Code of Conduct outlines the principles and guidelines that govern the behavior of all individuals associated with Satota Engineering.',
  },
];

const codeOfConductItems = [
  'Compliance with Laws and Regulations',
  'Ethical Business Practices',
  'Conflict of Interest',
  'Confidentiality',
  'Intellectual Property',
  'Anti-Corruption',
  'Health and Safety',
  'Environmental Responsibility',
  'Diversity and Inclusion',
  'Fair Employment Practices',
  'Reporting Violations',
  'Use of Company Resources',
  'Accuracy of Records and Reporting',
  'Professionalism',
  'Supplier and Partner Relationships',
  'Gifts and Entertainment',
  'Social Responsibility',
  'Training and Awareness',
  'Continuous Improvement',
  'Acknowledgment'
];

export const Policy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/code_of_conduct_-_satota_engineering.pdf';
    link.download = 'code_of_conduct_-_satota_engineering.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="policy" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Our Policy</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Code of <span className="text-gradient">Conduct</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            At Satota Engineering, our commitment to ethical behavior, integrity, and professionalism is paramount.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-center">
              This comprehensive Code of Conduct outlines the principles and guidelines that govern the behavior of all individuals associated with Satota Engineering, including management, employees, contractors, student interns, trainees, and volunteers. Adherence to this code is fundamental to Satota's success and reputation as a responsible and ethical organization.
            </p>
          </div>
        </motion.div>

        {/* Policy Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {policyPoints.map((policy, index) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center mx-auto mb-4">
                <policy.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{policy.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{policy.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Code of Conduct List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Key Principles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {codeOfConductItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-md mx-auto">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Download Full Policy</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Get the complete Code of Conduct document for detailed guidelines.
            </p>
            <button
              onClick={handleDownloadPDF}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Download PDF
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
