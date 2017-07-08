var React = require('react');

var YoutubeVideo = React.createClass({
	render () {
		let videoUrl = 'https://www.youtube.com/embed/'+this.props.id;
		return (
			<div className='youtube-video' style={{position: 'relative', width: '480px',height: '270px'}}>
				<iframe	width="100%" style={{position: 'absolute', height: '100%'}} src={videoUrl} frameBorder="0"></iframe>
			</div>
		);
	}
});

export default YoutubeVideo;
