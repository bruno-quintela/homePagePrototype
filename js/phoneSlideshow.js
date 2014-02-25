/**
 * phoneSlideshow.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var phoneSlideshow = (function() {

	function init() {
		[].slice.call( document.querySelectorAll( '.ms-wrapper' ) ).forEach( function( el, i ) {
			var open = false;
			el.querySelector( 'button' ).addEventListener( 'click', changeView, false );
			function changeView() {
				if( open ) {
					classie.remove( el, 'ms-view-layers' );
				}
				else {
					classie.add( el, 'ms-view-layers' );
                    $( '.ms-label' ).click( function(){
                        if ( $(this).hasClass('ms-popup-layer'))
                        {
                            $(this).removeClass('ms-popup-layer');
                        }
                        else
                        {
                            $(this).addClass('ms-popup-layer');
                        }
                    });
				}
				open = !open;
			}
		} );
        
        
	}
    
    

	init();

})();