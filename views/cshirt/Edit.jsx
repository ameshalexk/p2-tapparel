const React = require("react");
const Layout = require('../components/Layout.jsx')
const Navbar = require('../shirts/Nav')
class Edit extends React.Component {
  render() {
    const shirt = this.props.cshirt;
    return (
      <Layout>
        <Navbar></Navbar>
        <div>
        <h1>Edit page</h1>
        <form action={`/shirts/${shirt.id}?_method=PUT`} method="POST">
        <div className="form-row">
        <div className="form-group col-md-6">
                <label htmlFor="name" >Name:</label>
                 <input className="form-control" type="text" name="name" defaultValue={shirt.name}/><br/>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="img" >Img:</label>
                 <input className="form-control" type="text" name="img" defaultValue={shirt.img}/><br/>
                </div>
                </div>
                <input type="submit" name="" defaultValue="Edit Shirt"/>
        </form>
        <div>
          <form action={`/shirts/${shirt._id}?_method=DELETE`} method="POST">
            <button className="btn btn-primary" value="Delete">DELETE ITEM</button>
          </form>
        </div>
        </div>
        </Layout>
    )
  }
}

module.exports = Edit;
