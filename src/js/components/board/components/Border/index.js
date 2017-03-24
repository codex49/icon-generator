import React, { Component } from 'react';

export default class Border extends Component {
    render () {
        return (
            <div>
                <span className="border top-left"></span>
                <span className="border top-right"></span>
                <span className="border bottom-right"></span>
                <span className="border bottom-left"></span>
            </div>
        );
    }
}