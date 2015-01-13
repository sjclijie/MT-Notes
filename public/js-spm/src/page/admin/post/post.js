/**
 * Created by thonatos on 15/1/12.
 */

/********************************************************
 * STATIC
 ********************************************************/

var post = angular.module('ASS.post', ['ui.router']);

/********************************************************
 * CONTROLLER
 ********************************************************/

post.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('post', {
            url: '/post',
            views: {
                '': {
                    templateUrl: '/public/js-spm/src/page/admin/post/layout.html',
                    controller: 'postCtrl'
                },
                'side@post': {
                    templateUrl: '/public/js-spm/src/page/admin/post/post.side.html'
                },
                'main@post': {
                    templateUrl: '/public/js-spm/src/page/admin/post/post.main.html',
                    controller: 'postMainCtrl'
                }
            }
        })
        .state('post.list', {
            url: '/list',
            views: {
                'main@post': {
                    templateUrl: '/public/js-spm/src/page/admin/post/post.list.html',
                    controller: 'postListCtrl'
                }
            }
        })
        .state('post.add', {
            url: '/add',
            views: {
                'main@post': {
                    templateUrl: '/public/js-spm/src/page/admin/post/post.add.html',
                    controller: 'postAddCtrl'
                }
            }
        });
}]);

post.controller('postCtrl', ['$scope', function ($scope) {

    $scope.menuList = [
        {name: 'Main', url: 'post'},
        {name: 'List Post', url: 'post.list'},
        {name: 'Add Post', url: 'post.add'}
    ];
}]);

post.controller('postMainCtrl', ['$scope', 'postService', function ($scope, postService) {

    $scope.title = 'Post.Main';

}]);

post.controller('postListCtrl', ['$scope', 'postService', function ($scope, postService) {

    $scope.title = 'Post.List';

    var _currentPage = 1;

    render();

    $scope.prevPage = function () {
        if (_currentPage > 1) {
            _currentPage--;
            render();
        }
    };

    $scope.nextPage = function () {
        if ($scope.pageCount > _currentPage) {
            _currentPage++;
            render();
        }
    };

    $scope.del = function (pid) {
        console.log(pid);
        postService.del(pid).then(function (response) {
            console.log(response);
        })
    };

    function render() {

        postService.getAll(_currentPage).then(function (response) {

            $scope.post = response.posts;
            $scope.pageCount = response.pageCount;

            if ($scope.pageCount > _currentPage) {
                $scope.Next = true;
            } else {
                $scope.Next = false;
            }

            if (_currentPage > 1) {
                $scope.Prev = true;
            } else {
                $scope.Prev = false;
            }

            console.log(response);

        });
    }

}]);

post.controller('postAddCtrl', ['$scope', 'postService', function ($scope, postService) {

    $scope.title = 'Post.Add';


    $scope.categories = [
        {id: 1, name: 'Default'},
        {id: 2, name: 'Document'}];

    $scope.post = {};
    $scope.post.category = $scope.categories[0];


    $scope.submitPostForm = function (Valid) {
        if (Valid) {

            console.log($scope.post);
            postService.add($scope.post).then(function (response) {
                console.log(response);

                alert('success');
                $scope.post = {};
            });
        } else {
            alert('you need complete the form');
        }
    };

}]);


module.exports = post;