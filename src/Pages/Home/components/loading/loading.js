import Modernizr from './modernizr.custom';
import PathLoader from './pathLoader';
import classie from './classie';



	var
		container = document.getElementById( 'ip-container' ),
		header = container.querySelector( 'header.ip-header' ),
		loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	function Loading() {
		var onEndInitialAnimation = function() {
			this.removeEventListener( animEndEventName, onEndInitialAnimation );
			startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		classie.add( container, 'loading' );
		container.addEventListener( animEndEventName, onEndInitialAnimation );
		
	}

	function startLoading() {
		// simulate loading something..
		var simulationFn = function(instance) {
			var progress = 0,
				interval = setInterval( function() {
					progress = Math.min( progress + Math.random() * 0.1, 1 );

					instance.setProgress( progress );

					// reached the end
					if( progress === 1 ) {
						classie.remove( container, 'loading' );
						classie.add( container, 'loaded' );
						clearInterval( interval );

						var onEndHeaderAnimation = function(ev) {
							if( ev.target !== header ) return;
							this.removeEventListener( animEndEventName, onEndHeaderAnimation );

							classie.add( document.body, 'layout-switch' );
							window.removeEventListener( 'scroll', noscroll );
						};

							header.addEventListener( animEndEventName, onEndHeaderAnimation );
						
					}
				}, 80 );
		};

		loader.setProgressFn( simulationFn );
	}
	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}

export default Loading;
