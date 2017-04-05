import React, { Component } from 'react';

import AppActions from '../../../../../../actions/AppActions';
import AppAPI from '../../../../../../utils/appAPI';

export default class BorderRadius extends Component {
    constructor() {
        super();

        this.hangeChangeBorder = this.hangeChangeBorder.bind(this);
    }
    hangeChangeBorder (e){
        const BorderRadius = e.target.value;
        // AppActions.changeBorder(BorderRadius);
        this.props.hangeChangeBorder(BorderRadius);
    }

    renderValuesBorder () {
      var nbrRaduis = AppAPI.getNumberBorderRadius();
      var ops = [];

      for(var i=0; i<nbrRaduis; i+=20){
          ops.push(<option key={i}>{i}</option>);
      }
      return ops;
    }

    render () {
        return (
            <select onChange={this.hangeChangeBorder}>
                <option>Radius</option>
                {this.renderValuesBorder()}
            </select>
        );
    }
}
