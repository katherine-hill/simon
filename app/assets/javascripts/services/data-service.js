(function(ng, currentUser) {
  ng.module('Simon').service('DataService', ['$http', function($http) {
    function getUsers(url) {
      return $http({
        method: 'GET',
        url: url
      });
    }

    function postScores(points) {
      return $http({
        method: 'POST',
        url: `/scores.json`,
        data: {
          score: {
            user_id: currentUser.id,
            points: points
          }
        }
      });
    }

    function patchBio(text) {
      return $http({
        method: 'PATCH',
        url: `/users/${currentUser.id}.json`,
        data: {
          user: {
            about: text
          }
        }
      });
    }


    function deleteStuff() {
      return $http({
        method: 'DELETE',
        url: `/users/${currentUser.id}.json`,
      });
    }

    return {
      get: getUsers,
      post: postScores,
      delete: deleteStuff,
      patch: patchBio
    };
  }]);
})(angular, window.currentUser);
