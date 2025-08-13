import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const recentEvents = [
  {
    title: 'Marketing Fiesta',
    description: 'The primary purpose of this particular competition was to facilitate a case study that was specifically designed to delve...',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Pitching Competition',
    description: 'Marketing has evolved into one of the most crucial pillars for building brands in the past few years. Disruptive marketing strategies have the...',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Entrepreneur\'s Talks',
    description: 'Talk shows remain the highlight of the summit each year, attracting a huge audience of students, professors and more from...',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Startup Expo',
    description: 'A start up expo was organised that witnessed stalls of numerous interesting and innovative startups that had engaging display units...',
    image: '/api/placeholder/400/250'
  }
];

export function RecentEvents() {
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
            Recent <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span>
          </h2>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 h-full overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 mb-4"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{event.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {event.description}
                  </p>
                  <button className="flex items-center text-secondary hover:text-primary transition-colors duration-300">
                    Know More...
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}