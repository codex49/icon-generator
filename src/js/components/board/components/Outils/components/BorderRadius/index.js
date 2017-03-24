import React, { Component } from 'react';

import AppActions from '../../../../../../actions/AppActions';
import AppAPI from '../../../../../../utils/appAPI';

export default class BorderRadius extends Component {
    emitChange () {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener (callback) {
        this.on('change', callback);
    }

    removeChangeListener (callback) {
        this.removeListener('change', callback);
    }

    getValueBorder (e){
        var BorderRadius = e.target.value;
        AppActions.changeBorder(BorderRadius);
    }

    render () {
        var nbrRaduis = AppAPI.getNumberBorderRadius();
        var ops = [];

        for(var i=0; i<nbrRaduis; i+=20){
            ops.push(<option key={i}>{i}</option>);
        }

        return (
            <select onChange={this.getValueBorder}>
                <option>Radius</option>
                {ops}
            </select>
        );
    }
}