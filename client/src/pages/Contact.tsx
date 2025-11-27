import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-background min-h-screen pt-32 pb-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 block">Fale Conosco</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">Vamos iniciar seu projeto?</h1>
            <p className="text-xl text-muted-foreground font-light">
              Estamos prontos para atender você. Entre em contato pelos canais abaixo ou solicite um orçamento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-10">
              <div className="bg-white p-8 shadow-lg border-t-4 border-secondary">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Canais de Atendimento</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Área Comercial</h4>
                      <p className="text-sm text-muted-foreground mb-1">Fernanda</p>
                      <a href="https://wa.me/5551991579710" className="text-lg font-medium hover:text-secondary transition-colors block">
                        (51) 99157-9710
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Área Técnica</h4>
                      <p className="text-sm text-muted-foreground mb-1">Leonardo</p>
                      <a href="https://wa.me/5551993714527" className="text-lg font-medium hover:text-secondary transition-colors block">
                        (51) 99371-4527
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">E-mail</h4>
                      <a href="mailto:comercial@lumenpiscinas.com.br" className="text-lg font-medium hover:text-secondary transition-colors block break-all">
                        comercial@lumenpiscinas.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Instagram</h4>
                      <a href="https://instagram.com/lumenpiscinaselazer" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-secondary transition-colors block">
                        @lumenpiscinaselazer
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-bold mb-4">Horário de Atendimento</h3>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-secondary" />
                  <div>
                    <p className="font-medium">Segunda a Sexta</p>
                    <p className="text-white/70">08:00 às 18:00</p>
                    <p className="font-medium mt-4">Sábado</p>
                    <p className="text-white/70">08:00 às 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Placeholder (Visual only for static site) */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-primary">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Envie uma Mensagem</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-primary">Nome</label>
                    <input type="text" id="name" className="w-full p-3 border border-input bg-background focus:outline-none focus:border-secondary transition-colors" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-primary">Telefone</label>
                    <input type="tel" id="phone" className="w-full p-3 border border-input bg-background focus:outline-none focus:border-secondary transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary">E-mail</label>
                  <input type="email" id="email" className="w-full p-3 border border-input bg-background focus:outline-none focus:border-secondary transition-colors" placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-primary">Assunto</label>
                  <select id="subject" className="w-full p-3 border border-input bg-background focus:outline-none focus:border-secondary transition-colors">
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="duvida">Dúvida Técnica</option>
                    <option value="visita">Agendar Visita</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-primary">Mensagem</label>
                  <textarea id="message" rows={5} className="w-full p-3 border border-input bg-background focus:outline-none focus:border-secondary transition-colors" placeholder="Descreva seu projeto ou dúvida..."></textarea>
                </div>

                <Button className="w-full bg-primary text-white hover:bg-secondary hover:text-primary rounded-none py-6 text-lg font-serif italic">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
