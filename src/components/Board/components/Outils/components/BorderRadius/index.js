import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { changeBorder } from '../../../../../../redux/actions';

class BorderRadius extends Component {
  static defaultProps = {
    changeBorder: () => undefined,
  }

  static propTypes = {
    changeBorder: PropTypes.func,
  }

  renderValuesBorder = () => {
    const ops = [];

    for (let i = 0; i < 600; i += 20) {
      ops.push(
        <option key={i}>
          {i}
        </option>,
      );
    }
    return ops;
  }

  render() {
    return (
      <select onChange={e => this.props.changeBorder(e.target.value)}>
        <option>Radius</option>
        {this.renderValuesBorder()}
      </select>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  changeBorder: bindActionCreators(changeBorder, dispatch),
});

export default connect(null, mapDispatchToProps)(BorderRadius);
