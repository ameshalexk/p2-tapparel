const React = require('react');
class Navbar extends React.Component {
  render() {
    return (
      <div >
        {/* <nav>
          <ul id="navul">
            <li key='1' id="hp"><a href="/shirts/" class="btn btn-primary btn-lg" >Home Page </a> </li>
            <li key='2' id="cp"><a href="/shirts/new" class="btn btn-primary btn-lg">Custom Order</a></li>
            <li key='2' id="cp"><a href="/static/About" class="btn btn-primary btn-lg">About us </a></li>
          </ul>
        </nav> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navul" style={{background: "#e3f2fd"}}>
          <a className="navbar-brand" href="/shirts">TAPPAREL.COM</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/shirts">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shirts/new">Custom Order</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/static/about">About Us</a>
              </li>
            </ul>
            <span className="navbar-text">
              Custom T's or Designer T's - You Choose Your Own Style
    </span>
          </div>
        </nav>
      </div>
    )
  }
}
module.exports = Navbar;