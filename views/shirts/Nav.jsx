const React = require('react');
class Navbar extends React.Component {
  render() {
    return (
        <div>
          <nav>
              <ul id="navul">
                  <li key='1' id="hp"><a href="/shirts/" class="btn btn-primary btn-lg" >Home Page </a> </li>
                  <li key='2' id="cp"><a href="/shirts/new"class="btn btn-primary btn-lg">Custom Order</a></li>
                  <li key='2' id="cp"><a href="/static/About"class="btn btn-primary btn-lg">About us </a></li>
            </ul>
          </nav>
        </div>
      )
  }
}
module.exports = Navbar;