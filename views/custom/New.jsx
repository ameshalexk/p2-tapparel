const React = require('react');
const Layout = require('../components/Layout')
const Navbar = require('../shirts/Nav')

class New extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar><form style={{textAlign: "right"}} className="nav-link" action="/sessions?_method=DELETE" method="POST">
            <input type="submit" value="Log Out" className="btn-small red btn btn-primary " />
            </form></Navbar>
        <div className='bimg'>
            <h1>Create New Logo</h1>
            <form action="/custom" method="POST">
            <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name" >Name:</label>
              <input className="form-control" type="text" name="name" /><br/>
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="img" >Img:</label>
                <input className="form-control" type="text" name="img"/><br/>
                </div>
                 <br/>
                 <br/>
                 </div>
                <input type="submit" className="btn btn-primary" value="Create Logo"/>
             </form>
        </div>
        </Layout>
        );
  }
}

module.exports = New;