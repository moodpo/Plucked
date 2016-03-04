import React from 'react';

class Home extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {secondsElapsed: 0};
	}

  	componentDidMount() {
  		var that = this;
  		this.interval = setInterval(function(){
  			that.setState({secondsElapsed: that.state.secondsElapsed + 1});
  			that.setTitle(that.state.secondsElapsed);
  		}, 1000);
  	}

  	setTitle(title) {
  		if((/iphone|ipad/gi).test(window.navigator.appVersion)){
		     var $body = $('body');
		     document.title = title;
		     // hack 在微信等webview中无法修改 document.title 的情况
		     var $iframe = $('<iframe src="/favicon.ico" class="display:none;width:0;height:0" frameBorder="0"></iframe>').on('load', function() {
			     setTimeout(function() {
			     	$iframe.off('load').remove()
			     }, 0)
		   	 }).appendTo($body);
		} else {
		     document.title = title;
		}
  	}

  	componentWillUnmount() {
		clearInterval(this.interval);
  	}

	render() {
		return (
		  <div className='alert alert-info'>
		    React NodeJS Express Flux MongonDB Demo ({this.state.secondsElapsed})
		  </div>
		);
	}
}

export default Home;