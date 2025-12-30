import '../styles/About.css';
import tangoBadge from '../images/tango-consultor.png';

const About = () => {
  return (
    <div className="section-divider">
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row">
            {/* =========================
                LEFT – TEXTO
            ========================= */}
            <div className="col-lg-6 about-left">
              <h2 className="about-title">
                <span>Walter Gimenez</span> – Técnico Consultor Certificado con
                más de 25 años de experiencia en Tango Software
              </h2>

              <p className="about-lead">
                Acompañando empresas con soluciones de gestión confiables y a
                largo plazo.
              </p>

              <p>
                Trabajamos acompañando a empresas y pymes en la implementación,
                soporte y evolución de <strong>Tango Gestión</strong>, brindando
                soluciones confiables y adaptadas a cada necesidad.
              </p>

              <p>
                A lo largo de los años nos fuimos adaptando a los cambios
                tecnológicos, integraciones con e-commerce y nuevas formas de
                trabajo, siempre con un enfoque práctico y orientado a
                resultados.
              </p>

              <blockquote className="about-quote">
                Nuestro diferencial es el <strong>trato cercano</strong>, la{' '}
                <strong>atención personalizada</strong> y el compromiso de estar
                presentes cuando el cliente lo necesita.
              </blockquote>
            </div>

            {/* =========================
                RIGHT – BADGE + METRICS (DESKTOP)
            ========================= */}
            <div className="col-lg-6">
              <div className="about-right">
                {/* BADGE */}
                <div className="about-badge">
                  <img
                    src={tangoBadge}
                    alt="Consultor Oficial Tango Software"
                  />
                </div>

                {/* MÉTRICAS – DESKTOP ONLY */}
                <div className="about-metrics desktop-only">
                  <div className="about-metric">
                    <h3>+25</h3>
                    <p>Años de experiencia</p>
                  </div>

                  <div className="about-metric">
                    <h3>100+</h3>
                    <p>Clientes atendidos</p>
                  </div>

                  <div className="about-metric">
                    <h3>Enfoque práctico</h3>
                    <p>Soluciones reales para el día a día</p>
                  </div>

                  <div className="about-metric">
                    <h3>Cercanía</h3>
                    <p>Trato directo y personalizado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                MÉTRICAS – MOBILE ONLY
            ========================= */}
            <div className="about-metrics mobile-only">
              <div className="about-metric">
                <h3>+25</h3>
                <p>Años de experiencia real</p>
              </div>

              <div className="about-metric">
                <h3>+100</h3>
                <p>Clientes atendidos</p>
              </div>

              <div className="about-metric">
                <h3>Tango</h3>
                <p>Especialización continua</p>
              </div>

              <div className="about-metric">
                <h3>Cercanía</h3>
                <p>Trato directo y personalizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
