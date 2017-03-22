import React from 'react';
import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';
import BorderRadius from './BorderRadius.js';
import SketchPicker from 'react-color';
// import SketchPicker from 'react-color').default;;

function getAppState() {
    return {
        showGrid: false,
        displayColorPicker: false,
        iconChecked: AppStore.getIdIconCheked()        
    };
}
var Outils = React.createClass({
    getInitialState: function () {
        return {
            displayGrid: false,
            displayColorPicker: false,
            iconChecked: AppStore.getIdIconCheked()        
        };
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    render: function(){
        return (
            <div className="outils">
                <div className="left">
                    <a onClick={ this.handleClick } className="color btn-green"><i className="color-icon"></i>Color</a>
                    { 
                        this.state.displayColorPicker ? 
                        <div className="popover">
                            <div className="cover" onClick={ this.handleClose }/>
                            <SketchPicker onChange={ this.handleChange }/>
                        </div> : null 
                    }
                    <button onClick={this.remove} className="delete"><i className="delete-icons"></i></button>    
                </div>
                <div className="right">
                    <i className="icons-radius"></i>
                    <BorderRadius />
                    <button onClick={this.grid} className="grid"><i className="lignes"></i></button>
                </div>
            </div>      
        );
    },
    _onChange: function() {
        this.setState(getAppState());
    },
    handleClick: function(){
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    },
    handleClose : function(){
        this.setState({ displayColorPicker: false })
    },
    handleChange: function(color){
        var idIconCheked = $('.board #'+this.state.iconChecked+' path');
        var c = color.rgb;
        idIconCheked.css('fill', 'rgba('+c.r+', '+c.g+', '+c.b+','+c.a+')');
    },
    grid: function(e){
        e.preventDefault();
        //var statGrid = !this.state.showGrid;


        this.setState({ displayGrid: !this.state.displayGrid })
        AppActions.showGrid(!this.state.displayGrid);
        console.log('t : '+this.state.displayGrid);
    },
    remove: function(e){
        e.preventDefault();
        var idIconCheked = this.state.iconChecked;
        $('.board #'+idIconCheked).parent('li').fadeOut(100);
    }
});


module.exports = Outils;
