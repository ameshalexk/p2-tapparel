const React = require('react');
const Layout = require('../components/Layout.jsx')
const Navbar = require('../shirts/Nav')

class NewUser extends React.Component {
    render() {
        return (
            <Layout>
            <Navbar></Navbar>
            <div style={{textAlign: 'center'}}>
                <h1>New User</h1>
                <form action="/users/" method="POST">
                    USER NAME: <input type="text" name="username" style={{margin: '10px'}}/>
                    <br />
                    PASSWORD: <input type="password" name="password" style={{margin: '10px'}}/>
                    <br />
                    <input type="submit" value="Create User" />
                </form>
                <br/>
                <a style={{border: '1px solid black', color: 'darkmagenta'}}href="/sessions/new"> EXISTING USER?</a>
            </div>
            </Layout>
        );
    }
}

module.exports = NewUser;