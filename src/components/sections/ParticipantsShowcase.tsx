import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { User, Calendar, Award, ExternalLink } from 'lucide-react';

// Mock data for demonstration - will be replaced with Supabase data
const mockParticipants = [
  {
    id: 1,
    name: 'Arjun Sharma',
    caption: 'Founder of TechNova - AI-driven solutions for healthcare',
    photo_url: '/placeholder-avatar1.jpg',
    year: '2023',
    startup: 'TechNova',
    achievement: 'Secured ₹50L funding'
  },
  {
    id: 2,
    name: 'Priya Patel',
    caption: 'Co-founder of EcoGreen - Sustainable packaging solutions',
    photo_url: '/placeholder-avatar2.jpg',
    year: '2022',
    startup: 'EcoGreen',
    achievement: 'Won Best Startup Award'
  },
  {
    id: 3,
    name: 'Rohit Kumar',
    caption: 'Founder of EduTech Plus - Online learning platform',
    photo_url: '/placeholder-avatar3.jpg',
    year: '2023',
    startup: 'EduTech Plus',
    achievement: '10,000+ active users'
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    caption: 'Co-founder of FinanceFlow - Personal finance management',
    photo_url: '/placeholder-avatar4.jpg',
    year: '2022',
    startup: 'FinanceFlow',
    achievement: 'Featured in TechCrunch'
  }
];

export function ParticipantsShowcase() {
  return (
    <section id="participants" className="py-20 relative">
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
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Success</span> Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the inspiring entrepreneurs from LNCTE who have transformed their innovative 
            ideas into successful startups through ECELL's guidance and support.
          </p>
        </motion.div>

        {/* Database Setup Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-xl border-secondary/30 mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <h3 className="text-lg font-semibold text-secondary">Dynamic Content Ready</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            This section will display real participant data from Supabase database. 
            Currently showing sample data for demonstration.
          </p>
        </motion.div>

        {/* Participants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {mockParticipants.map((participant, index) => (
            <motion.div
              key={participant.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative h-48 bg-gradient-primary flex items-center justify-center">
                    <User className="w-16 h-16 text-primary-foreground/50" />
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-card rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                      <span className="text-white text-sm font-medium">{participant.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {participant.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {participant.caption}
                    </p>

                    {/* Achievement */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-xs text-accent font-medium">
                        {participant.achievement}
                      </span>
                    </div>

                    {/* Startup Info */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-secondary">
                        {participant.startup}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Alumni Network Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Alumni <span className="text-primary">Network</span> Impact
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Alumni Network</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">₹25Cr+</div>
              <div className="text-sm text-muted-foreground">Total Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Join Alumni Network CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Be the Next Success Story</h3>
            <p className="text-muted-foreground mb-6">
              Join our thriving alumni network and become part of the entrepreneurial legacy at LNCTE.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-neon transition-all duration-300"
            >
              Join Alumni Network
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}