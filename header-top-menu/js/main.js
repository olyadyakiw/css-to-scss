$(function () {
	$('.header-top-menu__search').on('click', function(){
		$('.header-top-menu').addClass('close');
		$('.header-top-menu__search-wrapper').addClass('open');
	});
	$('.header-top-menu__search-close').on('click', function(){
		$('.header-top-menu').removeClass('close');
		$('.header-top-menu__search-wrapper').removeClass('open');
	});


	$('.header-top-menu__close, .header-top-menu__quest-close' ).on('click', function(){
		$('.header-top-menu').removeClass('close');
		$('.header-top-menu__search-wrapper').removeClass('open');
		$('.header-top-menu__search').removeClass('none');
		$('.header-top-menu__burger').removeClass('none');
		$('.header-top-menu__close').removeClass('block');
		$('.header-top-menu__quest').removeClass('open');
		$('.header-top-menu__bg').removeClass('open');
	});


	$('.header-top-menu__burger').on('click', function(){
		$('.header-top-menu__quest').addClass('open');
		$('.header-top-menu__bg').addClass('open');
		$('.header-top-menu__search').addClass('none');
		$('.header-top-menu__burger').addClass('none');
		$('.header-top-menu__close').addClass('block');
	});

	



	
	
	
	

	
});


// var topHead = {
// 	init: function () {
// 		 $( '.header-top-menu' ).on('transitionend webkitTransitionEnd oTransitionEnd', function ()  { 
// 			  if ( !$(this).hasClass( 'open' ) ) return;
			  
// 			  topHead.resizeBG();
// 		 });
		 
// 		 $( window ).resize( function() {
// 			  if ( !$( '.top-head-bg' ).hasClass( "open" ) ) return;
			  
// 			  topHead.resizeBG();
// 		 });
		 
// 		 $( "#search-form-top input[name=search]" ).autocomplete({
// 			  source: function( request, response ) {
// 					$.ajax({
// 						 url: "/ajax.php?auto-search&term="+encodeURIComponent(request.term),
// 						 dataType: "json",
// 						 success: function( data ) {
// 							  response( data );
// 						 }
// 					});
// 			  },
// 			  delay:100,
// 			  select: function( event, ui ) {
// 					setTimeout(function(){ $('#search-form-top').submit(); }, 1);
// 			  },
// 			  minLength: 2,
// 			  create: function() {
// 					$(this).data('ui-autocomplete')._renderItem = function( ul, item ) {
// 						 return $( "<li>" )
// 							  .data( "item.autocomplete", item )
// 							  .append( "<div class='autocomplete-search-item'><div class='autocomplete-search-item-logo' style='background-image:url(" + (item.img ? item.img : "" ) + ")'></div><div class='autocomplete-search-item-label'>" + item.label + "</div></div>" )
// 							  .appendTo( ul );
// 					};
// 			  }
// 		 });
// 	},
// 	resizeBG: function () {        
// 		 var height = $( '#top-head' ).height() + $( '.top-head-menu' ).height();
			  
// 		 $( '.top-head-bg' ).css({
// 			  'top':      height,
// 			  'height':   document.documentElement.scrollHeight - height,
// 		 }).addClass( 'open' );
// 	},
//   openSearch: function () {
// 	  $( '.header-top-menu' ).addClass( 'close' );
// 	  $( 'header-top-menu__search-wrapper' ).toggleClass( 'open' );
// 	  $( window ).scrollTop(0);
//   },
//   openMenu: function () {
// 	  $( '#top-head' ).addClass( 'close' );
// 	  $( '.top-head-menu' ).toggleClass( 'open' );
// 	  $( window ).scrollTop(0);
//   },
//   close: function () {
// 	  $( '#top-head' ).removeClass( 'close' );
// 	  $( '.top-head-search, .top-head-menu' ).removeClass( 'open' );
// 		 $( '.top-head-bg' ).removeClass( 'open' );
//   },
//   scrollTop: function ( top ) {
// 		 top = typeof( top ) != "undefined" ? parseInt( top ) : 0;
				 
// 		 var scrollProc = function ( e ) {
// 			  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
// 			  if ( scrollTop == top )
// 			  {
// 					$( window ).off( "scroll", scrollProc );
// 					setTimeout( function () {
// 						 $( '#top-head' ).removeClass( 'down up' );
// 					}, 500 );
// 			  }
// 		 };
		 
// 		 $( window ).on( "scroll", scrollProc );
// 		 $( window ).scrollTop( top );
//   }
// };

// fw.push( function () {
// 	topHead.init();
	
// 	var link = document.location.href;
// 	var hashName = link.lastIndexOf( "#get-" ) > -1 ? link.substr( link.lastIndexOf( "#get-" ) + 5 ) : false;
// 	var tags = hashName && document.querySelectorAll( "#" + hashName + ", a[name='" + hashName + "']" );
	
// 	if ( tags.length )
// 	{
// 		 var scrollOffset = $( tags[0] ).offset().top - $( "#top-head" ).height();
// 		 topHead.scrollTop( scrollOffset );
// 	}
// });

// function hasScrolled() {
//   var st = $( this ).scrollTop();
  
//   if( Math.abs( lastScrollTop - st ) <= delta )
// 	  return;
  
//   if ( st > lastScrollTop && st > navbarHeight )
//   {
// 	  $( '#top-head' ).removeClass( 'down').addClass( 'up' );
//   } else if ( st == 0 )
//   {
// 	  $( '#top-head ').removeClass( 'up down' );
//   } else {
// 	  if(st + $( window ).height() < $( document ).height()) {
// 		  $( '#top-head' ).removeClass( 'up' ).addClass( 'down' );
// 	  }
//   }
  
//   lastScrollTop = st;
// }

// var didScroll = false;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight;

// fw.push(function () {
//   navbarHeight = $('#top-head').outerHeight();

//   $(window).on("scroll", function(event) {
// 	  if ($('#top-head').css('position') == 'fixed') didScroll = true;
//   });

//   setInterval(function() {
// 	  if (didScroll) {
// 		  hasScrolled();
// 		  didScroll = false;
// 	  }
//   }, 250);
// });