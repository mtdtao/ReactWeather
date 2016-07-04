var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <h2>This is nav component</h2>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>Get Weather</IndexLink>
//                 <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>About</Link>
//                 <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>Examples</Link>
//             </div>
//         );
//     }
// });

var Nav = () => {
    return (
        <div>
            <h2>This is nav component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>About</Link>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>Examples</Link>
        </div>
    );
}

module.exports = Nav;
