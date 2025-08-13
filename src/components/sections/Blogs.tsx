import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'McDonald\'s - Case Study',
    date: '15 March 2023',
    excerpt: 'McDonald\'s is probably one of the very first quick service restaurants that have been established in India, and God, they stayed. From ordering...',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Amul - Case Study',
    date: '1 June 2023',
    excerpt: 'You don\'t build a business, you build people, then people build the business. This is what Amul has been following since years. It is the whole...',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'IPL - Case Study',
    date: '30 March 2023',
    excerpt: 'Though the magnificent tournament has come to an end for this season, the hype and excitement for it is still alive in the hearts of all the fans. This has...',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Skyroot - Case Study',
    date: '11 June 2023',
    excerpt: '\'A small step by a man in space is a huge leap for mankind\'. We all fairly agree that space research has become one of the strong-standing pillars of...',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Walmart - Case Study',
    date: '21 June 2023',
    excerpt: 'Sam Walton, Founder of Walmart once said, \'There is only one boss. The customer, and he can fire everybody in the company from the chairman down...',
    image: '/api/placeholder/400/250'
  }
];

export function Blogs() {
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
            OUR <span className="bg-gradient-primary bg-clip-text text-transparent">BLOGS</span>
          </h2>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 h-full overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                    {blog.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {blog.date}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {blog.excerpt}
                  </p>
                  
                  <button className="flex items-center text-secondary hover:text-primary transition-colors duration-300">
                    Read More
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