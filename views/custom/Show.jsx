const React = require('react');
const Layout = require('../components/Layout.jsx')
const Navbar = require('../shirts/Nav')

class Show extends React.Component {
    render() {
        const logos = this.props.logos;
        const test = this.props.bob;
        const lol = Object.keys(this.props.ciurl).toString()
        console.log(logos,'lool');
        return (
            <Layout> 
            <Navbar></Navbar>
            <div className="customcontainer bimgab">
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
            </div>           
            </Layout>
                )
    }
}

module.exports = Show;
