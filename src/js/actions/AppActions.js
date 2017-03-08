var Dispatcher = require('../dispatcher/Dispatcher'),
	Constants  = require('../constants/Constants');

var AppActions = {
	showGrid: function(etat) {
	    Dispatcher.handleViewAction({
	      actionType: Constants.SHOW_GRID,
	      etatGrid: etat
	    });
  	},
  	changeBorder: function(value){
	    Dispatcher.handleViewAction({
	      actionType: Constants.CHANGE_BORDER,
	      borderRaduis: value
	    });
  	},
  	uploadIcon: function(value){
  		Dispatcher.handleViewAction({
	      actionType: Constants.UPLOAD_ICON,
	      linkIcon: value
	    });
  	},
  	uploadBackground: function(value){
  		Dispatcher.handleViewAction({
	      actionType: Constants.UPLOAD_BACKGROUND,
	      linkBackground: value
	    });
  	},
  	changeBackground: function(value){
  		Dispatcher.handleViewAction({
	      actionType: Constants.CHANGE_BACKGROUND,
	      changeBackground: value
	    });
  	},
  	iconChecked: function(id){
  		Dispatcher.handleViewAction({
	      actionType: Constants.ICON_CHEKED,
	      idIconCkeked: id
	    });
  	},
  	getIconToDownload: function(value){
  		Dispatcher.handleViewAction({
	      actionType: Constants.GET_ICON_TO_DOWNLOAD,
	      canvas: value
	    });
  	},
  	changeColorGradientTop: function(value){
  		Dispatcher.handleViewAction({
	      actionType: Constants.CHANGE_COLOR_GRADIENT_TOP,
	      colorGradientTop: value
	    });
  	},
  	/*changeColorGradientBottom: function(value){
  		Dispatcher.handleViewAction({
	      actionType: Constants.CHANGE_COLOR_GRADIENT_BOTTOM,
	      colorGradientBottom: value
	    });
  	}*/
}

module.exports = AppActions;