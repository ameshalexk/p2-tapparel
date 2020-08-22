const React = require('react');
class Navbar extends React.Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navul sticky-top" style={{background: "#e3f2fd"}}>
          <a className="navbar-brand" href="/shirts"> <img src="" alt=""/> TAPPAREL.COM</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/shirts">Home </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/shirts/new">Admin Only</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/cshirt">Custom Order</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/static/about">About Us</a>
              </li>
             </ul>
              <span style={{textAlign: "center", background: 'linear-gradient(to right, cornflowerblue, #bada55)'}} className="nav-link" >
              Custom T's or Designer T's - You Choose Your Own Style
              </span>
            
          </div>
        </nav>
      </div>
    )
  }
}
module.exports = Navbar;