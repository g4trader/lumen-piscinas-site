import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/construction-process.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container relative z-10">
          <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 block">O que fazemos</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl text-white/80 max-w-2xl font-light">
            Excelência técnica e acabamento impecável em cada etapa do seu projeto.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <section className="py-24 bg-background">
        <div className="container">
          
          {/* Construction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 border-t-4 border-l-4 border-secondary hidden md:block"></div>
                <img 
                  src="/construction-process.jpg" 
                  alt="Construção de piscina de concreto" 
                  className="w-full h-auto shadow-2xl"
                />
                <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-4 border-r-4 border-secondary hidden md:block"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Construção de Piscinas</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                A construção em concreto armado é a nossa especialidade. Este método oferece a maior durabilidade e liberdade de design do mercado, permitindo formatos exclusivos e revestimentos nobres.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary shrink-0 rounded-full">
                    <span className="font-serif font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Projeto e Planejamento</h3>
                    <p className="text-muted-foreground">Análise do terreno, design personalizado e planejamento hidráulico completo.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary shrink-0 rounded-full">
                    <span className="font-serif font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Estrutura Robusta</h3>
                    <p className="text-muted-foreground">Execução com malha dupla de aço e concreto de alta resistência, garantindo longevidade.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary shrink-0 rounded-full">
                    <span className="font-serif font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Acabamento Premium</h3>
                    <p className="text-muted-foreground">Instalação de pastilhas, pedras naturais ou vinil com precisão milimétrica.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Renovation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Reforma e Restauração</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Sua piscina antiga pode parecer nova novamente. Realizamos diagnósticos precisos e intervenções que modernizam tanto a estética quanto a funcionalidade da sua área de lazer.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center text-primary/80 bg-muted/30 p-3 rounded-sm">
                  <Check size={18} className="text-secondary mr-3" /> 
                  Troca de Revestimento
                </li>
                <li className="flex items-center text-primary/80 bg-muted/30 p-3 rounded-sm">
                  <Check size={18} className="text-secondary mr-3" /> 
                  Impermeabilização
                </li>
                <li className="flex items-center text-primary/80 bg-muted/30 p-3 rounded-sm">
                  <Check size={18} className="text-secondary mr-3" /> 
                  Reparos Estruturais
                </li>
                <li className="flex items-center text-primary/80 bg-muted/30 p-3 rounded-sm">
                  <Check size={18} className="text-secondary mr-3" /> 
                  Modernização de Bordas
                </li>
                <li className="flex items-center text-primary/80 bg-muted/30 p-3 rounded-sm">
                  <Check size={18} className="text-secondary mr-3" /> 
                  Instalação de Iluminação
                </li>
                <li className="flex items-center text-primary/80 bg-muted/30 p-3 rounded-sm">
                  <Check size={18} className="text-secondary mr-3" /> 
                  Adaptação para Aquecimento
                </li>
              </ul>
              
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 py-6" asChild>
                <a href="https://wa.me/5551993714527" target="_blank" rel="noopener noreferrer">Agendar Visita Técnica</a>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden shadow-2xl">
                <img 
                  src="/hero-pool.jpg" 
                  alt="Piscina reformada" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-lg max-w-xs hidden md:block">
                <p className="font-serif italic text-primary text-lg">"Transformamos uma piscina de 20 anos em um espaço moderno e funcional."</p>
              </div>
            </div>
          </div>

          {/* Equipment */}
          <div className="bg-muted/30 p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Equipamentos e Acessórios</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
              Trabalhamos com as melhores marcas do mercado para garantir eficiência energética, segurança e conforto para sua família.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
              <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2 border-b border-secondary/30 pb-2">Essenciais</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Filtros de Areia</li>
                  <li>Bombas de Recirculação</li>
                  <li>Skimmers</li>
                  <li>Drenos de Fundo</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2 border-b border-secondary/30 pb-2">Conforto</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Aquecedores Solares</li>
                  <li>Trocadores de Calor</li>
                  <li>Geradores de Cloro</li>
                  <li>Automação Wi-Fi</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2 border-b border-secondary/30 pb-2">Lazer</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Cascatas em Inox</li>
                  <li>Hidromassagem</li>
                  <li>Escadas Especiais</li>
                  <li>Bancos Molhados</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2 border-b border-secondary/30 pb-2">Segurança</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Cercas de Proteção</li>
                  <li>Capas Térmicas</li>
                  <li>Capas de Proteção</li>
                  <li>Corrimões</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Tem um projeto em mente?</h2>
          <Button className="bg-secondary text-primary hover:bg-white hover:text-primary rounded-none px-10 py-6 text-lg font-serif italic" asChild>
            <a href="https://wa.me/5551991579710" target="_blank" rel="noopener noreferrer">Solicitar Orçamento Agora</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
