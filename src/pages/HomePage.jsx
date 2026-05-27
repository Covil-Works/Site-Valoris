import { useState } from "react";
import "../styles/home.css";

function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "55";
  const whatsappText = encodeURIComponent("Olá! Vim pelo site da VALORIS e gostaria de falar com um consultor.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const instagramLink = import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/seuinstagram";
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "contato@valorisgestao.com.br";

  const services = [
    {
      title: "Consórcios Estratégicos",
      description:
        "Planejamento inteligente para realização de sonhos, crescimento patrimonial e expansão empresarial.",
      icon: "🏠",
    },
    {
      title: "Planos de Saúde",
      description:
        "Soluções em saúde com foco em cuidado, proteção e tranquilidade para pessoas, famílias e empresas.",
      icon: "🏥",
    },
    {
      title: "Seguros",
      description:
        "Proteção para vida, patrimônio, empresas e futuros, trazendo mais segurança nos momentos importantes.",
      icon: "🛡️",
    },
    {
      title: "Estratégia & Gestão",
      description:
        "Soluções estratégicas para organização, crescimento e fortalecimento empresarial.",
      icon: "📊",
    },
    {
      title: "Pesquisas & Inteligência",
      description:
        "Pesquisas de opinião e análises estratégicas para projetos políticos e empresas, auxiliando decisões com mais clareza e visão de cenário.",
      icon: "📈",
    },
  ];

  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a className="brand" href="/" aria-label="Valoris - Página inicial">
            <img src="/img/valoris_logo.svg" alt="Valoris" className="logo" />
            <span className="wordmark">VALORIS</span>
          </a>

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
              <a href="#quem-somos" onClick={() => setIsMobileMenuOpen(false)}>
                Quem somos
              </a>
            </li>
            <li>
              <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#diferencial" onClick={() => setIsMobileMenuOpen(false)}>
                Diferencial
              </a>
            </li>
            <li>
              <a href={whatsappLink} className="nav-cta">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-brand">
            <img src="/img/valoris_logo.svg" alt="Valoris" className="hero-logo" />
            <span className="hero-wordmark">VALORIS</span>
          </div>

          <h1>
            Cuidamos do presente para proteger o{" "}
            <span className="highlight">futuro</span> das pessoas.
          </h1>

          <p>
            Planejamento, proteção e soluções inteligentes para pessoas e empresas com segurança,
            estratégia e visão de futuro.
          </p>

          <div className="hero-actions">
            <a href={whatsappLink} className="btn btn-primary">
              Falar no WhatsApp
            </a>
            <a href="#quem-somos" className="btn btn-secondary">
              Conhecer a VALORIS
            </a>
          </div>

          <ul className="hero-trust">
            <li>Estratégia</li>
            <li>Segurança</li>
            <li>Humanização</li>
            <li>Confiança</li>
            <li>Visão de futuro</li>
          </ul>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* About Section */}
      <section id="quem-somos" className="about">
        <div className="container">
          <div className="about-content">
            <p className="section-eyebrow">QUEM SOMOS</p>
            <h2>A VALORIS nasceu daquilo que acreditamos.</h2>
            <p>
              Pessoas precisam ser cuidadas com verdade, estratégia e responsabilidade.
            </p>
            <p>
              Criamos uma empresa onde o atendimento humano vem antes de qualquer serviço, porque entendemos
              que por trás de cada decisão existe uma família, um sonho, um futuro e uma história.
            </p>
            <p>
              O nome <strong>VALORIS</strong> carrega exatamente nossa essência: valorizar pessoas, construir relações de confiança
              e oferecer soluções que tragam segurança, crescimento e tranquilidade.
            </p>
            <p>
              Atuamos nas áreas de consórcios, planos de saúde, seguros, estratégia, gestão e pesquisas de opinião,
              sempre unindo inteligência, planejamento e proximidade com cada cliente.
            </p>
            <p>
              Mais do que apresentar soluções, queremos ser apoio, direção e confiança nos momentos importantes da vida e dos negócios.
            </p>
            <p>
              Acreditamos que servir pessoas com excelência, transparência e propósito é o que realmente gera valor.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services">
        <div className="container">
          <p className="section-eyebrow">SERVIÇOS</p>
          <h2>Soluções com cuidado e estratégia.</h2>
          <p className="section-subtitle">
            Cada serviço existe para orientar decisões, proteger histórias e construir futuros mais seguros.
          </p>

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

      {/* Diferencial */}
      <section id="diferencial" className="why-choose">
        <div className="container">
          <p className="section-eyebrow section-eyebrow--dark">DIFERENCIAL</p>
          <h2>Resultados sólidos começam com relações verdadeiras.</h2>

          <div className="why-grid">
            <div className="why-card">
              <h3>Proximidade de verdade</h3>
              <p>
                Cada cliente é atendido de forma humana, com atenção aos detalhes e respeito à sua história.
              </p>
            </div>
            <div className="why-card">
              <h3>Responsabilidade com o futuro</h3>
              <p>
                Entendemos que por trás de cada decisão existem sonhos, famílias, patrimônio e futuro.
              </p>
            </div>
            <div className="why-card">
              <h3>Jornada com segurança</h3>
              <p>
                Nosso compromisso é fazer com que cada pessoa se sinta segura, acolhida e confiante em cada etapa.
              </p>
            </div>
            <div className="why-card">
              <h3>Propósito acima de tudo</h3>
              <p>
                Mais do que oferecer serviços, construímos conexões baseadas em confiança, proximidade e responsabilidade.
              </p>
            </div>
          </div>

          <blockquote className="brand-quote">
            “O nosso maior diferencial sempre serão as pessoas.”
          </blockquote>
        </div>
      </section>

      {/* Essência */}
      <section className="essence">
        <div className="container">
          <p className="section-eyebrow">ESSÊNCIA DA VALORIS</p>
          <h2>Orientar. Proteger. Valorizar.</h2>
        

          <div className="essence-grid">
            <div className="essence-card">
              <h3>Orientar</h3>
              <p>Orientar pessoas com verdade e estratégia.</p>
            </div>
            <div className="essence-card">
              <h3>Proteger</h3>
              <p>Proteger sonhos, famílias e futuros.</p>
            </div>
            <div className="essence-card">
              <h3>Valorizar</h3>
              <p>Valorizar cada história, cada conquista e cada decisão importante da vida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato / Encerramento */}
      <section id="contato" className="cta">
        <div className="container">
          <h2>Fale com um consultor.</h2>
          <p>
            A VALORIS existe para orientar com clareza, proteger com responsabilidade e construir futuros mais seguros — com você.
          </p>

          <div className="cta-actions">
            <a href={whatsappLink} className="btn btn-primary btn-large">
              <span>WhatsApp</span>
              <span>→</span>
            </a>
            <a className="btn btn-secondary btn-large" href={instagramLink} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>

          <p className="cta-meta">
            Ou envie um e-mail para{" "}
            <a href={`mailto:${contactEmail}`} className="cta-link">
              {contactEmail}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="wordmark">VALORIS</h3>
              <p>
                Planejamento, proteção e soluções inteligentes para pessoas e empresas com segurança, estratégia e visão de futuro.
              </p>
            </div>
            <div className="footer-section">
              <h3>Menu</h3>
              <ul>
                <li>
                  <a href="#quem-somos">Quem somos</a>
                </li>
                <li>
                  <a href="#servicos">Serviços</a>
                </li>
                <li>
                  <a href="#diferencial">Diferencial</a>
                </li>
                <li>
                  <a href="#contato">Fale conosco</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contato</h3>
              <p>
                <a href={whatsappLink}>WhatsApp</a>
              </p>
              <p>
                <a href={instagramLink} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </p>
              <p>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
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
