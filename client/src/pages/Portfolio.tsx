import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "Residência Lago Negro",
      category: "residencial",
      image: "/hero-pool.jpg",
      description: "Piscina com borda infinita e vista panorâmica."
    },
    {
      id: 2,
      title: "Condomínio Jardins",
      category: "comercial",
      image: "/family-pool.jpg",
      description: "Área de lazer completa para condomínio de alto padrão."
    },
    {
      id: 3,
      title: "Iluminação Noturna",
      category: "iluminacao",
      image: "/night-pool.jpg",
      description: "Projeto luminotécnico com LED RGB."
    },
    {
      id: 4,
      title: "Estrutura Reforçada",
      category: "construcao",
      image: "/construction-process.jpg",
      description: "Detalhe da armação de ferro antes da concretagem."
    },
    // Duplicating for grid effect since we have limited generated images
    {
      id: 5,
      title: "Casa de Campo",
      category: "residencial",
      image: "/family-pool.jpg",
      description: "Piscina integrada ao paisagismo natural."
    },
    {
      id: 6,
      title: "Refúgio Urbano",
      category: "residencial",
      image: "/hero-pool.jpg",
      description: "Oásis de tranquilidade no centro da cidade."
    }
  ];

  const filteredProjects = filter === "todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Layout>
      <div className="bg-background pt-32 pb-12">
        <div className="container text-center">
          <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 block">Nossas Obras</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-8">Portfólio Selecionado</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore nossa coleção de projetos entregues. Cada piscina conta uma história de dedicação, técnica e realização de sonhos.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button 
              variant={filter === "todos" ? "default" : "outline"}
              onClick={() => setFilter("todos")}
              className="rounded-none min-w-[100px]"
            >
              Todos
            </Button>
            <Button 
              variant={filter === "residencial" ? "default" : "outline"}
              onClick={() => setFilter("residencial")}
              className="rounded-none min-w-[100px]"
            >
              Residenciais
            </Button>
            <Button 
              variant={filter === "comercial" ? "default" : "outline"}
              onClick={() => setFilter("comercial")}
              className="rounded-none min-w-[100px]"
            >
              Comerciais
            </Button>
            <Button 
              variant={filter === "construcao" ? "default" : "outline"}
              onClick={() => setFilter("construcao")}
              className="rounded-none min-w-[100px]"
            >
              Em Obras
            </Button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white">
                  <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
