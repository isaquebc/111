import React, { Component } from 'react';
import Audio from '../components/audio';

export default class Menu extends Component{

	render(){

		return(
			<nav className='header flex-between'>
				<div className='title'><a href='sobre'>centoeonze \\\</a></div>
				<img src='/assets/icons/go_top.svg' className='button-up' onClick={() => window.smoothScroll(0,0) }/>
			</nav>
		);
	}
}

