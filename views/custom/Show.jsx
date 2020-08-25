const React = require('react');
const Layout = require('../components/Layout.jsx')
const Navbar = require('../shirts/Nav')

class Show extends React.Component {
    render() {
        const logos = this.props.logos;
        const lol = Object.keys(this.props.ciurl).toString()
        return (
            <Layout> 
            <Navbar></Navbar>
            <div className="customcontainer bimgab2">
                <div className="maincontainer">
                    <div className="textcontainer">
                        <h1 id="ch1">Shirt Preview</h1> <br/>
                        <h2>Name : {logos.name}</h2><br/>
                        </div>
                    </div>
                    <div className="shirtcontainer">
                        <img className="shirt" src={lol} alt="asd" />
                        <img className="logo" src={logos.img} alt="asd" />
                    </div> 

                    <div className='fbim'>
                        <form action="/shirts" id="form1" method="POST">
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
                                <button className="btn btn-primary bc" type="submit" form="form1" name="qty" > Buy </button><br />
                </form>
                </div>
            </div>           
            </Layout>
                )
    }
}

module.exports = Show;
