const React = require('react');

class Index extends React.Component {
    render() {
        const { veggies } = this.props;
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <nav>
                    <a href="/vegetables/new">Create a New Vegetable</a>
                </nav>
                <ul>
                    {
                        veggies.map((veggies, i) => {
                            return (
                                <li key={veggies.name}>
                                    The <a href={`/vegetables/${veggies._id}`}>{veggies.name}</a> is {veggies.isGreen ? `Green` : `not Green`} <br></br>
                                    {/* {veggies.readyToEat ? `It is ready to eat` : `It is not ready to eat`} */}
                                    {/* /fruits/id_of_the_fruit/override_post_method */}
                                    <form action={`/vegetables/${veggies._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /fruits/id_of_fruit/edit */}
                                    <a href={`/vegetables/${veggies._id}/edit`}>Edit</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;