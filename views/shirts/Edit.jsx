const React = require("react");
const Layout = require('../components/Layout.jsx')
const Navbar = require('./Nav')
class Edit extends React.Component {
  render() {
    const shirt = this.props.shirt;
    return (
      <Layout>
        <Navbar><form style={{textAlign: "right"}} className="nav-link" action="/sessions?_method=DELETE" method="POST">
            <input type="submit" value="Log Out" className="btn-small red btn btn-primary " />
            </form></Navbar>
        <div className="editshirt">
        <h1>Edit page</h1>
        <form action={`/shirts/${shirt._id}?_method=PUT`} method="POST">
        <div className="form-row">
        <div className="form-group col-md-6">
                <label htmlFor="name" >Name:</label>
                 <input className="form-control" type="text" name="name" defaultValue={shirt.name}/><br/>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="description" >Description:</label>
                <textarea className="form-control" name="description" defaultValue={shirt.description}/><br/>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="img" >Img:</label>
                 <input className="form-control" type="text" name="img" defaultValue={shirt.img}/><br/>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="price" >Price:</label>
                <input className="form-control" type="number" name="price" defaultValue={shirt.price}/><br/>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="qty" >Qty:</label>
                <input className="form-control" type="number" name="qty" defaultValue={shirt.qty}/><br/>
                </div>
                </div>
                <input className=" btn btn-primary" type="submit" name="" defaultValue="Edit Shirt"/>
        </form>
        <div>
          <form action={`/shirts/${shirt._id}?_method=DELETE`} method="POST">
            <button style={{margin: '10px'}} className="btn btn-danger" value="Delete">DELETE ITEM</button>
          </form>
        </div>
        </div>
        </Layout>
    )
  }
}

module.exports = Edit;
