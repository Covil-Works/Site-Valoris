import { useState } from "react";
import "../styles/home.css";

function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const whatsappLink = "https://wa.me/55"; // Adicionar numero de telefone. 

  const services = [
    {
      title: "Consultoria Estratégica",
      description: "Diagnóstico profundo do seu negócio para definir estratégias de crescimento, competitividade e sustentabilidade.",
      icon: "📊",
    },
    {
      title: "Gestão de Projetos",
      description: "Planejamento, execução e controle com metodologia rigorosa, garantindo entrega dentro do prazo e orçamento.",
      icon: "✓",
    },
    {
      title: "Organização Empresarial",
      description: "Reestruturação de processos, sistemas e equipes para maximizar eficiência e produtividade.",
      icon: "🚀",
    },
    {
      title: "Desenvolvimento de Lideranças",
      description: "Programas de capacitação para desenvolver competências gerenciais e fortalecer a cultura organizacional.",
      icon: "👥",
    },
  ];

  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="brand">
            <img src="/img/valoris_logo.svg" alt="Valoris" className="logo" />
            <span className="wordmark">VALORIS</span>
          </div>

          <button
            className={`menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)}>
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)}>
                Serviços
              </a>
            </li>
            <li>
              <a href={whatsappLink} className="nav-cta">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Impulsione seu <span className="highlight">Negócio</span>
          </h1>
          <p>
            Consultoria estratégica e gestão profissional para empresas que querem crescer com excelência e resultados reais.
          </p>
          <a href={whatsappLink} className="btn btn-primary">
            Conversar Agora
          </a>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* About Section */}
      <section id="sobre" className="about">
        <div className="container">
          <div className="about-content">
            <h2>Sobre Valoris</h2>
            <p>
              Somos uma consultoria especializada em estratégia empresarial e gestão. 
              Trabalhamos com empresas de diversos setores, ajudando-as a alcançar seus objetivos através de soluções profissionais, 
              personalizadas e orientadas para resultados reais.
            </p>
            <p>
              Nossa missão é transformar desafios em oportunidades, criando valor sustentável para nossos clientes através de 
              excelência, dedicação e foco obsessivo em resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <p className="section-subtitle">Soluções completas para potencializar sua empresa</p>

          <div className="services-grid">
            {services.map((service, index) => (
              <article key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <h2>Por que Valoris?</h2>

          <div className="why-grid">
            <div className="why-card">
              <h3> Foco em Resultados</h3>
              <p>Cada projeto tem objetivos claros e mensuráveis. Seu sucesso é nosso sucesso.</p>
            </div>
            <div className="why-card">
              <h3> Experiência Consolidada</h3>
              <p>Equipe com vasta experiência em diferentes setores e modelos de negócio.</p>
            </div>
            <div className="why-card">
              <h3> Parceria Verdadeira</h3>
              <p>Não somos apenas consultores. Somos parceiros comprometidos com seu crescimento.</p>
            </div>
            <div className="why-card">
              <h3> Soluções Personalizadas</h3>
              <p>Cada empresa é única. Nossas soluções são customizadas para sua realidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Quer elevar sua empresa para o próximo nível?</h2>
          <p>Fale conosco. Vamos analisar sua situação e propor a melhor estratégia para seu crescimento.</p>
          <a href={whatsappLink} className="btn btn-primary btn-large">
            <span>Iniciar Conversa</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="wordmark">Valoris</h3>
              <p>Consultoria estratégica e gestão para empresas que buscam crescimento sustentável e resultados.</p>
            </div>
            <div className="footer-section">
              <h3>Menu</h3>
              <ul>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#servicos">Serviços</a>
                </li>
                <li>
                  <a href={whatsappLink}>Contato</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Conecte-se</h3>
              <p>
                <a href={whatsappLink}>WhatsApp</a>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Valoris. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
