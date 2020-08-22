const React = require('react');
const Layout = require('../components/Layout.jsx')
const Navbar = require('./Nav')

class Index extends React.Component {
  render() {
      const shirts = this.props.shirtsyy;
      // console.log(shirts);
    return (
      <Layout title='Home Page'>
        <Navbar></Navbar>
        <form style={{textAlign: "right"}} className="nav-link" action="/sessions?_method=DELETE" method="POST">
            <input type="submit" value="Log Out" className="btn-small red btn btn-primary " />
            </form>
    <h1 className='shirth1'>Welcome : {this.props.currentUser}</h1>
        <div className='bim'>
            <ul id="container">  
            <h1 className='h1f' style={{textAlign: 'center', color: 'black'}}> Choose your shirt designed by our experts : </h1>
                       {shirts.map((ele,idx)=> {
                         return (<ul key={ele._id} className='ulc'> 
                             <li className="pk" key={ele._id}>  
                             <a className="btn btn-primary btn-lg" href={`/shirts/${ele._id}`}>
                             <img className="shadow-lg p-3 mb-5 bg-white rounded rounded-top imgs " src={ele.img} alt="asd"/>
                               </a>
                                <br/>
                             <a className="p-3 mb-2 bg-success text-dark rounded-square btn btn-primary btn-lg" href={`/shirts/${ele._id}`}> {ele.name.charAt(0).toUpperCase() + ele.name.slice(1)} ($ {ele.price})</a> 
                             </li>
                             </ul>)
                       })}
                       </ul>
            <nav>
            </nav>
        </div>
      </Layout>
        );
  }
}

module.exports = Index;