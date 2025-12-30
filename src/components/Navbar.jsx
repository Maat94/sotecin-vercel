import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark custom-navbar">
      <div className="container">
        {/* Marca */}
        <a className="navbar-brand" href="#hero">
          <span className="brand-name">SOTECIN</span>
          <span className="navbar-claim">Soluciones Técnicas Integrales</span>
        </a>

        {/* Botón mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-3">
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#services">
                Soluciones
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium" href="#about">
                Nosotros
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium" href="#footer">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#adquisicion">
                Tango Gestión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
