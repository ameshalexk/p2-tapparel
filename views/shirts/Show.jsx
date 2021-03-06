const React = require('react');
const Layout = require('../components/Layout.jsx')
const Navbar = require('./Nav')

class Show extends React.Component {
    render() {
        const shirt = this.props.shirty;
        const check = () => {
            if (shirt.qty > 0) {
                return (
                    <div className='fbim'>
                        <form action={`/shirts/${shirt.id}?_method=PATCH`} id="form1" method="POST">
                            <label htmlFor="qtys">Choose Quantity (Max 5):</label>
                            <select className="qtys" name="qtys" id="qtys">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br/>
                            <br/>
                                <button className="btn btn-primary bc" type="submit" form="form1" name="qty" value={shirt.qty}> Buy </button><br />
                </form>
                </div>

                )

            } else {
                return <h1> Out of Stock</h1>
            }
        }
        return (
            <Layout> 
            <Navbar><form style={{textAlign: "right"}} className="nav-link" action="/sessions?_method=DELETE" method="POST">
            <input type="submit" value="Log Out" className="btn-small red btn btn-primary " />
            </form></Navbar>
            <div className="showpg">
                <div className="showpgdiv1 bimgab">
                                <h1>Item Page</h1> <br/>
                                <h2>Name : {shirt.name}</h2><br/> 

                                <h3>Description : {shirt.description}</h3><br/>
                                <h4>Price : {shirt.price}</h4><br/>
                                <h4>Qty : {shirt.qty}</h4><br/>
                                </div>
                                <div className="showpgdiv2 bimgab">
                                <img className="showimgf" src={shirt.img} alt="asd" />
                                <div className="checked">
                                    {check()}
                                </div>
                                </div>
                            </div>
                            <a href={`/shirts/${shirt.id}/edit`}> Would you like to edit this? Admin Only</a>
            </Layout>
                )
    }
}

module.exports = Show;
