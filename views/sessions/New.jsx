const React = require('react');
const Layout = require('../components/Layout.jsx')
const Navbar = require('../shirts/Nav')

class LoginUser extends React.Component {
    render() {
        return (
            <Layout>
            <Navbar></Navbar>
            <div className="login" style={{textAlign: 'center'}}>
                <h1>Login</h1>
                <form action="/sessions/" method="POST">
                    USER NAME: <input type="text" name="username" style={{margin: '10px'}}/>
                    <br />
                    PASSWORD: <input className="qtys" type="password" name="password" style={{margin: '10px'}}/>
                    <br />
                    <input className="qtys" type="submit" name="" value="Login" />
                </form>
            </div>
            </Layout>    
        );
    }
}

module.exports = LoginUser;