import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  UserPlus, 
  Lightbulb, 
  Users, 
  Rocket, 
  TrendingUp, 
  Trophy,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const initiatives = [
  {
    icon: Trophy,
    step: '01',
    title: 'E-Summit',
    description: 'Our flagship event organized annually that witnesses massive participation from across the country. We aim to ignite the entrepreneur inside students.',
    details: ['Competitions exploring entrepreneurship', 'Networking opportunities', 'Industry expert sessions', 'Startup showcase'],
    color: 'text-primary'
  },
  {
    icon: Users,
    step: '02',
    title: 'Lecture Series',
    description: 'Expert guidance sessions to make skill development easier by enriching knowledge with wisdom from experts across the country.',
    details: ['Expert talks', 'Skill development', 'Industry insights', 'Interactive sessions'],
    color: 'text-secondary'
  },
  {
    icon: Lightbulb,
    step: '03',
    title: 'Engendea',
    description: 'A day-long event where multiple teams participate to showcase their innovation skills and present their business models.',
    details: ['Innovation showcase', 'Business model presentations', 'Creative problem-solving', 'Entrepreneurial spirit'],
    color: 'text-accent'
  },
  {
    icon: UserPlus,
    step: '04',
    title: 'Workshops',
    description: 'Interactive training sessions for the entrepreneurial community to gain hands-on experience in developing successful business models.',
    details: ['Business model development', 'Marketing strategies', 'Product development', 'Hands-on training'],
    color: 'text-neon-green'
  },
  {
    icon: TrendingUp,
    step: '05',
    title: 'Awareness Camps',
    description: 'EAC designed to educate and create awareness about entrepreneurship, inspiring individuals to start their own businesses.',
    details: ['Entrepreneurship education', 'Awareness programs', 'Skill building', 'Resource sharing'],
    color: 'text-neon-orange'
  },
  {
    icon: Rocket,
    step: '06',
    title: 'Talk Sessions',
    description: 'Startup founders, successful entrepreneurs, and VCs share their experiences and insights into entrepreneurship.',
    details: ['Founder stories', 'VC insights', 'Experience sharing', 'Networking'],
    color: 'text-neon-blue'
  }
];

const iitBombayProcess = [
  {
    title: 'Selection Process',
    description: 'IIT Bombay follows a rigorous selection process including aptitude tests, interviews, and project presentations.',
    icon: CheckCircle
  },
  {
    title: 'Incubation Period',
    description: '6-month intensive incubation program with dedicated mentorship and resource allocation.',
    icon: CheckCircle
  },
  {
    title: 'Industry Connect',
    description: 'Direct connections with industry leaders, investors, and successful entrepreneurs for guidance.',
    icon: CheckCircle
  },
  {
    title: 'Demo Day',
    description: 'Final presentation to investors and industry experts for potential funding and partnerships.',
    icon: CheckCircle
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Initiatives</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We conduct multiple events and programs to promote entrepreneurship and fuel the fire 
            in budding entrepreneurial minds, bringing together students, professors, and experts.
          </p>
        </motion.div>

        {/* Main Initiatives */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 h-full overflow-hidden">
                  <CardContent className="p-6">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 text-6xl font-bold opacity-10">
                      {initiative.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`${initiative.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {initiative.description}
                    </p>
                    
                    {/* Details */}
                    <ul className="space-y-2">
                      {initiative.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Arrow connector for larger screens */}
                {index < initiatives.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* IIT Bombay Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="text-secondary">IIT Bombay</span> Process Excellence
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iitBombayProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="font-semibold mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Participate?</h3>
            <p className="text-muted-foreground mb-6">
              Join ECELL LNCTE initiatives and be part of our entrepreneurial community to "Solve Something Big" in your life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-neon transition-all duration-300"
            >
              Begin Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}