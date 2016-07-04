var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//         var {temp, location} = this.props;
//         return (
//             <h2>It is {temp} celsius degree in {location}</h2>
//         )
//     }
// });

var WeatherMessage = ({temp, location}) => {
    // var {temp, location} = props;
    return (
        <h2>It is {temp} celsius degree in {location}</h2>
    )
}

module.exports = WeatherMessage;
