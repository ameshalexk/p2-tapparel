const React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/pokemon" type="text/css"/>
        
        <link rel="stylesheet" href="/style.css"/>
        </head>
        <body>
        {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;