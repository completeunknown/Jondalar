$(document).ready(function(){

/* Show jQuery is running 
$('h1').css({textDecoration: 'underline'}); */

$('#map').zoommap({
		// Width and Height of the Map
		
		width: '1120px',
		height: '630px',
			
		//Misc Settings
		blankImage: 'images/blank.gif',
		zoomDuration: 640,
		bulletWidthOffset: '-1px',
		bulletHeightOffset: '-1px',
		
		//ids and classes
		//zoomClass: 'zoomable',
		//popupSelector: 'div.popup',
		//popupCloseSelector: 'a.close',
				
		//Return to Parent Map Link
		showReturnLink: true,
		returnId: 'returnlink',
		returnText: 'back to world map',
		
		//Initial Region to be shown
		map: {
			id: 'global',
			image: 'images/global2.png',
			data: 'popups/global.html',
			maps: [
			{
				id: 'india',
				parent: 'global',
				image: 'images/india.png',
				data: 'popups/india.html',
				width: '141px',
				height: '70px',
				top: '295px',
				left: '712px'			
			},
			{
				id: 'europe',
				parent: 'global',
				image: 'images/europe_light.png',
				data: 'popups/europe.html',
				width: '176px',
				height: '80px',
				top: '180px',
				left: '508px'			
			},
			{
				id: 'amer',
				parent: 'global',
				image: 'images/amer_light.png',
				data: 'popups/amer.html',
				width: '136px',
				height: '65px',
				top: '235px',
				left: '220px'			
			}
			]
		}
	});
});
