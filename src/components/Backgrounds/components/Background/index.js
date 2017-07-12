import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeBackgroundBoard } from '../../../../redux/actions';

class Background extends Component {
    handleChangeBackground = event => {
        const bgImg = $(event.target).attr('src');
        this.props.changeBackgroundBoard(bgImg, 'image');
    }
    
    render (){
        return (
            <li className="item" onClick={this.handleChangeBackground}>
                <img className="background" src={this.props.link} alt=""/>
            </li>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    changeBackgroundBoard: bindActionCreators(changeBackgroundBoard, dispatch),
});

export default connect(null, mapDispatchToProps)(Background);