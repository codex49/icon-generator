import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showPopupDownload } from '../../../../redux/actions';

import fbIcon from '../../../../public/assets/img/icons/fb-like.png';

class FooterPopUp extends Component {
  static defaultProps = {
    showPopupDownload: () => undefined,
  }

  static propTypes = {
    showPopupDownload: PropTypes.bool,
  }

  handleClosePopUp = (e) => {
    e.preventDefault();
    this.props.showPopupDownload();
  };

  render() {
    return (
      <div className="footer">
        <a href="" className="like-fb">
          <img className="btn-like" src={fbIcon} alt="icon facebook" />
          54,222 people like this. Be the first of your friends.
        </a>
        <a href="" className="close" onClick={this.handleClosePopUp}>
          Build another? Click here
        </a>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showPopupDownload: bindActionCreators(showPopupDownload, dispatch),
});

export default connect(null, mapDispatchToProps)(FooterPopUp);
