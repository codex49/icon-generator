import React, { Component } from 'react';
import html2canvas from 'html2canvas';

export default class Footer extends Component {
    constructor() {
        super();

        this.openPopUp = this.openPopUp.bind(this);
    }
    openPopUp (event) {
        event.preventDefault();

        const popUp = $('.popup');
        const that = this;
        let getCanvas = null;
        popUp.fadeIn(500);

        html2canvas($(".board-resultat"), {
            useCORS: true,
            allowTaint: true,
            letterRendering: true,
            onrendered: function(canvas) {
                that.props.getCanvasToDownload(canvas);
                $('#icon-result').html(canvas);
            }
        });
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