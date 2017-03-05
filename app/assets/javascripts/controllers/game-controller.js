(function(ng) {
  ng.module('Simon').controller('GameController', ['$scope', '$q', function($scope, $q) {

    let green = $('.topright').data('id');
    let red = $('.topleft').data('id');
    let blue = $('.bottomleft').data('id');
    let yellow = $('.bottomright').data('id');
    // let timer = 20;
    // let timerEnd = 0;
    let turnDisplay = document.querySelector('.centershape');
    let centerDisplay = document.createElement('span');
    let start = document.querySelector('.start-game');
    let patternArray = [];
    let userArr = [];
    let num = 0;
    let points = 0;
    let score = 0;
    let doodoo = 'katie';
    const slices = [red, green, blue, yellow];

    start.onclick = function() {
      $scope.gamePattern();
    };

    $('.slice').on('mousedown mouseup', function() {
      $(this).toggleClass('select');
    });

    $('.pad').on('click', function() {
      console.log('in');
      console.log($(this).data('id'));
      userArr.push($(this).data('id'));
      console.log(userArr);
      $scope.checkPattern();
    });

    $scope.checkPattern = function() {
      if (userArr[0]) {
        if (patternArray[0] === userArr[0]) {
          // console.log('in');
        } else {
          $('.center-display').html(`you lose ${currentUser.name}, lol`);
        }
      }
      if (userArr[1]) {
        if (patternArray[1] === userArr[1]) {
          // console.log('in1');
        } else {
          $('.center-display').html(`you lose ${currentUser.name}, lol`);
          let score = points + 50;
          $scope.addScore(score);
        }
      }

      if (userArr[2]) {
        if (patternArray[2] === userArr[2]) {
          // console.log('in2');
        } else {
          $('.center-display').html(`you lose ${currentUser.name}, lol`);
          let score = points + 75;
          $scope.addScore(score);
        }
      }
      if (userArr[3]) {
        if (patternArray[3] === userArr[3]) {
          // console.log('in3');
          $('.center-display').html(`you win ${currentUser.name}, you asshole`);
          let score = points + 100;
          $scope.addScore(score);
        } else {
          $('.center-display').html(`you lose ${currentUser.name}, lol`);

        }
      }


    };
    $scope.gamePattern = function() {
      while (patternArray.length < slices.length) {
        let rand = slices[Math.floor(Math.random() * slices.length)];
        patternArray.push(rand);
      }
      console.log(patternArray);
      setTimeout(function() {
        $scope.lightGame();
      }, 1000);
    };

    $scope.lightGame = function() {
      for (let i = 0; i < patternArray.length; i++) {
        setTimeout(function(i) {
          setTimeout(function() {
            console.log(patternArray[i]);
            $(`.slice[data-id=${patternArray[i]}]`).toggleClass('select');
          }, 1000);
          $(`.slice[data-id=${patternArray[i]}]`).toggleClass('select');
          num++;
          console.log('nummmmmmm', num);
          if (num == patternArray.length) {
            setTimeout(function() {
              $scope.startGame();

            }, 1500);
          }
        }, i * 1000, i);
      }
    };

    $scope.startGame = function() {
      $('.slice').addClass('pad');
      centerDisplay.className = 'center-display';
      centerDisplay.innerHTML = 'play!';
      turnDisplay.appendChild(centerDisplay);
    };

    $scope.addScore = function(score) {
      console.log('scores', score);
    };

  }]);
})(angular);
