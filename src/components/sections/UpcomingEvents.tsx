import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Trophy, Building } from 'lucide-react';

const stats = [
  { label: 'Fest Reach', value: '7,00,000', icon: Users },
  { label: 'Registrations for Competitions', value: '5000', icon: Trophy },
  { label: 'Attendees', value: '3000+', icon: Calendar },
  { label: 'Colleges', value: '200+', icon: Building },
  { label: 'Footfall', value: '10,000+', icon: Users },
  { label: 'Campus Strength', value: '5k+', icon: Building }
];

export function UpcomingEvents() {
  return (
    <section className="py-20 relative">
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
            UPCOMING <span className="bg-gradient-primary bg-clip-text text-transparent">EVENTS</span>
          </h2>
        </motion.div>

        {/* E-Summit 2024 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="glass border-primary/20 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 relative flex items-center justify-center">
              <h3 className="text-4xl font-bold text-white">E-Summit 2024</h3>
            </div>
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-primary">E-Summit 2024</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                E-Summit is the flagship event organized by the E-Cell, LNCT annually. It is one of the most awaited events hosted by the institute that witnesses massive participation from across the country. Through this event, we aim to ignite the entrepreneur inside students by bringing them together to compete in various competitions exploring all aspects of entrepreneurship. We also host some of the most seasoned and celebrated entrepreneurs who enlighten our audience with their jaw-dropping journeys.
              </p>
              
              <div className="bg-card/50 p-6 rounded-xl mb-6">
                <h4 className="text-xl font-semibold mb-4 text-secondary">E Summit</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  E-Summit is the flagship event organized by the E-Cell, LNCT annually. It is one of the most awaited events hosted by the institute that witnesses massive participation from across the country. Through this event, we aim to ignite the entrepreneur inside students by bringing them together to compete in various competitions exploring all aspects of entrepreneurship.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  E-Cell, LNCT proudly claims to have successfully hosted editions of E-Summit and we are more than excited to take it to the next level this year, making it an honest celebration of the new wave of entrepreneurship!
                </p>
              </div>
              
              <p className="text-muted-foreground mb-6">
                There will be a total of 10 events focusing on all aspects of entrepreneurship and skills required to be a successful entrepreneur.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="glass p-6 rounded-xl hover:neon-glow transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}