import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Star, Droplets, Shield, PenTool, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div 
          ref={heroRef}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src="/hero-pool.jpg" 
            alt="Piscina de concreto com borda infinita ao pôr do sol" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 text-center text-white pt-20">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs uppercase tracking-[0.2em] mb-6">
              Excelência em Concreto Armado
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight hero-text-shadow">
              Mergulhe no <br/>
              <span className="text-secondary italic">Extraordinário</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Transformamos seu espaço em um refúgio exclusivo. Mais de 30 anos criando piscinas que unem sofisticação, durabilidade e design atemporal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary rounded-none px-8 py-6 text-base font-serif italic transition-all duration-300" asChild>
                <Link href="/portfolio">Ver Portfólio</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none px-8 py-6 text-base transition-all duration-300" asChild>
                <a href="https://wa.me/5551991579710" target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce duration-2000 text-white/70">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img 
                  src="/family-pool.jpg" 
                  alt="Família aproveitando piscina de concreto" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-white p-4 shadow-xl hidden md:block">
                <img 
                  src="/construction-process.jpg" 
                  alt="Detalhe da construção" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:pl-10">
              <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 block">Sobre a Lúmen</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                Construindo memórias <br/>
                <span className="italic text-secondary">há gerações</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A Lúmen Piscinas e Lazer não constrói apenas piscinas; criamos cenários onde os melhores momentos da vida acontecem. Com mais de três décadas de experiência, somos referência em estruturas de concreto armado.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Nossa missão é entregar obras que combinam segurança estrutural absoluta com acabamentos refinados, garantindo que seu investimento valorize seu patrimônio e proporcione bem-estar por toda a vida.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary mb-1">Garantia Estrutural</h4>
                    <p className="text-sm text-muted-foreground">Solidez e durabilidade incomparáveis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <PenTool size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary mb-1">Design Exclusivo</h4>
                    <p className="text-sm text-muted-foreground">Projetos personalizados para seu estilo.</p>
                  </div>
                </div>
              </div>
              
              <Button variant="link" className="text-primary hover:text-secondary p-0 h-auto font-serif italic text-lg group" asChild>
                <Link href="/sobre">
                  Conheça nossa história <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 block">Nossos Serviços</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Soluções Completas</h2>
            <p className="text-muted-foreground text-lg">
              Do projeto à manutenção, oferecemos um ciclo completo de excelência para sua área de lazer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-secondary relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Droplets size={100} />
              </div>
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M20 22V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v17"/><path d="M12 18v-7"/><path d="M9 14h6"/></svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Construção</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Especialistas em piscinas de concreto armado e alvenaria. Executamos desde a escavação até o acabamento final com rigor técnico.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-primary/80"><Check size={14} className="text-secondary mr-2" /> Projetos residenciais e comerciais</li>
                <li className="flex items-center text-sm text-primary/80"><Check size={14} className="text-secondary mr-2" /> Bordas infinitas e prainhas</li>
                <li className="flex items-center text-sm text-primary/80"><Check size={14} className="text-secondary mr-2" /> Spas integrados</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-secondary relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <PenTool size={100} />
              </div>
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Reforma</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Revitalizamos sua piscina antiga com técnicas modernas de impermeabilização, troca de revestimentos e atualização estética.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-primary/80"><Check size={14} className="text-secondary mr-2" /> Troca de vinil e pastilhas</li>
                <li className="flex items-center text-sm text-primary/80"><Check size={14} className="text-secondary mr-2" /> Detecção de vazamentos</li>
                <li className="flex items-center text-sm text-primary/80"><Check size={14} className="text-secondary mr-2" /> Modernização de equipamentos</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-secondary relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Star size={100} />
              </div>
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Equipamentos</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fornecemos e instalamos os melhores equipamentos e acessórios do mercado para garantir a funcionalidade e beleza da sua piscina.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-primary/80"><Check size={14} className="text-secondary mr-2" /> Filtros e bombas de alta performance</li>
                <li className="flex items-center text-sm text-primary/80"><Check size={14} className="text-secondary mr-2" /> Aquecimento solar e trocadores de calor</li>
                <li className="flex items-center text-sm text-primary/80"><Check size={14} className="text-secondary mr-2" /> Iluminação LED e automação</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 py-6" asChild>
              <Link href="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 block">Blog & Dicas</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Conteúdo Especializado</h2>
              <p className="text-muted-foreground text-lg">
                Fique por dentro das novidades, tendências e dicas de manutenção para sua piscina.
              </p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 py-6 shrink-0" asChild>
              <a href="https://lumenpiscinas.com.br/blog/" target="_blank" rel="noopener noreferrer">Ver Todos os Artigos</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="https://lumenpiscinas.com.br/blog/" target="_blank" rel="noopener noreferrer" className="group block bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src="/construction-process.jpg" 
                    alt="Vantagens do Concreto" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Construção</span>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    5 Vantagens de Construir uma Piscina de Concreto
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    Descubra por que o concreto armado é a escolha superior para quem busca durabilidade e personalização.
                  </p>
                </div>
              </a>

            <a href="https://lumenpiscinas.com.br/blog/" target="_blank" rel="noopener noreferrer" className="group block bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src="/hero-pool.jpg" 
                    alt="Manutenção de Piscina" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Manutenção</span>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    Como Manter a Água Sempre Cristalina
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    Dicas essenciais de manutenção e tratamento químico para garantir a saúde da sua piscina.
                  </p>
                </div>
            </a>

            <a href="https://lumenpiscinas.com.br/blog/" target="_blank" rel="noopener noreferrer" className="group block bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src="/night-pool.jpg" 
                    alt="Iluminação LED" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Design</span>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    Tendências de Iluminação para 2026
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    Saiba como a iluminação LED RGB pode transformar o ambiente da sua piscina à noite.
                  </p>
                </div>
            </a>
          </div>
        </div>
      </section>

      {/* Feature Project */}
      <section className="py-0 bg-primary text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="p-12 lg:p-24 flex flex-col justify-center relative z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
            <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-6 block">Destaque</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Iluminação que <br/>
              <span className="italic text-secondary">Encanta</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-md">
              Nossos projetos de iluminação transformam sua piscina em uma obra de arte noturna. Crie atmosferas únicas para festas ou momentos de relaxamento com tecnologia LED de última geração.
            </p>
            <Button className="bg-white text-primary hover:bg-secondary hover:text-primary w-fit rounded-none px-8 py-6 font-serif italic" asChild>
              <Link href="/portfolio">Explorar Projetos</Link>
            </Button>
          </div>
          <div className="relative h-[400px] lg:h-auto">
            <img 
              src="/night-pool.jpg" 
              alt="Piscina iluminada à noite" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent lg:bg-gradient-to-l lg:from-primary/50 lg:to-transparent"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8">
            Pronto para realizar seu sonho?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Entre em contato com nossa equipe de especialistas e descubra como podemos transformar sua área externa em um espaço de lazer exclusivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-none px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="https://wa.me/5551991579710" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Falar no WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 py-6 text-lg" asChild>
              <Link href="/contato">Formulário de Contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
