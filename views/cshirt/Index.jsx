const React = require('react');
const Layout = require('../components/Layout.jsx')
const Navbar = require('../shirts/Nav')

class Index extends React.Component {
  render() {
      const cshirt = this.props.cshirt;
    return (
      <Layout title='Home Page'>
        <Navbar></Navbar>
    <h1>Welcome : {this.props.currentUser}</h1> 
    {/* {console.log(this.props.cshirt,this.props,true)} */}
        <div className='bim'>
          <div>
            <a className="bimgab" href="/cshirt/new" style={{color: 'yellow',border: '2px solid'}}> Upload your own Custom Shirt Image</a>
          </div>
            <ul id="container">  
            <h1 className='h1f' style={{textAlign: 'center', color: 'black'}}> Choose your custom shirt designed by our experts : </h1>
                       {cshirt.map((ele,idx)=> {
                         return (<ul key={ele._id} className='ulc'> 
                             <li className="pk" key={ele._id}>  
                             <a className="btn btn-primary btn-lg" href={`/cshirt/${ele._id}`}>
                             <img className="shadow-lg p-3 mb-5 bg-white rounded rounded-top imgs " src={ele.img} alt="asd"/>
                               </a>
                                <br/>
                             <a className="p-3 mb-2 bg-success text-dark rounded-square btn btn-primary btn-lg" href={`/cshirt/${ele._id}`}> {ele.name.charAt(0).toUpperCase() + ele.name.slice(1)}  {ele.price}</a> 
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