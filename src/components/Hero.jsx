import '../Styles/Hero.css';
import mobileHero from "../images/mobile-hero3.png";
import heroTango from "../images/hero-tango.png";


const Hero = () => {
  return (
    <section
      id="hero"
      className="hero text-light d-flex align-items-center overflow-hidden"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Columna izquierda - Texto + Imagen SOLO mobile */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="hero-title">
              <span className="hero-line hero-line-1">Especialistas en</span>
              <span className="hero-line hero-line-2">Tango Software</span>
              <span className="hero-line hero-line-3">para empresas</span>
            </h1>

            <p className="hero-text">
              Implementación, soporte y mantenimiento de Tango Gestión.
              Acompañamos a empresas que necesitan estabilidad, control y
              continuidad operativa.
            </p>

            {/* IMAGEN SOLO MOBILE */}
            <div className="hero-image d-lg-none text-center">
              <img
                src={mobileHero}
                alt="Tango Gestión"
                className="img-fluid"
              />
            </div>

            <div className="hero-actions">
              <a href="#footer" className="btn btn-primary">
                Contactanos
              </a>

              <a
                href="https://reaxion.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                Adquirí Tango Gestión
              </a>
            </div>
          </div>

          {/* Columna derecha - Imagen SOLO desktop */}
          <div className="col-lg-6 text-center d-none d-lg-block">
            <img
              src={heroTango}
              alt="Sistema Tango Gestión"
              className="hero-img-desktop img-fluid rounded-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
