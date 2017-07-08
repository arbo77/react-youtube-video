var React = require('react');
var ReactDOM = require('react-dom');
var YoutubeVideo = require('react-youtube-video');

var App = React.createClass({
	render () {
		return (
			<div>
				<YoutubeVideo id='blFCMpd6AG4' allowfullscreen='no'/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
