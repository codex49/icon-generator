import React, { Component, propTypes } from 'react';

const defaultProps = {
  handleAction : undefined,
  classButton: null,
  classIcon: null,
  type: null,
}

const propTypes = {
  handleAction : propTypes.func,
  classButton: propTypes.string,
  classIcon: propTypes.string,
  type: propTypes.string,
}

class IconButton extends Component {
  renderIcon () {
    return (
      <i className={this.props.classIcon}></i>
    );
  }

  renderTypeButton () {
    const type = this.props.type;

    if (type === 'link'){
      <a
        onClick={ this.props.onClick }
        className={this.props.classButton}
      >
        {this.renderIcon()}
        this.props.children
      </a>
    }
    else if (type === 'button'){
      <button
        onClick={ this.props.onClick }
        className={this.props.classButton}
      >
        {this.renderIcon()}
        this.props.children
      </button>
    }
  }

  render () {
      return (
          this.renderTypeButton()
      );
  }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default IconButton;
