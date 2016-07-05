var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//     render: function() {
//         return (
//             <h2>This is Examples component</h2>
//         );
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few examples to try out!</p>
            <ol>
                <li>
                    <Link to="/?location=west%20lafayette">West Lafayette, IN</Link>
                </li>
                <li>
                    <Link to="/?location=newyork">New York, NY</Link>
                </li>
                <li>
                    <Link to="/?location=london">London, UK</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;
