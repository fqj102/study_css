$(function () {
    var $loginForm = $('#loginForm');
    var $joinForm = $('#joinForm');
    var $userWrap = $('#userWrap');
    var $contentWrap = $("#contentWrap");

    $("#loginBtn").click(function(e){
        e.preventDefault();
        $loginForm.show();
        $joinForm.hide();
    });

    $("#joinBtn").click(function(e){
       e.preventDefault();
       $joinForm.show();
       $loginForm.hide();
    });

    $("#logoutBtn").click(function (e) {
        e.preventDefault();
        alert("로그아웃되었습니다.");
        $userWrap.show();
        $contentWrap.hide();
    });
})
