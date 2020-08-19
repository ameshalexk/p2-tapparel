const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New Grains page</h1>
              <form action="/grains" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  
                  <input type="submit" name="" value="Create Grain"/>
               </form>

            </div>
        )
    }

}

module.exports = New