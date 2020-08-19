const React = require('react');

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const { name, isGreen } = this.props.vegetable;
        return (
            <div>
                <h1>Vegetables Show Page</h1>
                <p>The {name} is {isGreen ? `Green` : `not Green`}</p>
                <a href="/vegetables"> Back to Index</a>
            </div>
        )
    }
}

module.exports = Show;