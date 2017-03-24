import React, { Component } from 'react';

export default class Grid extends Component {
    render () {
        return (
            <div className="lines-grid">
                <hr className="verticale"/>
                <hr className="horizontale"/>
            </div>
        );
    }
}