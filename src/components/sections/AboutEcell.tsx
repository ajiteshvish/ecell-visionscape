import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, Rocket, Users, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Fostering creative thinking and breakthrough ideas that shape the future of entrepreneurship.',
    color: 'text-primary'
  },
  {
    icon: Target,
    title: 'Mission Driven',
    description: 'Empowering students to transform innovative ideas into successful business ventures.',
    color: 'text-secondary'
  },
  {
    icon: Rocket,
    title: 'Startup Incubation',
    description: 'Providing mentorship, resources, and guidance to launch successful startups.',
    color: 'text-accent'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a strong network of entrepreneurs, mentors, and industry experts.',
    color: 'text-neon-green'
  },
  {
    icon: TrendingUp,
    title: 'Growth Focus',
    description: 'Developing scalable business models and sustainable growth strategies.',
    color: 'text-neon-orange'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Recognizing and celebrating entrepreneurial achievements and milestones.',
    color: 'text-neon-blue'
  }
];

export function AboutEcell() {
  return (
    <section id="about" className="py-20 relative">
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
            OUR <span className="bg-gradient-primary bg-clip-text text-transparent">VISION</span>
          </h2>
        </motion.div>

        {/* Vision Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="glass p-8 rounded-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              E-Cell LNCT believes that what truly matters in entrepreneurship is not the profits one can make, rather it is more of a journey where an individual has loads to learn along the way.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A true entrepreneur believes firmly in his or her passion, and takes risks to build a fruitful career around a larger cause. He knows how to lead a team, solve problems, tap potential, and turn even the worst of setbacks into opportunities. Today, India is witnessing a boom in entrepreneurship like never before with an ever increasing number of people from across ages, social and geographical backgrounds now trying to build businesses out of problem statements.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With entrepreneurs becoming the new age celebrities, we are definitely taking the right steps as a society and a nation!
            </p>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          <div className="glass p-6 rounded-xl text-center hover:neon-glow transition-all duration-300">
            <div className="text-4xl font-bold text-primary mb-2">7L+</div>
            <div className="text-sm text-muted-foreground">Fest Reach</div>
          </div>
          <div className="glass p-6 rounded-xl text-center hover:cyber-glow transition-all duration-300">
            <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
            <div className="text-sm text-muted-foreground">Competition Registrations</div>
          </div>
          <div className="glass p-6 rounded-xl text-center hover:neon-glow transition-all duration-300">
            <div className="text-4xl font-bold text-accent mb-2">3000+</div>
            <div className="text-sm text-muted-foreground">Event Attendees</div>
          </div>
          <div className="glass p-6 rounded-xl text-center hover:cyber-glow transition-all duration-300">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Participating Colleges</div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join the Revolution?</h3>
            <p className="text-muted-foreground mb-6">
              Become part of our entrepreneurial community and turn your innovative ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-neon transition-all duration-300"
              >
                Join ECELL
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}