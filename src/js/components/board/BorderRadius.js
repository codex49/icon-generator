import React from 'react';

import AppActions from '../../actions/AppActions';
import AppAPI from '../../utils/appAPI';

var BorderRadius = React.createClass({
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },
    getValueBorder: function(e){
        var BorderRadius = e.target.value;
        AppActions.changeBorder(BorderRadius);
    },
    render: function() {
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
    },
});

module.exports = BorderRadius;