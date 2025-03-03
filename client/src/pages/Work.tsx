import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Work() {
  const [, navigate] = useLocation();

  const categories = [
    {
      name: "Brand Identity",
      projects: [
        {
          id: 1,
          title: "Modern Restaurant Branding",
          description: "Visual identity and brand guidelines for a contemporary dining establishment.",
        },
        {
          id: 2,
          title: "Tech Startup Identity",
          description: "Complete brand identity system for an emerging technology company.",
        },
      ],
    },
    {
      name: "UI Design",
      projects: [
        {
          id: 3,
          title: "Finance App Interface",
          description: "User interface design for a personal finance management application.",
        },
        {
          id: 4,
          title: "E-commerce Platform",
          description: "Complete UI redesign for an online marketplace.",
        },
      ],
    },
    {
      name: "Print",
      projects: [
        {
          id: 7,
          title: "Editorial Design",
          description: "Magazine layout and typography design.",
        },
        {
          id: 8,
          title: "Exhibition Catalog",
          description: "Print catalog design for an art exhibition.",
        },
      ],
    },
    {
      name: "Misc",
      projects: [
        {
          id: 9,
          title: "Environmental Graphics",
          description: "Wayfinding and environmental design for office space.",
        },
        {
          id: 10,
          title: "Packaging Design",
          description: "Product packaging system for consumer goods.",
        },
      ],
    },
  ];

  const navigationCategories = [...categories, { name: "Digital", isProtected: true }];

  const handleCategoryClick = (category: { name: string; isProtected?: boolean }) => {
    if (category.isProtected) {
      navigate('/digital');
    } else {
      const element = document.getElementById(category.name.toLowerCase().replace(' ', '-'));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-8 tracking-tight">Work</h1>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-3 mb-12">
          {navigationCategories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              onClick={() => handleCategoryClick(category)}
              className="text-sm"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.section
              key={category.name}
              id={category.name.toLowerCase().replace(' ', '-')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-xl font-medium mb-6">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-[4/3] bg-muted overflow-hidden group cursor-pointer"
                  >
                    {/* Project Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 transition-transform duration-700 group-hover:scale-110" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Project Info */}
                    <motion.div 
                      className="relative h-full flex flex-col items-center justify-center p-6 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {project.description}
                      </p>

                      {/* View Project Button */}
                      <motion.button
                        className="mt-4 px-4 py-2 text-sm border border-primary/20 rounded-full opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/5"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.button>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </div>
  );
}