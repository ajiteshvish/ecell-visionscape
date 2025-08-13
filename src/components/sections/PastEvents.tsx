import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const pastEvents = [
  { title: 'Stock Trading', image: '/api/placeholder/300/200' },
  { title: 'Pitching Competition', image: '/api/placeholder/300/200' },
  { title: 'UI/UX Design', image: '/api/placeholder/300/200' },
  { title: 'E Summit', image: '/api/placeholder/300/200' },
  { title: 'Marketing Fiesta', image: '/api/placeholder/300/200' },
  { title: 'IITM NEXUS', image: '/api/placeholder/300/200' },
  { title: 'Talk Session', image: '/api/placeholder/300/200' },
  { title: 'IPL Event', image: '/api/placeholder/300/200' },
  { title: 'Case Study', image: '/api/placeholder/300/200' },
  { title: 'Hackathon', image: '/api/placeholder/300/200' }
];

export function PastEvents() {
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
            PAST <span className="bg-gradient-primary bg-clip-text text-transparent">EVENTS</span>
          </h2>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm">{event.title}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">E Summit</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                E-Summit is the flagship event organized by the E-Cell, LNCT annually. It is one of the most awaited events hosted by the institute that witnesses massive participation from across the country.
              </p>
              <button className="flex items-center justify-center mx-auto text-secondary hover:text-primary transition-colors duration-300">
                Know More...
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}