import React, { Component } from 'react';

import AppActions from '../../actions/AppActions';
import html2canvas from 'html2canvas';

export default class Footer extends Component {
    openPopUp (event) {
        event.preventDefault();

        var popUp = $('.popup');
        popUp.fadeIn(500);

        html2canvas($(".board-resultat"), {
            useCORS: true,
            allowTaint: true,
            letterRendering: true,
            onrendered: function(canvas) {
                AppActions.getIconToDownload(canvas);
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