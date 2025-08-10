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

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Registration & Onboarding',
    description: 'Students register for ECELL programs and attend orientation sessions to understand the entrepreneurial ecosystem.',
    details: ['Complete registration form', 'Attend orientation session', 'Get mentorship assignment', 'Access to resources'],
    color: 'text-primary'
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Ideation & Validation',
    description: 'Participate in brainstorming sessions, idea validation workshops, and market research activities.',
    details: ['Brainstorming workshops', 'Market research', 'Idea validation', 'Feasibility analysis'],
    color: 'text-secondary'
  },
  {
    icon: Users,
    step: '03',
    title: 'Team Formation',
    description: 'Form diverse teams with complementary skills and expertise to strengthen the startup foundation.',
    details: ['Skill assessment', 'Team matching', 'Role allocation', 'Team building activities'],
    color: 'text-accent'
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Development & Launch',
    description: 'Develop MVP, create business plans, and prepare for the official startup launch with mentor guidance.',
    details: ['MVP development', 'Business plan creation', 'Pitch preparation', 'Launch strategy'],
    color: 'text-neon-green'
  },
  {
    icon: TrendingUp,
    step: '05',
    title: 'Growth & Scaling',
    description: 'Focus on customer acquisition, revenue generation, and scaling the business with ongoing support.',
    details: ['Marketing strategies', 'Sales optimization', 'Partnership building', 'Scaling operations'],
    color: 'text-neon-orange'
  },
  {
    icon: Trophy,
    step: '06',
    title: 'Success & Recognition',
    description: 'Celebrate achievements, showcase success stories, and continue mentoring the next generation.',
    details: ['Performance evaluation', 'Success celebration', 'Alumni network', 'Giving back'],
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
            How <span className="bg-gradient-primary bg-clip-text text-transparent">ECELL</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our structured approach transforms innovative ideas into successful startups through 
            a comprehensive 6-step process, inspired by the best practices from IIT Bombay.
          </p>
        </motion.div>

        {/* Main Process Steps */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
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
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`${step.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Arrow connector for larger screens */}
                {index < steps.length - 1 && (
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
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Join ECELL LNCTE and follow our proven process to transform your ideas into successful ventures.
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