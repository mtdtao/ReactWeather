var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return (
//             <h2>This is About component</h2>
//         );
//     }
// });

var About = (props) => {
    return (
        // <h3>About component</h3>
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather web built with React</p>
            <p>Here are some of the Tools I used</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react/">React</a> - The javascript framework.
                </li>
                <li>
                    <a href="http://openweathermap.org/">Open Weather Map</a> - The weather search tool.
                </li>
                <li>
                    <a href="http://foundation.zurb.com/">Foundation</a> - The front-end framework.
                </li>
            </ul>
        </div>

    )
};

module.exports = About;
