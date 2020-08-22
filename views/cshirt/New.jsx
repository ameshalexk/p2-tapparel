const React = require('react');
const Layout = require('../components/Layout')
const Navbar = require('../shirts/Nav')

class New extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar></Navbar>
        <div className='bimg'>
            <h1>Create New Custom Shirt</h1>
            <form action="/cshirt" method="POST">
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
                <input type="submit" className="btn btn-primary" value="Create Custom Shirt"/>
             </form>
        </div>
        </Layout>
        );
  }
}

module.exports = New;