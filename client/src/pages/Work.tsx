import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Work() {
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
      name: "Digital",
      projects: [
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

  const scrollToCategory = (categoryName: string) => {
    const element = document.getElementById(categoryName.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              onClick={() => scrollToCategory(category.name)}
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
            </motion.section>
          ))}
        </div>
      </motion.div>
    </div>
  );
}