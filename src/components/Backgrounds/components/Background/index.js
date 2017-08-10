import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { changeBackgroundBoard } from '../../../../redux/actions';

class Background extends Component {
  static defaultProps = {
    changeBackgroundBoard: () => undefined,
    link: null,
  }

  static propTypes = {
    changeBackgroundBoard: PropTypes.func,
    link: PropTypes.string,
  }

  handleChangeBackground = (event) => {
    const bgImg = $(event.target).attr('src');
    this.props.changeBackgroundBoard(bgImg, 'image');
  };

  render() {
    return (
      <li className="item" onClick={this.handleChangeBackground}>
        <img className="background" src={this.props.link} alt="" />
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeBackgroundBoard: bindActionCreators(changeBackgroundBoard, dispatch),
});

export default connect(null, mapDispatchToProps)(Background);
