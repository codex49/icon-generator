import React, { Component } from 'react';

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
      const ops = [];

      for (let i=0; i<600; i+=20){
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
