import { useQuery } from "@tanstack/react-query";
import ProjectGrid from "@/components/ProjectGrid";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@shared/schema";

export default function Work() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 tracking-tight">Work</h1>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="aspect-[4/3]" />
          ))}
        </div>
      ) : (
        <ProjectGrid projects={projects || []} />
      )}
    </div>
  );
}
