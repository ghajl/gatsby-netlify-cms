import React from 'react';

class Navbar extends React.PureComponent {
  state = {
    isActive: false
  };

  handleBurgerClick = e => {
    e.preventDefault();
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  render() {
    return (
      <div>
        <nav className="navbar is-transparent is-fixed-top">
          <div className="container is-fluid">
            <div className="navbar-brand">
              <div className="navbar-item logo">
                <img src="/img/logo.png" alt="yoets maim" />
              </div>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item menu-phone-label">התקשרו אלינו:</div>
                <div className="navbar-item">
                  <a href="tel:+972520000000" className="nav-phone">
                    052-0000000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="backgroundHeader" />
      </div>
    );
  }
}

export default Navbar;
