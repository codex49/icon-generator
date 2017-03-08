var Dispatcher 	 = require('../dispatcher/Dispatcher'),
	Constants    = require('../constants/Constants'),
	EventEmitter = require('events').EventEmitter,
	assign 		 = require('object-assign'),
	AppAPI 		 = require('../utils/appAPI'),

	CHANGE_EVENT = 'change',
	_items 		 = [],
	_selected 	 = '';

var DownloadStore = assign({}, EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function (callback) {
		this.removeListener('change', callback);
	}
});

Dispatcher.register(function (payload) {
	var action = payload.action;

	switch (action.actionType) {

	}

	return true;
});

module.exports = DownloadStore;