import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "5 Vantagens de Construir uma Piscina de Concreto Armado",
      excerpt: "Descubra por que o concreto armado é a escolha superior para quem busca durabilidade, personalização e valorização do imóvel.",
      date: "27 Nov 2025",
      author: "Equipe Lúmen",
      image: "/construction-process.jpg",
      category: "Construção"
    },
    {
      id: 2,
      title: "Como Manter a Água da Sua Piscina Sempre Cristalina",
      excerpt: "Dicas essenciais de manutenção, tratamento químico e limpeza física para garantir a saúde e beleza da sua piscina o ano todo.",
      date: "20 Nov 2025",
      author: "Leonardo",
      image: "/hero-pool.jpg",
      category: "Manutenção"
    },
    {
      id: 3,
      title: "Tendências de Iluminação para Áreas de Lazer em 2026",
      excerpt: "Saiba como a iluminação LED RGB pode transformar o ambiente da sua piscina à noite, criando cenários únicos para cada ocasião.",
      date: "15 Nov 2025",
      author: "Fernanda",
      image: "/night-pool.jpg",
      category: "Design"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pool.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container relative z-10 text-center">
          <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 block">Blog & Dicas</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Conteúdo Especializado</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Informações técnicas, tendências e dicas de manutenção para você aproveitar o melhor da sua piscina.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article key={post.id} className="group bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col h-full">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold uppercase tracking-wider py-1 px-3">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="link" className="text-primary hover:text-secondary p-0 h-auto font-serif italic self-start group/btn">
                    Ler Artigo Completo <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
          
          {/* Newsletter */}
          <div className="mt-24 bg-muted/30 p-12 text-center max-w-4xl mx-auto border border-border">
            <h3 className="text-3xl font-serif font-bold text-primary mb-4">Receba nossas novidades</h3>
            <p className="text-muted-foreground mb-8">
              Inscreva-se para receber dicas de manutenção e ofertas exclusivas diretamente no seu e-mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-grow p-4 border border-input bg-white focus:outline-none focus:border-secondary transition-colors"
              />
              <Button className="bg-primary text-white hover:bg-secondary hover:text-primary rounded-none px-8 py-4 font-serif italic">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
