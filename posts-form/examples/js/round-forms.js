( function ( $ ) {

   // module config
   var config = {
       debug: false,
       openMenuClass: "open-menu",
       mouseOverClass: "over",
   };
   
   var dbg = function ( ) {
       if ( config.debug )
       {
           console.log.apply( console, arguments );
       }
   };
   
   var dbgGroupBegin = function ( label ) {
       if ( config.debug )
       {
           console.group( label );
       }
   };
   
   var dbgGroupEnd = function () {
       if ( config.debug )
       {
           console.groupEnd();
       }
   };
       
   $.fn.roundForms = function () {
       return this.each( function ( i, e ) {            
           if ( $(e).hasClass( "select" ) )
           {
               return $.fn.roundForms.select.bind( $(e) )();
           } else if ( $(e).hasClass( "input" ) )
           {
               return $.fn.roundForms.input.bind( $(e) )();
           } else if ( $(e).hasClass( "textarea" ) )
           {
               return $.fn.roundForms.textarea.bind( $(e) )();
           } else if ( $(e).hasClass( "upload" ) )
           {
               return $.fn.roundForms.upload.bind( $(e) )();
           } else {
               dbg( "Error no type for element: ", e, $(e).attr( "class" ) );
           }
       });
   };
   
   $.fn.roundForms.config = config;
   
   $.fn.roundForms.select = function () {
       dbgGroupBegin( "roundForms.select" );
       dbg( "Select: ", this );
       
       if ( !this.hasClass( "initialized" ) )
       {
           dbg( "initialize" );
           
           this.find( " > .block .icon, > .block .selection" ).on( "click", function ( e ) {
               dbgGroupBegin( "roundForms.select::" + e.type );
               dbg( "element: ", this );
               
               if ( !this.hasClass( "active" ) )
               {
                   $( ".field.select.active" ).removeClass( config.openMenuClass ).removeClass( "active" );
               }
               
               this.toggleClass( config.openMenuClass );
               this.toggleClass( "active" );
               
               dbgGroupEnd();
           }.bind( this ) );
           
           this.find( " > .block *" ).attr( "round-forms-element", "true" );
           
           this.find( ".menu .item" ).on( "click", function ( e ) {
               dbgGroupBegin( "roundForms.select::" + e.type );
               dbg( "element: ", $(this) );
               
               var root = $(this).closest( ".field.select" );
               
               dbg( "root: ", root );
               
               root.find( "input" ).val( $(this).attr( "data-value" ) );
               root.find( " > .block .selection" ).text( $(this).text() );
               
               root.addClass( "selected" );
               
               dbgGroupEnd();
           } );
           
           this.addClass( "initialized" );
       }
       
       dbgGroupEnd();
   };
   
   $.fn.roundForms.input = function () {
       dbgGroupBegin( "roundForms.input" );
       dbg( "Input: ", this );
       
       if ( !this.hasClass( "initialized" ) )
       {
           dbg( "initialize" );
           
           this.find( "input" ).on( "focus blur keyup", function ( e ) {
               dbgGroupBegin( "roundForms.input::" + e.type );
               dbg( "element: ", $(this) );
               
               var setShowPlaceholder = e.type == "focus" || $(this).val().length > 0 ? true : false;
               dbg( "setShowPlaceholder: ", setShowPlaceholder );
               
               var root = $(this).closest( ".field.input" );
               
               root.toggleClass( "active", setShowPlaceholder );
               root.toggleClass( "have-value", $(this).val().length > 0 );
               
               dbgGroupEnd();
           } );
           
           this.addClass( "initialized" );
       }
       
       dbgGroupEnd();
   };
   
   $.fn.roundForms.textarea = function () {
       dbgGroupBegin( "roundForms.textarea" );
       dbg( "Textarea: ", this );
       
       if ( !this.hasClass( "initialized" ) )
       {
           dbg( "initialize" );
           
           this.find( ".overflow > textarea" ).on( "focus blur keyup", function ( e ) {
               dbgGroupBegin( "roundForms.textarea::" + e.type );
               dbg( "element: ", this );
               
               var setShowPlaceholder = e.type == "focus" || $(this).val().length > 0 ? true : false;
               dbg( "setShowPlaceholder: ", setShowPlaceholder );
               
               var root = $(this).closest( ".field.textarea" );
               
               root.toggleClass( "active", setShowPlaceholder );
               root.toggleClass( "have-value", $(this).val().length > 0 );
               
               dbgGroupEnd();
           } );
           
           this.addClass( "initialized" );
       }
       
       dbgGroupEnd();
   };
   
   $.fn.roundForms.upload = function () {
       dbgGroupBegin( "roundForms.upload" );
       dbg( "Upload: ", this );
       
       if ( !this.hasClass( "initialized" ) )
       {
           dbg( "initialize" );
           
           this.on( "mouseover", function ( e ) {
               dbgGroupBegin( "roundForms.upload::" + e.type );
               dbg( "element: ", this );
               
               $(this).addClass( config.mouseOverClass );
               
               dbgGroupEnd();
           });
           
           this.on( "mouseout", function ( e ) {
               dbgGroupBegin( "roundForms.upload::" + e.type );
               dbg( "element: ", this );
               
               $(this).removeClass( config.mouseOverClass );
               
               dbgGroupEnd();
           });
           
           this.find( ".icon, .text" ).on( "click", function ( e ) {
               dbgGroupBegin( "roundForms.upload::" + e.type );
               dbg( "element: ", this, e );
               
               $(this).closest( ".field.upload" ).find( "input[type=file]" ).click();
               
               dbgGroupEnd();
           });
           
           this.addClass( "initialized" );
       }
       
       dbgGroupEnd();
   };
   
   // close all selects
   $( "body" ).click( function( e ) {
       if ( !e.target.hasAttribute( "round-forms-element" ) )
       {
           $( ".field.select." + config.openMenuClass ).removeClass( config.openMenuClass ).removeClass( "active" );
       }
   });
   
   $( ".field.select, .field.input, .field.textarea, .field.upload" ).roundForms();
  
}( jQuery ));