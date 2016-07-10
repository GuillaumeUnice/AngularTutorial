var constants = require('../config/constants');
var utils = require('../config/utils');

exports.getInfo = function(req, res) {
		res.status(200);
		res.json({ status: constants.JSON_STATUS_SUCCESS,
			title: 'Data',
			message: 'Your data !',
			data: {}
		});
};