const React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title>
        <link rel="shortcut icon"  href="./favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <script src="http://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/pokemon" type="text/css"/>
        <script src ="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"> </script>
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