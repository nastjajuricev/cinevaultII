import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 tracking-tight">About</h1>
        
        <div className="prose prose-neutral dark:prose-invert">
          <p className="text-lg mb-6">
            I'm a graphic designer with over a decade of experience crafting visual identities and digital experiences for forward-thinking brands and businesses.
          </p>
          
          <h2 className="text-xl font-bold mt-12 mb-4">Approach</h2>
          <p>
            My work is driven by a deep understanding of typography, composition, and the principles of modern design. I believe in creating lasting solutions that communicate clearly and effectively.
          </p>
          
          <h2 className="text-xl font-bold mt-12 mb-4">Experience</h2>
          <ul>
            <li>Brand Identity Design</li>
            <li>Digital Design</li>
            <li>Editorial Design</li>
            <li>Typography</li>
            <li>Art Direction</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
