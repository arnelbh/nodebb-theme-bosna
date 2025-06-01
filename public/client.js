'use strict';

/*
	Hey there!

	This is the client file for your theme. If you need to do any client-side work in javascript,
	this is where it needs to go.

	You can listen for page changes by writing something like this:

	  $(window).on('action:ajaxify.end', function(ev, data) {
		var url = data.url;
		console.log('I am now at: ' + url);
	  });
*/

$(document).ready(function () {
	// Your code goes here
	hideBrandWrapper();
	// showTitleOnMobile();

	function hideBrandWrapper() {
		const brandDiv = $('[component="brand/wrapper"]');  
		const bottomBar = $('[component="bottombar"]');
		const divBrand = $('#idBrandFlex');
		const brandContainer = $('#idBrandContainer');

		function isMobilebarVisible() {
			return bottomBar.length > 0 && bottomBar.is(':visible');
		}

		if (config.theme.topicInfoInMobilebar && isMobilebarVisible()) {
			brandDiv.addClass('hidden'); // Hide brandDiv if mobile bar is visible
		} else {
			brandDiv.removeClass('hidden'); // Show brandDiv if mobile bar is not visible
			divBrand.removeClass('border-bottom');
		}

		if (
			config.theme.topicInfoInMobilebar &&
			isMobilebarVisible() &&
			divBrand.length > 0 &&
			divBrand.children('div').length < 2
		) {
			brandContainer.addClass('hidden'); // Hide brandDiv if mobile bar is visible
		} else {
			brandContainer.removeClass('hidden'); 
		}
	}

	// function showTitleOnMobile() {
	// 	const bottomBar = $('[component="bottombar"]');
	// 	const bottomNav = bottomBar.find('.bottombar-nav');
	// 	const bottomNavLeft = bottomNav.find('.bottombar-nav-left');
	// 	const bottomNavRight = bottomNav.find('.bottombar-nav-right');
	// 	const bottomNavTitle = bottomNav.find('#mobileTopicTitle');
	// 	let lastScrollTop = $(window).scrollTop();
	// 	let newPostsLoaded = false;

	// 	function isSearchVisible() {
	// 		return !!$('[component="bottombar"] [component="sidebar/search"] .search-dropdown.show').length;
	// 	}

	// 	function onWindowScroll() {
	// 		const st = $(window).scrollTop();

	// 		if (newPostsLoaded) {
	// 			newPostsLoaded = false;
	// 			lastScrollTop = st;
	// 			return;
	// 		}

	// 		if (st !== lastScrollTop && !navigator.scrollActive && !isSearchVisible()) {
	// 			const diff = Math.abs(st - lastScrollTop);
	// 			const scrolledDown = st > lastScrollTop;

	// 			if (diff > 10) {
	// 				if (scrolledDown) {
	// 					// bottomNav.addClass('hidden');
	// 					// bottomNavLeft.addClass('hidden');
	// 					bottomNavRight.addClass('hidden');
	// 					bottomNavTitle.removeClass('hidden');
	// 				} else {
	// 					// bottomNav.removeClass('hidden');
	// 					// bottomNavLeft.removeClass('hidden');
	// 					bottomNavRight.removeClass('hidden');
	// 					bottomNavTitle.addClass('hidden');
	// 				}
	// 			}
	// 		}
	// 		lastScrollTop = st;
	// 	}

	// 	$(window).on('scroll', onWindowScroll);
	// }

});
