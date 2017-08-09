import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import SketchPicker from 'react-color';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BorderRadius from './components/BorderRadius';
import { showGrid } from '../../../../redux/actions';

class Outils extends Component {
  static defaultProps = {
    getIconDroped: null,
    showGrid: () => undefined,
  }

  static propTypes = {
    getIconDroped: PropTypes.string,
    showGrid: PropTypes.func,
  }

  constructor() {
    super();

    this.state = {
      displayColorPicker: false,
    };
  }

  handleOpenSketchPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChangeColor = (color) => {
    const iconChecked = $('.board').find(this.props.getIconDroped).find('path');
    const c = color.rgb;
    iconChecked.css('fill', `rgba(${c.r}, ${c.g}, ${c.b},${c.a})`);
  };

  handleRemoveIcon = () => {
    $('.board').find(this.props.getIconDroped).fadeOut(100);
  };

  renderBlockColor = () => {
    if (!this.state.displayColorPicker) return null;

    return (
      <div className="popover">
        <div className="cover" onClick={this.handleClose} />
        <SketchPicker onChange={this.handleChangeColor} />
      </div>
    );
  };

  render() {
    return (
      <div className="outils">
        <div className="left">
          <a onClick={this.handleOpenSketchPicker} className="color btn-green">
            <i className="color-icon" />
            Color
          </a>
          {this.renderBlockColor()}
          <button onClick={this.handleRemoveIcon} className="delete">
            <i className="delete-icons" />
          </button>
        </div>
        <div className="right">
          <i className="icons-radius" />
          <BorderRadius />
          <button onClick={() => this.props.showGrid()} className="grid">
            <i className="lignes" />
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showGrid: bindActionCreators(showGrid, dispatch),
});

export default connect(null, mapDispatchToProps)(Outils);
