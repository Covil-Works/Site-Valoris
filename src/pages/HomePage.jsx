import { useEffect, useId, useState } from "react";
import "../styles/home.css";

const icons = {
  compass: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 19 6v5.3c0 4.4-2.8 8.4-7 9.7-4.2-1.3-7-5.3-7-9.7V6l7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 0 0-7.1 7.1L12 21l8.4-8.3a5 5 0 0 0 0-7.1Z" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 12h18M12 12v2" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15l3-3 3 2 5-7" />
      <path d="M17 7h2v2" />
    </svg>
  ),
};

function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navId = useId();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const closeOnOutsideClick = (event) => {
      if (!event.target.closest(".navbar")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "55";
  const whatsappText = encodeURIComponent("Olá! Vim pelo site da VALORIS e gostaria de falar com um consultor.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const instagramLink = import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/seuinstagram";
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "contato@valorisgestao.com.br";

  const services = [
    {
      title: "Planejar patrimônio",
      eyebrow: "Consórcios Estratégicos",
      description:
        "Consórcios pensados como decisão patrimonial: compra, expansão ou conquista com previsibilidade e orientação.",
      icon: icons.compass,
    },
    {
      title: "Cuidar da saúde",
      eyebrow: "Planos de Saúde",
      description:
        "Soluções para proteger pessoas, famílias e equipes com atenção ao cuidado, à rotina e à tranquilidade.",
      icon: icons.heart,
    },
    {
      title: "Proteger o que importa",
      eyebrow: "Seguros",
      description:
        "Proteção para vida, patrimônio e negócios, construída para reduzir riscos nos momentos que mais importam.",
      icon: icons.shield,
    },
    {
      title: "Fortalecer empresas",
      eyebrow: "Estratégia & Gestão",
      description:
        "Apoio para organizar decisões, estruturar crescimento e enxergar caminhos empresariais com mais segurança.",
      icon: icons.briefcase,
    },
    {
      title: "Ler cenários",
      eyebrow: "Pesquisas & Inteligência",
      description:
        "Pesquisas de opinião e leitura estratégica para empresas e projetos políticos decidirem com mais clareza.",
      icon: icons.chart,
    },
  ];

  return (
    <div className="page">
      <nav className="navbar">
        <div className="navbar-container">
          <a className="brand" href="/" aria-label="Valoris - Página inicial">
            <img src="/img/valoris_logo.svg" alt="Valoris" className="logo" />
            <span className="wordmark">VALORIS</span>
          </a>

          <button
            className={`menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls={navId}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul id={navId} className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
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

      <section className="hero">
        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-brand">
              <span className="hero-wordmark">VALORIS</span>
            </div>

            <h1>Orientação para proteger o que você constrói.</h1>

            <p>
              Planejamento, proteção e inteligência para pessoas e empresas que decidem com responsabilidade.
            </p>

            <div className="hero-actions" aria-label="Ações principais">
              <a href={whatsappLink} className="btn btn-primary">
                Falar com a VALORIS
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="quem-somos" className="about">
        <div className="container">
          <div className="about-content reveal">
            <div className="section-mark">Quem somos</div>
            <h2>Pessoas vêm antes de serviços.</h2>
            <p className="about-lead">
              A VALORIS orienta pessoas e empresas em decisões que envolvem saúde, patrimônio, proteção, crescimento e
              estratégia.
            </p>
            <p className="about-summary">
              Unimos consórcios, planos de saúde, seguros, gestão e pesquisas de opinião em uma atuação consultiva,
              próxima e responsável.
            </p>
          </div>
        </div>
      </section>

      <section id="servicos" className="services">
        <div className="container">
          <div className="services-grid">
            <div className="services-intro reveal">
              <div className="section-mark">Serviços</div>
              <h2>Orientação para decidir melhor.</h2>
              <p>
                Ajudamos você a se orientar, proteger seu patrimônio e tomar decisões com mais segurança.
              </p>
            </div>

            {services.map((service, index) => (
              <article key={service.title} className={`service-card reveal reveal-delay-${(index % 4) + 1}`}>
                <div className="service-icon">{service.icon}</div>
                <p className="service-eyebrow">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diferencial" className="why-choose">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-mark section-mark--dark">Diferencial</div>
            <h2>Relações sólidas começam com relações verdadeiras.</h2>
            <p className="section-subtitle section-subtitle--dark">
              Nosso processo começa com escuta e termina com orientação clara para o próximo passo.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card reveal reveal-delay-1">
              <span className="why-number">01</span>
              <h3>Escutamos</h3>
              <p>Entendemos o momento, as prioridades e o que precisa ser protegido.</p>
            </div>
            <div className="why-card reveal reveal-delay-2">
              <span className="why-number">02</span>
              <h3>Lemos a situação</h3>
              <p>Organizamos riscos, possibilidades e caminhos antes de qualquer indicação.</p>
            </div>
            <div className="why-card reveal reveal-delay-3">
              <span className="why-number">03</span>
              <h3>Orientamos</h3>
              <p>Apresentamos alternativas com clareza, responsabilidade e visão de futuro.</p>
            </div>
            <div className="why-card reveal reveal-delay-4">
              <span className="why-number">04</span>
              <h3>Acompanhamos</h3>
              <p>Ajudamos o cliente a seguir o caminho mais adequado com segurança.</p>
            </div>
          </div>

          <blockquote className="brand-quote reveal">
            <span>O nosso maior diferencial sempre serão as pessoas.</span>
          </blockquote>
        </div>
      </section>

      <section className="essence">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-mark">Essência da Valoris</div>
          </div>

          <div className="essence-grid">
            <div className="essence-card reveal reveal-delay-1">
              <h3>Orientar</h3>
              <p>Com verdade, clareza e estratégia.</p>
            </div>
            <div className="essence-card reveal reveal-delay-2">
              <h3>Proteger</h3>
              <p>Sonhos, famílias, empresas e futuros.</p>
            </div>
            <div className="essence-card reveal reveal-delay-3">
              <h3>Valorizar</h3>
              <p>Cada história, conquista e decisão importante.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="cta">
        <div className="container reveal">
          <h2>Planeje com mais segurança.</h2>
          <p>Fale com um dos nossos especialistas e encontre a melhor orientação para o seu caso.</p>

          <div className="cta-actions">
            <a href={whatsappLink} className="btn btn-primary btn-large">
              <span>Conversar pelo WhatsApp</span>
              <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L4 20.3l1.1-4A8.4 8.4 0 1 1 20.5 11.8Z" />
                <path d="M9.3 7.8c-.2-.4-.4-.4-.7-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 3 4.5 4.1 2.2.9 2.7.7 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.2-.2-.5-.4l-1.7-.8c-.3-.1-.5-.2-.7.1l-.7.9c-.2.2-.4.3-.7.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-.8-1.8Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="wordmark">VALORIS</h3>
              <p>Orientação, proteção e valorização para decisões que constroem futuros mais seguros.</p>
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
