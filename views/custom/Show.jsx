const React = require('react');
const Layout = require('../components/Layout.jsx')
const Navbar = require('../shirts/Nav')

class Show extends React.Component {
    render() {
        const logos = this.props.logos;
        return (
            <Layout> 
            <Navbar></Navbar>
            <div className="customcontainer">
                <div className="maincontainer">
                    <div className="textcontainer">
                        <h1 id="ch1">Shirt Preview</h1> <br/>
                        <h2>Name : {logos.name}</h2><br/>
                        </div>
                    </div>
                    <div className="shirtcontainer">
                        <img className="shirt" src='https://i.imgur.com/iHewPMj.jpg' alt="asd" />
                        <img className="logo" src={logos.img} alt="asd" />
                    </div> 
            </div>           
            </Layout>
                )
    }
}

module.exports = Show;
