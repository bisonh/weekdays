// Import some code we need
var React = require('react-native');
var Text = React.Text;

// Create our component
var DayItem = React.createClass({
  render: function() {
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  },
  style: function() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },
  color: function() {
    var opacity = 1 / this.props.daysUntil;
    return 'rgba(0, 0, 0, ' + opacity + ')';
    // rgba(0, 0, 0, 1) for current day
  },
  fontWeight: function() {
    var weight = 7 - this.props.daysUntil;
    return (weight * 100).toString();
    // must return a string
    // more bold the higher the number
  },
  fontSize: function() {
    return 60 - 6 * this.props.daysUntil;
    // size of text
  },
  lineHeight: function() {
    return 70 - 4 * this.props.daysUntil;
    // margin above and below text
  }
});

// Make this code available elsewhere
module.exports = DayItem;