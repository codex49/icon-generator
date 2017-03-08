var Dispatcher 	 = require('../dispatcher/Dispatcher'),
	Constants    = require('../constants/Constants'),
	EventEmitter = require('events').EventEmitter,
	assign 		 = require('object-assign'),
	AppAPI 		 = require('../utils/appAPI'),

	CHANGE_EVENT = 'change',
	_etatGrid,
	_borderRaduis,
	_background,
	_iconChecked,
	_colorGradientTop,
	_colorGradientBottom,
	_canvas;

var AppStore = assign({}, EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function (callback) {
		this.removeListener('change', callback);
	},
	showGrid: function(etatGrid){ 
		_etatGrid = etatGrid; 
	},
	getStatGrid: function(){ 
		return _etatGrid; 
	},
	changeBorder: function(value){
		_borderRaduis = value;
	},
	getBorderRaduis: function(){
		return _borderRaduis;
	},
	uploadIcon: function(linkIcon){	
        var elem = '.upload-elment';
        AppAPI.upload(linkIcon, elem);	
	},
	uploadBackground: function(linkBackground){
        var elem = '.upload-bg';
        AppAPI.upload(linkBackground, elem);	
	},
	changeBackground: function(value){
		_background = value;
	},
	getBackground: function(){
		return _background;
	},
    iconChecked: function(value){
    	_iconChecked = value;
    },
    getIdIconCheked: function(){
    	return _iconChecked
    },
    changeColorGradientTop: function(value){
    	console.log('--'+value);
    	_colorGradientTop = value;
    	console.log('++'+value);
    },
    getColorGradientTop: function(){
    	return _colorGradientTop;
    },
    changeColorGradientBottom: function(value){
    	_colorGradientBottom = value;
    },
    getColorGradientBottom: function(){
    	return _colorGradientBottom;
    },
    getIconToDownload: function(value){
    	_canvas = value;
    },
    getCanvas: function(){
    	return _canvas;
    }
});

Dispatcher.register(function (payload) {
	var action = payload.action;

	switch (action.actionType) {
		case Constants.SHOW_GRID:
			AppStore.showGrid(action.etatGrid);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.CHANGE_BORDER:
			AppStore.changeBorder(action.borderRaduis);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.UPLOAD_ICON:
			AppStore.uploadIcon(action.linkIcon);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.UPLOAD_BACKGROUND:
			AppStore.uploadBackground(action.linkBackground);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.CHANGE_BACKGROUND:
			AppStore.changeBackground(action.changeBackground);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.ICON_CHEKED:
			AppStore.iconChecked(action.idIconCkeked);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.CHANGE_COLOR_GRADIENT_TOP:
			//AppStore.changeColorGradientTop(action.colorGradientTop);
			var x = 2;
			AppStore.changeColorGradientTop(x);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.GET_ICON_TO_DOWNLOAD:
			AppStore.getIconToDownload(action.canvas);
			AppStore.emit(CHANGE_EVENT);
			break;
		case 'hello':
			console.log(action.api);
			AppStore.emit(CHANGE_EVENT);
			break;
		/*case Constants.CHANGE_COLOR_GRADIENT_BOTTOM:
			AppStore.changeColorGradientBottom(action.colorGradientBottom);
			AppStore.emit(CHANGE_EVENT);
			break;*/
	}

	return true;
});

module.exports = AppStore;