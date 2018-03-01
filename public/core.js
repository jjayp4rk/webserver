// var jayUsers = angular.module('jayUsers', []);

//   function mainController($scope, $http) {
//     $scope.formData = {};
//     $http.get('/api/users')
//       .success(function(data){
//         $scope.users = data;
//         console.log(data)
//       })
//       .error(function(data) {
//         console.log('Error: ' + data);
//       });

//     $scope.createUser = function() {
//       $http.post('/api/users', $scope.formData)
//         .success(function(data) {
//           $scope.formData = {};
//           $scope.users = data;
//           console.log(data);
//         })
//         .error(function(data) {
//           console.log('Error: ' + data);
//         });
//     };
//     $scope.deleteUser = function(id) {
//       $http.delete('/api/users' + id)
//         .success(function(data) {
//           $scope.users = data;
//           console.log(data);
//         })
//         .error(function(data) {
//           console.log('Error: ' + data);
//         });
//     };
//   }

$(function(){
  // Get function
  $.ajax({
    url: '/api/users',
    method: 'GET',
    contentType: 'application/json',
    success: function(response) {
      var tbodyEl = $('tbody');
      response.forEach(function(user) {
        tbodyEl.append('\
          <tr>\
            <td class="userName">' + user.userName + '</td>\
            <td class="firstName">' + user.firstName + '</td>\
            <td class="lastName">' + user.lastName + '</td>\
            <td>\
            <button class="delete-user" href="#" data-id=' + user._id + ' onClick="window.location.reload()">\
             Delete </button>\
            <td>\
          </tr>'
          );
      })
    }
  });
  // Post function (add to database)
  $('#test').submit(function(event) {
    var item = {
      userName:$('#userName').val(),
      firstName:$('#firstName').val(),
      lastName:$('#lastName').val()
    };
    $.ajax({
      url: '/api/users',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(item),
    });
    event.preventDefault();
  });
  // Delete function (remove from database)
  // function deleteRow(obj){
  //   var id = $(".delete-user").attr('data-id');
  //   var item = {
  //     userId:id
  //   }
  //   $.ajax({
  //     url: '/api/users/',
  //     method: 'DELETE',
  //     contentType: 'application/JSON',
  //     data: JSON.stringify(item)
  //   })
  // }
  $('tbody').on('click', "button.delete-user", function(event) {
    var id = $(event.target).closest(".delete-user").attr('data-id');
    var item = {
      userId:id
    }
    $.ajax({
      url: '/api/users/',
      method: 'DELETE',
      contentType: 'application/json',
      data: JSON.stringify(item),
      success: function() {
        console.log(item)
      }
    });

  });
});
