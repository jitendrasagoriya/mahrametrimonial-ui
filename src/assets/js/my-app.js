"use strict";
(function() {
/*===============================================*/
/* APP INIT		 						         */
/*===============================================*/
var myApp = new Framework7({
	material: true,
	swipePanel: 'left',
	cache: false,
	cacheDuration: 0,
	modalTitle: 'Weddings',
	showBarsOnPageScrollEnd: false,
	upscroller: {
		text: 'Back to top'
	}
});
/*===============================================*/
/* EXPORT SELECTORS ENGINE		 			     */
/*===============================================*/
var $$ = Dom7;
/*===============================================*/
/* ADD VIEW		 			     				 */
/*===============================================*/
var mainView = myApp.addView('.view-main', {
	dynamicNavbar: true
});



$( ".close-panel" ).click(function( event ) {
	alert('maderchod');
});
 
})();