const React = require('react');
const Layout = require('../components/Layout.jsx')
const Navbar = require('../shirts/Nav')

class Show extends React.Component {
    render() {
        const cshirt = this.props.cshirt;
        const logos = this.props.logos;
        return (
            <Layout> 
            <Navbar></Navbar>
            {console.log(this.props.logos),true}

            <div className="customcontainer">
                <div className="maincontainer">
                    <div className="textcontainer">
                        <h1 id="ch1">Shirt Preview</h1> <br/>
                        <h2>Name : {cshirt.name}</h2><br/>
                        </div>
                    </div>
                    <div className="shirtcontainer">
                        {/* <img className="shirt" src='https://i.imgur.com/iHewPMj.jpg' alt="asd" /> */}
                        <img className="logo" src={cshirt.img} alt="asd" />
                    </div> 
            </div>         
            <ul id="container">
            {logos.map((ele,idx)=> {
                         return (<ul key={ele._id} className='ulcc'> 
                             <li className="pkc" key={ele._id} >  
                             <a className="btn btn-primary btn-lg" href={`/custom/${ele._id}?${cshirt.img}`}>
                             <img className="shadow-lg p-3 mb-5 bg-white rounded rounded-top imgsc " src={ele.img} alt="asd"/>
                               </a>
                                <br/>
                             <a className="p-3 mb-2 bg-success text-dark rounded-square btn btn-primary btn-lg" href={`/cshirt/${ele._id}`}> {ele.name.charAt(0).toUpperCase() + ele.name.slice(1)}  {ele.price}</a> 
                             </li>
                             </ul>)
                       })}
                       </ul>
            </Layout>
                )
    }
}

module.exports = Show;
