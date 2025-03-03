import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            CRAFTING VISUAL STORIES THAT MAKE BRANDS UNFORGETTABLE
          </h1>
          <p className="text-lg text-foreground/60">
            Independent graphic designer focused on creating impactful brand identities and digital experiences.
          </p>
        </motion.div>
      </section>

      {/* Featured Work Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 tracking-tight">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-[4/3] bg-muted relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground">Project {i}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}