import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/family-pool.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container relative z-10 text-center">
          <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 block">Nossa História</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Tradição e Confiança</h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="lead text-2xl font-serif text-primary italic mb-12 text-center">
              "Nossa missão é construir piscinas de alta qualidade, transformando sonhos em realidade e proporcionando momentos inesquecíveis para famílias."
            </p>
            
            <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Quem Somos</h3>
            <p>
              A Lúmen Piscinas e Lazer é uma empresa consolidada no mercado, com mais de 30 anos de experiência na construção de piscinas de concreto armado. Nossa trajetória é marcada pelo compromisso inabalável com a qualidade e a satisfação dos nossos clientes.
            </p>
            <p>
              Entendemos que uma piscina não é apenas uma obra de engenharia, mas o coração da área de lazer de uma casa. É onde famílias se reúnem, onde amigos celebram e onde memórias preciosas são criadas. Por isso, tratamos cada projeto com a seriedade e o carinho que ele merece.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-12">
              <div className="bg-muted/30 p-6 border-l-4 border-secondary">
                <h4 className="font-bold text-primary text-lg mb-2">Confiança</h4>
                <p className="text-sm">Transparência em todas as etapas, do orçamento à entrega.</p>
              </div>
              <div className="bg-muted/30 p-6 border-l-4 border-secondary">
                <h4 className="font-bold text-primary text-lg mb-2">Excelência</h4>
                <p className="text-sm">Busca constante pela perfeição técnica e estética.</p>
              </div>
              <div className="bg-muted/30 p-6 border-l-4 border-secondary">
                <h4 className="font-bold text-primary text-lg mb-2">Segurança</h4>
                <p className="text-sm">Rigor estrutural para garantir a durabilidade da sua obra.</p>
              </div>
              <div className="bg-muted/30 p-6 border-l-4 border-secondary">
                <h4 className="font-bold text-primary text-lg mb-2">Compromisso</h4>
                <p className="text-sm">Prazos respeitados e suporte contínuo ao cliente.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Por que escolher a Lúmen?</h3>
            <p>
              Diferente de outras opções no mercado, possuímos equipe própria especializada, sem depender de terceirizações críticas que possam comprometer a qualidade da obra. Executamos desde o projeto hidráulico e de impermeabilização até o acabamento final, garantindo controle total sobre o resultado.
            </p>
            <p>
              Nossa expertise em concreto armado nos permite criar formas livres e personalizadas, adaptando a piscina perfeitamente ao seu terreno e ao seu estilo arquitetônico.
            </p>
          </div>
          
          <div className="mt-20 text-center">
            <Button size="lg" className="bg-primary text-white hover:bg-secondary hover:text-primary rounded-none px-10 py-6 text-lg font-serif italic" asChild>
              <a href="https://wa.me/5551991579710" target="_blank" rel="noopener noreferrer">Converse com um Especialista</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
