import React, { Component } from 'react';
import html2canvas from '../../../lib/html2canvas';

export default class Footer extends Component {
    constructor() {
        super();

        this.openPopUp = this.openPopUp.bind(this);
    }
    openPopUp (event) {
        event.preventDefault();

        const popUp = $('.popup');
        popUp.fadeIn(500);

        html2canvas(this.props);
    }

    render () {
        return (
			<footer>
				<p>When you done, you can download your icon by clicking on the download buttons bellow</p>
				<a href="" className="btn-green" onClick={this.openPopUp}>Download icon</a>
			</footer>
        );
    }
}