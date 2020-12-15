$(function () {

   var input = $('.default-forms__input-name');

   input.on('keyup', function () {
      var inp = $('.default-forms__input-name').val();
      if (inp) {
         $('.default-forms__check-name').addClass('active');
         $('.default-forms__check-name_ok').addClass('active');
      } else {
         $('.default-forms__check-name').removeClass('active');
         $('.default-forms__check-name_ok').removeClass('active');
      }
   });

   var input2 = $('.default-forms__input-subject');

   input2.on('keyup', function () {
      var inp = $('.default-forms__input-subject').val();
      if (inp) {
         $('.default-forms__check-subject').addClass('active');
         $('.default-forms__check-subject_ok').addClass('active');
      } else {
         $('.default-forms__check-subject').removeClass('active');
         $('.default-forms__check-subject_ok').removeClass('active');
      }
   });

   $(".default-forms__select, .default-forms__categories-btn").on('change', function () {
      var select = $('.default-forms__select').prop("selected", "selected");
      if (select != "selected") {
         $('.default-forms__check-select').addClass('active');
         $('.default-forms__check-select_ok').addClass('active');
      } else {
         $('.default-forms__check-select').removeClass('active');
         $('.default-forms__check-select_ok').removeClass('active');
      }
   });

   $(".default-forms__expanded-view").click(function () {
      $(".default-forms__categories").css("display", "block");
      $(".default-forms__categories-overlay").css("display", "block");
   });
   $(".default-forms__categories-close, .default-forms__categories-overlay, input").click(function () {
      $(".default-forms__categories").css("display", "none");
      $(".default-forms__categories-overlay").css("display", "none");
   });

   $(".default-forms__categories-btn").on("change", function () {
      $(".default-forms__select-categories").val($(this).val());
   });

   

});
