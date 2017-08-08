import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPopupDownload } from '../../../../redux/actions';

import fbIcon from '../../../../public/assets/img/icons/fb-like.png';

class FooterPopUp extends Component {
  handleClosePopUp = e => {
    e.preventDefault();
    this.props.showPopupDownload(false);
  };

  render() {
    return (
      <div className="footer">
        <a href="" className="like-fb">
          <img className="btn-like" src={fbIcon} />
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
