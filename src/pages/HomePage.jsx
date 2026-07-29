import { useEffect, useId, useState } from "react";
import "../styles/home.css";

const defaultWhatsappMessage =
  "Olá! Vim pelo site da VALORIS e gostaria de falar com um especialista para entender qual solução é mais adequada para mim.";

const createWhatsappLink = (phone, message) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

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
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const navId = useId();
  const whatsappPanelId = useId();

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

  const whatsappMessage = selectedService?.whatsappMessage || defaultWhatsappMessage;
  const whatsappContacts = [
    {
      name: "Alessandra Santana",
      phone: "+55 91 9230-3598",
      whatsappPhone: "559192303598",
      link: createWhatsappLink("559192303598", defaultWhatsappMessage),
    },
    {
      name: "Clodovane Lago",
      phone: "+55 91 8229-5217",
      whatsappPhone: "559182295217",
      link: createWhatsappLink("559182295217", defaultWhatsappMessage),
    },
  ];

  const instagramLink = import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/valorisestrategia/";

  const services = [
    {
      id: "consorcios",
      title: "Consórcios",
      description:
        "Planejamento patrimonial para aquisição de imóveis, veículos, equipamentos, serviços e investimentos.",
      icon: icons.compass,
      windowMessage:
        "Quer saber mais sobre Consórcios? Fale com um dos nossos especialistas escolhendo uma das opções abaixo.",
      whatsappMessage: "Olá! Vim pelo site da Valoris. Gostaria de saber mais sobre o serviço de Consórcios.",
    },
    {
      id: "seguros",
      title: "Seguros",
      description:
        "Proteção para sua família, seu patrimônio e sua empresa com segurança e tranquilidade.",
      icon: icons.shield,
      windowMessage:
        "Quer saber mais sobre Seguros? Fale com um dos nossos especialistas escolhendo uma das opções abaixo.",
      whatsappMessage: "Olá! Vim pelo site da Valoris. Gostaria de saber mais sobre o serviço de Seguros.",
    },
    {
      id: "planos-de-saude",
      title: "Planos de Saúde",
      description:
        "Para pessoas físicas e empresas, garantindo qualidade de vida para quem mais importa.",
      icon: icons.heart,
      windowMessage:
        "Quer saber mais sobre Planos de Saúde? Fale com um dos nossos especialistas escolhendo uma das opções abaixo.",
      whatsappMessage: "Olá! Vim pelo site da Valoris. Gostaria de saber mais sobre o serviço de Planos de Saúde.",
    },
    {
      id: "pesquisas-estrategicas",
      title: "Pesquisas Estratégicas",
      description:
        "Pesquisas de opinião pública, eleitorais e de mercado para apoiar suas decisões.",
      icon: icons.chart,
      windowMessage:
        "Quer saber mais sobre Pesquisas Estratégicas? Fale com um dos nossos especialistas escolhendo uma das opções abaixo.",
      whatsappMessage:
        "Olá! Vim pelo site da Valoris. Gostaria de saber mais sobre o serviço de Pesquisas Estratégicas.",
    },
  ];

  const openWhatsappForService = (service) => {
    setSelectedService(service);
    setIsWhatsappOpen(true);
  };

  const closeWhatsapp = () => {
    setIsWhatsappOpen(false);
    setSelectedService(null);
  };

  const toggleDefaultWhatsapp = () => {
    if (isWhatsappOpen) {
      closeWhatsapp();
      return;
    }

    setSelectedService(null);
    setIsWhatsappOpen(true);
  };

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
                Por que a Valoris?
              </a>
            </li>
            <li>
              <a href="#contato" className="nav-cta" onClick={() => setIsMobileMenuOpen(false)}>
                Contato
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
              <span className="hero-company-subtitle">Estratégia &amp; Gestão</span>
            </div>

            <h1>Soluções inteligentes para quem deseja proteger o presente e construir um futuro mais seguro.</h1>

            <p>
              Ajudamos pessoas e empresas a tomar decisões inteligentes por meio de consórcios, seguros, planos de
              saúde e pesquisas estratégicas, sempre com planejamento, segurança e foco no futuro.
            </p>

            <div className="hero-actions" aria-label="Ações principais">
              <a href="#contato" className="btn btn-primary">
                Fale com um especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="quem-somos" className="about">
        <div className="container">
          <div className="about-content reveal">
            <div className="section-mark">Quem somos</div>
            <h2>Na Valoris Estratégia &amp; Gestão, acreditamos que grandes conquistas começam com decisões inteligentes.</h2>
            <p className="about-lead">
              Nosso propósito é oferecer soluções que vão além da contratação de um serviço. Atuamos de forma
              consultiva, entendendo a realidade de cada cliente para desenvolver estratégias que protejam famílias,
              fortaleçam empresas, construam patrimônio e transformem projetos em realidade.
            </p>
          </div>
        </div>
      </section>

      <section id="como-trabalhamos" className="process">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-mark section-mark--dark">Como trabalhamos</div>
          </div>

          <ol className="process-grid">
            <li className="process-step reveal reveal-delay-1">
              <span className="process-number">01</span>
              <h3>Entendemos seus objetivos.</h3>
              <p>Cada cliente possui uma realidade diferente, por isso nosso primeiro passo é ouvir e compreender suas necessidades.</p>
            </li>
            <li className="process-step reveal reveal-delay-2">
              <span className="process-number">02</span>
              <h3>Analisamos a melhor estratégia.</h3>
              <p>Buscamos as soluções mais inteligentes e personalizadas para cada objetivo.</p>
            </li>
            <li className="process-step reveal reveal-delay-3">
              <span className="process-number">03</span>
              <h3>Apresentamos a solução ideal.</h3>
              <p>Selecionamos as melhores alternativas para proteger, investir e construir patrimônio.</p>
            </li>
            <li className="process-step reveal reveal-delay-4">
              <span className="process-number">04</span>
              <h3>Acompanhamos cada etapa.</h3>
              <p>Nosso compromisso continua após a contratação, oferecendo suporte e acompanhamento sempre que necessário.</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="servicos" className="services">
        <div className="container">
          <div className="services-grid">
            <div className="services-intro reveal">
              <div className="section-mark">Nossos serviços</div>
              <h2>Soluções para proteger, planejar e decidir com segurança.</h2>
              <p>
                Reunimos soluções para pessoas e empresas, sempre com planejamento e orientação especializada.
              </p>
            </div>

            {services.map((service, index) => (
              <article key={service.title} className={`service-card reveal reveal-delay-${(index % 4) + 1}`}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button type="button" className="service-link" onClick={() => openWhatsappForService(service)}>
                  Saber mais <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diferencial" className="why-choose">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-mark section-mark--dark">Nosso diferencial</div>
            <h2>Por que escolher a Valoris?</h2>
          </div>

          <ul className="benefits-list">
            <li className="reveal reveal-delay-1"><span aria-hidden="true">✓</span>Atendimento consultivo e personalizado.</li>
            <li className="reveal reveal-delay-2"><span aria-hidden="true">✓</span>Estratégias desenvolvidas para cada cliente.</li>
            <li className="reveal reveal-delay-3"><span aria-hidden="true">✓</span>Soluções completas em um único lugar.</li>
            <li className="reveal reveal-delay-4"><span aria-hidden="true">✓</span>Transparência, ética e compromisso.</li>
            <li className="reveal reveal-delay-1"><span aria-hidden="true">✓</span>Planejamento com foco no futuro.</li>
            <li className="benefit-cta reveal reveal-delay-2">
              <span aria-hidden="true">→</span>
              <div>
                <a href="#contato">Planeje o próximo passo!</a>
              </div>
            </li>
          </ul>

          <blockquote className="brand-quote reveal">
            <span>“O nosso maior diferencial sempre serão as pessoas.”</span>
          </blockquote>
        </div>
      </section>

      <section className="essence">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-mark">Essência da Valoris</div>
            <p className="essence-statement reveal">
              Queremos construir relacionamentos duradouros e ajudar pessoas e empresas a proteger suas conquistas.
            </p>
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
          <h2>Seu próximo patrimônio começa com uma boa estratégia.</h2>
          <p>
            Converse com a Valoris Estratégia &amp; Gestão e descubra como podemos ajudar você a proteger, conquistar e
            crescer com segurança.
          </p>

          <div className="contact-options" aria-label="Especialistas disponíveis">
            {whatsappContacts.map((contact) => (
              <a key={contact.name} href={contact.link} className="contact-option" target="_blank" rel="noreferrer">
                <strong>{contact.name}</strong>
                <span>{contact.phone}</span>
                <span className="contact-option-action">Conversar no WhatsApp →</span>
              </a>
            ))}
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
                <a href={whatsappContacts[0].link} target="_blank" rel="noreferrer">Alessandra Santana · +55 91 9230-3598</a>
              </p>
              <p>
                <a href={whatsappContacts[1].link} target="_blank" rel="noreferrer">Clodovane Lago · +55 91 8229-5217</a>
              </p>
              <p>
                <a href={instagramLink} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Valoris. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <aside className={`whatsapp-widget ${isWhatsappOpen ? "is-open" : ""}`} aria-label="Atendimento pelo WhatsApp">
        <div id={whatsappPanelId} className="whatsapp-panel" aria-hidden={!isWhatsappOpen}>
          <div className="whatsapp-panel-header">
            <span className="whatsapp-avatar" aria-hidden="true">V</span>
            <div><strong>VALORIS</strong><span>online</span></div>
            <button type="button" onClick={closeWhatsapp} aria-label="Fechar atendimento">×</button>
          </div>
          <div className="whatsapp-chat-body">
            <span className="whatsapp-chat-date">Hoje</span>
            <div className="whatsapp-message" aria-live="polite">
              <p>
                {selectedService?.windowMessage ||
                  "Olá! Gostaria de entender qual solução é mais adequada para você? Fale com um de nossos especialistas:"}
              </p>
              <time>agora</time>
            </div>
            <div className="whatsapp-choices">
              {whatsappContacts.map((contact) => (
                <a
                  key={contact.name}
                  href={createWhatsappLink(contact.whatsappPhone, whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="whatsapp-contact-avatar" aria-hidden="true">{contact.name.charAt(0)}</span>
                  <strong>{contact.name}</strong>
                  <span className="whatsapp-send-icon" aria-hidden="true">›</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <button className="whatsapp-trigger" type="button" onClick={toggleDefaultWhatsapp} aria-expanded={isWhatsappOpen} aria-controls={whatsappPanelId} aria-label={isWhatsappOpen ? "Fechar atendimento pelo WhatsApp" : "Abrir atendimento pelo WhatsApp"}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2a9.84 9.84 0 0 0-8.52 14.76L2 22l5.38-1.41A9.96 9.96 0 0 0 12.04 22 9.84 9.84 0 0 0 12.04 2Zm0 18.34a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-3.2.84.85-3.11-.2-.32a8.17 8.17 0 1 1 7.07 3.93Zm4.53-6.12c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.71c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.54.12.16 1.73 2.64 4.19 3.7.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.29Z" />
          </svg>
        </button>
      </aside>
    </div>
  );
}

export default HomePage;
