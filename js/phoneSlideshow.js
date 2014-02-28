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

    var open = false;
    var defaultRotation = -40;
	function init() {
        
        $("#toggle").click(function(){
           changePerspective()
           open = !open;
        })
        
        $("#rotateRight").click(function(){
           rotatePerspective(90)
        })
        
        $("#rotateLeft").click(function(){
           rotatePerspective(-90)
        })
        
        function changePerspective()
        {
            if( !open ) {
                $(".ms-perspective").addClass('ms-view-layers');
            }
            else
            {
                $(".ms-perspective").removeClass('ms-view-layers');
                $(".ms-device").css('-webkit-transform','');
            }
        }
        
        function rotatePerspective(angleY)
        {
            defaultRotation += angleY;
            $(".ms-device").css('-webkit-transform','rotateY('+defaultRotation+'deg) rotateX(90deg) translateZ(-15px) translateZ(-97px)');
        }
        
		/*[].slice.call( document.querySelectorAll( '.ms-wrapper' ) ).forEach( function( el, i ) {
			var open = false;
			el.querySelector( 'button' ).addEventListener( 'click', changeView, false );
			function changeView() {
				if( open ) {
					classie.remove( el, 'ms-view-layers' );
				}
				else {
					classie.add( el, 'ms-view-layers' );
				}
				open = !open;
			}
		} );*/
        
        
	}
    
    

	init();

})();