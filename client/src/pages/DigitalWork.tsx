import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "wouter";

export default function DigitalWork() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const projects = [
    {
      id: 5,
      title: "Interactive Campaign",
      description: "Digital campaign assets for a major product launch.",
    },
    {
      id: 6,
      title: "Social Media Package",
      description: "Comprehensive social media design system.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in a real app, this would be more secure
    if (password === "digital2024") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-3xl font-bold mb-8 tracking-tight">Digital Projects</h1>
          <p className="text-foreground/60 mb-8">
            This section is password protected. Please enter the password to view the content.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">
              Access Digital Projects
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-8 tracking-tight">Digital Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] bg-muted relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
