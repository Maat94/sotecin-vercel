import '../Styles/Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nuestros servicios</h2>
          <p className="text-muted mt-2">
            Soluciones pensadas para acompañar a tu empresa en el día a día.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="service-card service-green">
              <i className="bi bi-tools service-icon"></i>
              <h5 className="fw-bold">Soporte técnico especializado</h5>
              <p>
                Resolución de problemas, mantenimiento y asistencia técnica para
                sistemas de gestión, con atención personalizada.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card service-blue">
              <i className="bi bi-gear service-icon"></i>
              <h5 className="fw-bold">Implementación de Tango Gestión</h5>
              <p>
                Instalación, configuración y puesta en marcha de Tango Gestión
                adaptado a las necesidades de tu empresa.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card service-orange">
              <i className="bi bi-diagram-3 service-icon"></i>
              <h5 className="fw-bold">
                Integraciones con <br /> e-commerce
              </h5>
              <p>
                Integración de Tango Gestión con plataformas de e-commerce y
                sistemas externos para una gestión unificada.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card service-purple">
              <i className="bi bi-graph-up service-icon"></i>
              <h5 className="fw-bold">Asesoramiento y acompañamiento</h5>
              <p>
                Acompañamiento continuo para optimizar procesos, mejorar la
                gestión y asegurar el correcto funcionamiento del sistema.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <h5 className="fw-bold mb-3">¿No sabés qué servicio necesitás?</h5>
          <p className="text-muted mb-4">
            Hablá con nosotros y te asesoramos para encontrar la mejor solución.
          </p>
          <a href="#contacto" className="btn btn-primary">
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
