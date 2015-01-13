/**
 * Created by thonatos on 14/12/15.
 */

var BASE_URL = '/users/admin/';

var init = function () {

    // SET BASE_TAG
    var util = require('../utils/common');
    util.addBaseTag(BASE_URL);

    // SET ANGULAR
    var AngularSeedSpm = angular.module('ASS', [
        'ui.router',
        'ASS.post',
        'ASS.service'
    ]);

    var post = require("./admin/post/post");
    var service = require('./admin/components/services/service');

    AngularSeedSpm.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/post');
    }]);

    angular.bootstrap(document, ['ASS']);
};

exports.init = init;
