import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row footer-content">
          {/* IDENTIDAD */}
          <div className="col-md-4 footer-block">
            <h5 className="footer-title">Walter Gimenez</h5>
            <p className="footer-subtitle">Consultor Tango Gestión</p>
          </div>

          {/* CONTACTO */}
          <div className="col-md-4 footer-block">
            <h6 className="footer-heading">Contacto</h6>

            <a
              href="https://wa.me/549XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link footer-contact"
            >
              <i className="bi bi-whatsapp"></i>
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:contacto@tudominio.com"
              className="footer-link footer-contact"
            >
              <i className="bi bi-envelope"></i>
              <span>Email</span>
            </a>
          </div>

          {/* PRESENCIA ONLINE */}
          <div className="col-md-4 footer-block">
            <h6 className="footer-heading">Encontranos en</h6>

            <div className="footer-socials">
              <a
                href="#"
                className="footer-social"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="#"
                className="footer-social"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube"></i>
              </a>

              <a
                href="#"
                className="footer-social"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} – Todos los derechos reservados ·
          Desarrollado por <span className="footer-author">MatDev</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
