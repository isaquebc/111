import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';

export default class Image extends Component {

	render() {
		return (
			<div>
				<div className='image-red-ball' ref='ball' />
				<div className='image-wrapper'>
						<LazyLoad height={300}>
							<img className='image' src={this.props.src} alt={this.props.alt} />
						</LazyLoad>
					</div>
				</div>		
		);
	}
}
