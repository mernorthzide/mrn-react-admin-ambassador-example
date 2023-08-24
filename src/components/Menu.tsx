const Menu = () => {
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="bg-body-tertiary"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-2 active"
                aria-current="page"
                href="#"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
