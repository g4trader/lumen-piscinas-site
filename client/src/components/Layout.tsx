import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-border/40"
            : "bg-black py-6 text-white"
        )}
        style={!isScrolled ? { backgroundColor: '#000000' } : {}}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors",
                isScrolled ? "border-primary text-primary" : "border-white text-white"
              )}>
                <span className="font-serif font-bold text-xl">L</span>
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-serif font-bold text-xl leading-none tracking-wide",
                  isScrolled ? "text-primary" : "text-white"
                )}>
                  LÚMEN
                </span>
                <span className={cn(
                  "text-[0.65rem] uppercase tracking-[0.2em] font-medium",
                  isScrolled ? "text-primary/70" : "text-white/80"
                )}>
                  Piscinas e Lazer
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium uppercase tracking-wider hover:text-secondary transition-colors relative group",
                    isScrolled ? "text-foreground" : "text-white/90",
                    location === link.href && "text-secondary"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
                    location === link.href ? "w-full" : ""
                  )} />
                </a>
              </Link>
            ))}
            <Button 
              variant={isScrolled ? "default" : "outline"} 
              className={cn(
                "ml-4 rounded-none px-6 font-serif italic",
                !isScrolled && "border-white text-white hover:bg-white hover:text-primary hover:border-white"
              )}
              asChild
            >
              <a href="https://wa.me/5551991579710" target="_blank" rel="noopener noreferrer">
                Orçamento
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2",
              isScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden animate-in slide-in-from-top-10 fade-in duration-300">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-2xl font-serif font-medium text-foreground hover:text-secondary transition-colors">
                  {link.name}
                </a>
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <Button className="w-full rounded-none py-6 text-lg font-serif italic" asChild>
                <a href="https://wa.me/5551991579710" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-20 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-secondary text-secondary">
                  <span className="font-serif font-bold text-xl">L</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl leading-none tracking-wide text-white">
                    LÚMEN
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] font-medium text-white/60">
                    Piscinas e Lazer
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Transformando sonhos em realidade há mais de 30 anos. Especialistas em piscinas de concreto armado com acabamento de alto padrão.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/lumenpiscinaselazer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="mailto:comercial@lumenpiscinas.com.br" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="text-lg font-serif font-medium mb-6 text-secondary">Serviços</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link href="/servicos"><a className="hover:text-white transition-colors">Construção de Piscinas</a></Link></li>
                <li><Link href="/servicos"><a className="hover:text-white transition-colors">Reformas e Restauração</a></Link></li>
                <li><Link href="/servicos"><a className="hover:text-white transition-colors">Projetos Personalizados</a></Link></li>
                <li><Link href="/servicos"><a className="hover:text-white transition-colors">Manutenção Especializada</a></Link></li>
                <li><Link href="/servicos"><a className="hover:text-white transition-colors">Equipamentos e Acessórios</a></Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-lg font-serif font-medium mb-6 text-secondary">Contato</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="mt-1 text-secondary" />
                  <div>
                    <span className="block text-white font-medium">Área Comercial</span>
                    <a href="https://wa.me/5551991579710" className="hover:text-white transition-colors">(51) 99157-9710</a>
                    <span className="block text-xs text-white/50 mt-1">Fernanda</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="mt-1 text-secondary" />
                  <div>
                    <span className="block text-white font-medium">Área Técnica</span>
                    <a href="https://wa.me/5551993714527" className="hover:text-white transition-colors">(51) 99371-4527</a>
                    <span className="block text-xs text-white/50 mt-1">Leonardo</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="mt-1 text-secondary" />
                  <a href="mailto:comercial@lumenpiscinas.com.br" className="hover:text-white transition-colors break-all">
                    comercial@lumenpiscinas.com.br
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-lg font-serif font-medium mb-6 text-secondary">Área de Atuação</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Atendemos em todo o estado, levando excelência em construção de piscinas para residências, condomínios, clubes e hotéis.
              </p>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-secondary hover:text-primary hover:border-secondary rounded-none" asChild>
                <Link href="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Lúmen Piscinas e Lazer. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
