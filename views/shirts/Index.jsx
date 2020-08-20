const React = require('react');
const Layout = require('../components/Layout.jsx')
const Navbar = require('./Nav')

class Index extends React.Component {
  render() {
      const shirts = this.props.shirts;
    return (
      <Layout>
        <Navbar></Navbar>
        <div className='bimg'>
        <h1>Index Page</h1>
            <ul id="container">  
            <h1 className='h1f' style={{textAlign: 'center', color: 'black'}}> Choose your shirt designed by our experts : </h1>
                       {shirts.map((ele,idx)=> {
                         return (<ul key={ele._id} className='ulc'> 
                             <li className="pk" key={ele._id}>  
                             <a class="btn btn-primary btn-lg" href={`/shirts/${ele._id}`}>
                             <img className="shadow-lg p-3 mb-5 bg-white rounded rounded-top imgs " src={ele.img} alt="asd"/>
                               </a>
                                <br/>
                             <a className="p-3 mb-2 bg-success text-dark rounded-square btn btn-primary btn-lg" href={`/shirts/${ele._id}`}> {ele.name.charAt(0).toUpperCase() + ele.name.slice(1)} ($ {ele.price})</a> 
                             </li>
                             </ul>)
                       })}
                       </ul>
            <nav>
          {/* <a href="/items/new">Create a New Item</a> */}
            </nav>
        </div>
      </Layout>
        );
  }
}

module.exports = Index;