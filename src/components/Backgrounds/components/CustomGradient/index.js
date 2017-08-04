import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GradientColor from './components/GradientColor';

import {
  changeGradientBoardTop,
  changeGradientBoardBottom,
} from '../../../../redux/actions';

class CustomGradient extends Component {
  handleChangeBgTop = topColor => {
    this.props.changeGradientBoardTop(topColor, 'gradient');
  };

  handleChangeColorBottom = bottomColor => {
    this.props.changeGradientBoardBottom(bottomColor, 'gradient');
  };

  render() {
    const backgroundGradient = {
      background: `linear-gradient(${this.props.gradientBoardTop}, ${this.props
        .gradientBoardBottom})`,
    };

    return (
      <div className="gradient">
        <h3>Custom gradient</h3>
        <div className="box" onClick={this.change}>
          <div className="result" style={backgroundGradient} />
          <div className="inputs">
            <GradientColor handleChangeColor={this.handleChangeBgTop} />
            <GradientColor
              handleChangeColor={this.handleChangeColorBottom}
              class="MT-44"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gradientBoardTop: state.board.gradientBoardTop,
  gradientBoardBottom: state.board.gradientBoardBottom,
});

const mapDispatchToProps = dispatch => ({
  changeGradientBoardTop: bindActionCreators(changeGradientBoardTop, dispatch),
  changeGradientBoardBottom: bindActionCreators(
    changeGradientBoardBottom,
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomGradient);
