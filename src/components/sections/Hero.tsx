import { Button } from '@/components/ui/button';
import { ArrowDown, Rocket, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ECELL
            </span>
            <br />
            <span className="text-foreground">LNCTE</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Fostering <span className="text-neon">entrepreneurship</span> and{' '}
            <span className="text-cyber">innovation</span> at LNCT Bhopal.
            Building the future, one startup at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="hero" size="lg" className="group">
              <Rocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore ECELL
            </Button>
            <Button variant="cyber" size="lg" className="group">
              <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Join Community
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="glass p-6 rounded-xl hover:neon-glow transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Students Inspired</div>
            </div>
            <div className="glass p-6 rounded-xl hover:cyber-glow transition-all duration-300">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Startups Launched</div>
            </div>
            <div className="glass p-6 rounded-xl hover:neon-glow transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Years of Innovation</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-accent rounded-full opacity-80 animate-pulse delay-500"></div>
      </div>
    </section>
  );
}