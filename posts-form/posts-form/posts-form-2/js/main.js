$(function () {

   var input = $('.posts-form__input-name');

   input.on('keyup', function () {
      var inp = $('.posts-form__input-name').val();
      if (inp) {
         $('.posts-form__check-name').addClass('active');
         $('.posts-form__check-name_ok').addClass('active');
      } else {
         $('.posts-form__check-name').removeClass('active');
         $('.posts-form__check-name_ok').removeClass('active');
      }
   });

   var input2 = $('.posts-form__input-subject');

   input2.on('keyup', function () {
      var inp = $('.posts-form__input-subject').val();
      if (inp) {
         $('.posts-form__check-subject').addClass('active');
         $('.posts-form__check-subject_ok').addClass('active');
      } else {
         $('.posts-form__check-subject').removeClass('active');
         $('.posts-form__check-subject_ok').removeClass('active');
      }
   });

   $(".posts-form__select, .posts-form__categories-btn").on('change', function () {
      var select = $('.posts-form__select').prop("selected", "selected");
      if (select != "selected") {
         $('.posts-form__check-select').addClass('active');
         $('.posts-form__check-select_ok').addClass('active');
      } else {
         $('.posts-form__check-select').removeClass('active');
         $('.posts-form__check-select_ok').removeClass('active');
      }
   });

   $(".posts-form__expanded-view").click(function () {
      $(".posts-form__categories").css("display", "block");
      $(".posts-form__categories-overlay").css("display", "block");
   });
   $(".posts-form__categories-close, .posts-form__categories-overlay, input").click(function () {
      $(".posts-form__categories").css("display", "none");
      $(".posts-form__categories-overlay").css("display", "none");
   });

   $(".posts-form__categories-btn").on("change", function () {
      $(".posts-form__select-categories").val($(this).val());
   });

   

});

console.log(1);$(function () {

   var input = $('.posts-form__input-name');

   input.on('keyup', function () {
      var inp = $('.posts-form__input-name').val();
      if (inp) {
         $('.posts-form__check-name').addClass('active');
         $('.posts-form__check-name_ok').addClass('active');
      } else {
         $('.posts-form__check-name').removeClass('active');
         $('.posts-form__check-name_ok').removeClass('active');
      }
   });

   var input2 = $('.posts-form__input-subject');

   input2.on('keyup', function () {
      var inp = $('.posts-form__input-subject').val();
      if (inp) {
         $('.posts-form__check-subject').addClass('active');
         $('.posts-form__check-subject_ok').addClass('active');
      } else {
         $('.posts-form__check-subject').removeClass('active');
         $('.posts-form__check-subject_ok').removeClass('active');
      }
   });

   $(".posts-form__select, .posts-form__categories-btn").on('change', function () {
      var select = $('.posts-form__select').prop("selected", "selected");
      if (select != "selected") {
         $('.posts-form__check-select').addClass('active');
         $('.posts-form__check-select_ok').addClass('active');
      } else {
         $('.posts-form__check-select').removeClass('active');
         $('.posts-form__check-select_ok').removeClass('active');
      }
   });

   $(".posts-form__expanded-view").click(function () {
      $(".posts-form__categories").css("display", "block");
      $(".posts-form__categories-overlay").css("display", "block");
   });
   $(".posts-form__categories-close, .posts-form__categories-overlay, input").click(function () {
      $(".posts-form__categories").css("display", "none");
      $(".posts-form__categories-overlay").css("display", "none");
   });

   $(".posts-form__categories-btn").on("change", function () {
      $(".posts-form__select-categories").val($(this).val());
   });

   

});
