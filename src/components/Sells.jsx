import '../Styles/Sells.css';
import SellerCert from '../images/seller-cert.svg';

const Sells = () => {
  return (
    <section id="adquisicion" className="sells-section">
      <div className="container">
        <div className="sells-certification">
          <img
            src={SellerCert}
            alt="Centro de Ventas y Servicios Tango Software Certificado"
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="sells-text-wrap">
              <h2 className="sells-title">
                Adquirí <span>Tango Software</span>
                <br />
                con asesoramiento experto
              </h2>

              <p className="sells-description sells-description--desktop">
                Te acompañamos en todo el proceso de adquisición de Tango
                Gestión, con <strong>asesoramiento personalizado</strong> para
                que elijas la solución adecuada según las necesidades reales de
                tu empresa.
              </p>

              <p className="sells-description sells-description--mobile">
                Te acompañamos en la adquisición de Tango Gestión con
                asesoramiento personalizado.
              </p>
            </div>

            <div className="sells-features">
              <ul>
                <li>Asesoramiento previo y análisis de requerimientos</li>
                <li>Licencias oficiales de Tango Gestión</li>
                <li>Implementación y puesta en marcha</li>
                <li>Soporte técnico y acompañamiento continuo</li>
              </ul>
            </div>

            <div className="sells-actions">
              <a
                href="https://reaxion.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Ver Distribuidor Oficial
              </a>
            </div>

            <p className="sells-note">
              Distribuidor oficial de Tango Software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sells;
