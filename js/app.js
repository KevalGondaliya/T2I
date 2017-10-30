// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [])

  .controller("myctrl", function ($scope,$http) {

    CKEDITOR.editorConfig = function (config) {
      config.language = 'es';
      config.uiColor = '#ffffff';
      config.height = 300;
      config.toolbarCanCollapse = true;
    };
    $("#image").hide();
    $(".in-mobile").hide();
    $("#createpreview").hide();
    $scope.editor = CKEDITOR.replace('edit');

    $(".content").draggable({containment: "parent"});


    $scope.btnSubmit = function () {
      // console.log('querySelector true');

      $('#div').show();

      $('.preview_icon').hide();
      $('.content').html($scope.editor.getData());

      var image = $('#img')[0];
      var node = $('#div')[0];

      domtoimage.toPng(node).then(function (pngDataUrl) {

        $http({'method':'POST','data':{data:pngDataUrl},url:'http://localhost/d2idesign/convertimage.php'}).then(function(res){
            console.log(res.data);
            var furl = 'https://www.facebook.com/dialog/feed?app_id=667650703443105&link=http://localhost/d2idesign/share.php?img=' + res.data;
            $('#fb-root').attr('href',furl);
            
            var turl = 'https://twitter.com/intent/tweet?url=http://localhost/d2idesign/share.php?img=' + res.data;
            $('#twitter').attr('href',turl);

            // var Iurl = 'http://www.instagram.com/share?url=http://devs.infizer.com/d2i/share.php?img=' + res.data;
            // $('#instagram').attr('href',Iurl);

             var Purl = 'https://pinterest.com/pin/create/bookmarklet/?media=http://localhost/d2idesign/' + res.data;
            $('#pinterest').attr('href',Purl);

            $('.download').attr('href','http://localhost/d2idesign/' + res.data);
        });
        $scope.imagePath = pngDataUrl;
        $('#img').attr('src', pngDataUrl);
        $("#img").show();

      }, function (error) {
        console.log(error);
      });

      $("#preview").hide();

      $(".in-mobile").show();
    }
    // $scope.data = Math.random();
    
    $scope.shareVoteVia = function (network) {
      var msg = "I've voted, have you? Vote now for your favorite singing superstar";
      var title = "BIG Golden Voice Junior";
      var shareURL = "https://goo.gl/q8JJwz";
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });

      if (network == "twitter") {
        window.plugins.socialsharing.shareViaTwitter(msg, $scope.imagePath, shareURL, function () {
          $ionicLoading.hide();
        }, function (error) {
          plugins.socialsharing.canShareVia('twitter', msg, title, null, shareURL,
            function (success) {
              $ionicLoading.hide();
            },
            function (error) {
              $ionicLoading.hide();
              window.open('https://twitter.com/intent/tweet?text=' + msg + ' ' + shareURL, '_system', 'location=no');
            });
          $ionicLoading.hide();
        })
      } else if (network == "facebook") {
        window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(msg, $scope.imagePath, shareURL, "Share via facebook", function () {
            $ionicLoading.hide();
          },
          function (error) {
            $ionicLoading.hide();
            window.open('https://www.facebook.com/dialog/feed?app_id=1743274525953316&display=popup&redirect_uri=' + shareURL, '_system', 'location=no');
          })
      }
    };

  })







