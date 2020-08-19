const React = require('react');

class Index extends React.Component {
    render() {
        const { grains } = this.props;
        return (
            <div>
                <h1>Grains Index Page</h1>
                <nav>
                    <a href="/grains/new">Create a New Grain</a>
                </nav>
                <ul>
                    {
                        grains.map((grain, i) => {
                            return (
                                <li key={grain.name}>
                                    The <a href={`/grains/${grain._id}`}>{grain.name}</a> 
                                    {/* {veggies.readyToEat ? `It is ready to eat` : `It is not ready to eat`} */}
                                    {/* /fruits/id_of_the_fruit/override_post_method */}
                                    <form action={`/grains/${grain._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /fruits/id_of_fruit/edit */}
                                    <a href={`/grains/${grain._id}/edit`}>Edit</a>
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