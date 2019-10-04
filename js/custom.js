(function($) {
	
	
	
	//Cache jQuery Selector
	var $window		     	= $(window),
		$carousel	     	= $('.work-carousel'),   			// 2.  Bootstrap slider pause time
		$dropdown	     	= $('.dropdown'),				    // 3.  dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
		$header		     	= $('#header_bottom'),				// 4.  Update Header Style + Scroll to Top
		$our_class	     	= $('.our_classes'),		        // 8.  Our Class Carousel
		$our_trainer	 	= $('.our_trainers'),		        // 8.  Our Trainer Carousel
		$our_product	 	= $('.our_products'),		        // 8.  Our Product Carousel
		$our_class_second 	= $('.our_class-2'),		        // 8.  Our Class Second Carousel
		$our_trainer_second = $('.our_trainer-2'),		        // 8.  Our Trainer Second Carousel
		$single_class		= $('.class_detail'),		        // 8.  Single Class Carousel
		$related_product	= $('.related_products'),		    // 8.  Related Products Carousel
		$client_feedback 	= $('.our_client'),	        		// 9.  Client-Feedback Carousel Slider
		$srv_slide	     	= $('.service-slider'),				// 10. Single service Slider
		$recent_slider	 	= $('.recent-product-slider'),		// 11. Testimonials Carousel in sidebar small
		$single_pro_imge 	= $('.single-product-slider'),		// 12. Single Product image Slider Unigreen
		//$projectnav	     = $('.project-thumbnail'),			// 13. Single Project slider carosure nav image slider
		$projectimg	     	= $('.project-images'),				// 5.  Single project slider click + Show large image in top box
		$brand		     	= $('.partner-slider'),				// 13. Our Partner Logos Slider Auto
		$contact	     	= $('#contact-form')				// 22. Contact Form Validation
	


	/* Table of jQuery settings list
		
		1. Preloader For Hide loader
		2. Bootstrap slider pause time
		3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
		4. Update Header Style + Scroll to Top
		5. Single project slider click + Show large image in top box
		6. Submenu Dropdown Toggle
		7. Revolution Slider
		8. Our Team Carousel
		9. Testimonials Carousel Slider Home
		10. Single service Slider
		11. Testimonials Carousel in sidebar small
		12. Project image slider carosure nav image slide
		13. Our Partner Logos Slider Auto
		14. Use for Accordion Box
		15. Fact Counter For Achivement Counting
		16. LightBox / Fancybox
		17. Sortable Masonary with Filters
		18. Gallery With Filters List
		19. Date Picker
		20. Scroll to a Specific Div
		21. Click Search Icon and Open Search Field
		22. Contact Form Validation
		23. Elements Animation
		24. When document is Scrollig, do
		25. When document is loading, do
		26. Youtube and Vimeo video popup control
	
	*/
	
	
	// 1. Preloader For Hide loader  Unigreen
	function handlePreloader() {
		if($('.theme-loader').length){
			$('.theme-loader').delay(500).fadeOut(500);
			$('body').removeClass('page-load');
		}
	}
	
	
	// 2. Bootstrap slider pause time
	$('.carousel').carousel({
	  interval: 6000,  // Slider Pause time
	  pause: "hover"
	});
	
	
	// 3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
	
	$('#bs-example-navbar-collapse-1').each(function() {
		$dropdown.on('click', function(){
			if($window.width() < 992){
				if($(this).parent('.dropdown').hasClass('visible')){
					$(this).parent('.dropdown').children('.dropdown-menu').first().stop(true, true).slideUp(300);
					$(this).parent('.dropdown').removeClass('visible');
				}
				else{
					$(this).parent('.dropdown').children('.dropdown-menu').stop(true, true).slideDown(300);
					$(this).parent('.dropdown').addClass('visible');
				}
			}
		});
		
		$window.on('resize', function(){
			if($window.width() > 991){
				$('.dropdown-menu').removeAttr('style');
				$('.dropdown ').removeClass('visible');
			}
		});
		
	});
		
	
	// 4. Update Header Style + Scroll to Top Unifit
	function headerStyle() {
		if($header.length){
			var windowpos = $window.scrollTop();
			if (windowpos >= 200) {
				$header.addClass('fixed-header');
			} else {
				$header.removeClass('fixed-header');
			}
		}
	}
	
	// 5. Click Search Icon and Open Search Field	
	var $srcicon = $('.hvr-src a'),
		$srcfield = $('#search');
	$srcicon.on('click', function(event){
		event.preventDefault();
		$srcfield.addClass('visible');
		event.stopPropagation();
	});
	
	$('.src-close').on('click', function(){
		$srcfield.removeClass('visible');
	});
	
	$srcfield.on('click', function(event){
		event.stopPropagation();
	});
	
	$window.on('click', function(e){
		$srcfield.removeClass('visible');
	});
	
	//4. Auto active class adding with navigation
	$window.on('load', function(){
		var current = location.pathname;
		var $path = current.substring(current.lastIndexOf('http://unicoderbd.com/') + 1);
		$('.navbar-nav li a').each(function(e){
			var $this = $(this);
			// if the current path is like this link, make it active
			if($path == $this.attr('href')){
				$this.parent('li').addClass('active');
			}
			else if($path == ''){
				$('.navbar-nav li.first').addClass('active');
			}
		})
	})
	
	// 6. Submenu Dropdown Toggle
	if($('.main-menu li.dropdown ul').length){
		$('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	
	
	// 7. Revolution Slider
	if($('.revolution-slider .tp-banner').length){

		jQuery('.revolution-slider .tp-banner').show().revolution({
		  
		  delay:10000,
		  startwidth:1200,
		  startheight:720,
		  hideThumbs:600,
	
		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,
	
		  navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview4",
	
		  touchenabled:"on",
		  onHoverStop:"off",
	
		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,
	
		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
	
		  keyboardNavigation:"off",
	
		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:20,
	
		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"center",
		  soloArrowLeftHOffset:20,
		  soloArrowLeftVOffset:0,
	
		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"center",
		  soloArrowRightHOffset:20,
		  soloArrowRightVOffset:0,
	
		  shadow:0,
		  fullWidth:"on",
		  fullScreen:"off",
	
		  spinner:"spinner4",
	
		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,
	
		  shuffle:"off",
	
		  autoHeight:"off",
		  forceFullWidth:"on",
	
		  hideThumbsOnMobile:"on",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"on",
		  hideThumbsUnderResolution:0,
	
		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"",
		  fullScreenOffsetContainer: ""
	  });

		
	}


	
	// 8. Our Class Carousel Unigreen
	if ($our_class.length) {
		$our_class.owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots: false,
			autoplayHoverPause:false,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	// 9. Our Trainer Carousel Unigreen
	if ($our_trainer.length) {
		$our_trainer.owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots: false,
			autoplayHoverPause:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	// 10. Our Product Carousel Unigreen
	if ($our_product.length) {
		$our_product.owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots: false,
			autoplayHoverPause:false,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	// 11. Our Product Carousel Unigreen
	if ($our_class_second.length) {
		$our_class_second.owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots: false,
			autoplayHoverPause:false,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	// 12. Our Product Carousel Unigreen
	if ($our_trainer_second.length) {
		$our_trainer_second.owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots: false,
			autoplayHoverPause:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	// 13. Our Product Carousel Unigreen
	if ($single_class.length) {
		$single_class.owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots: true,
			autoplayHoverPause:false,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				}
			}
		});    		
	}
	// 14. Our Product Carousel Unigreen
	if ($related_product.length) {
		$related_product.owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots: true,
			autoplayHoverPause:false,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	
	// 15. Client Feedback coursul Unigreen
	if ($client_feedback.length) {
		$client_feedback.owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots: false,
			autoplayHoverPause:true,
			autoplay: true,
			smartSpeed: 700,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	
	// 10. Single Service Slider Unigreen
	if ($srv_slide.length) {
		$srv_slide.owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			dots: true,
			autoplayHoverPause:false,
			autoplay: true,
			smartSpeed: 700,
			animateOut: 'slideOutUp',
  			animateIn: 'slideInUp',
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	// 11. Recent Product Slider Unigreen
	if ($recent_slider.length) {
		$recent_slider.owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			dots: false,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			autoplayHoverPause:false,
			autoplay: false,
			smartSpeed: 700,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	// 12. Single Product image Slider Unigreen
	if ($single_pro_imge.length) {
		$single_pro_imge.owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			dots: false,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			autoplayHoverPause:false,
			autoplay: false,
			smartSpeed: 700,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	
	// 13. Single Portfolio slider carosure nav image slider
	//if ($projectnav.length) {
//		$projectnav.owlCarousel({
//			loop:false,
//			margin:20,
//			nav:false,
//			dots: false,
//			autoplayHoverPause:false,
//			autoplay: true,
//			smartSpeed: 400,
//			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
//			responsive:{
//				0:{
//					items:4
//				},
//				600:{
//					items:4
//				},
//				760:{
//					items:4
//				},
//				1024:{
//					items:4
//				},
//				1100:{
//					items:4
//				}
//			}
//		});    		
//	}
	
	// Single project slider click + Show large image in top box
	$projectimg.each(function() {
		$(this).on('click','.items a',function(event) {
			event.preventDefault();
			$(this).parents('.project-images').find(".items a").removeClass('onlive');
			$(this).addClass('onlive');
			$(this).parents('.project-images').find(".slide-project img").attr("src", $(this).attr("href"));
		});
	});
	
	// 13. Our Partner Logos Slider Auto
	if ($brand.length) {
		$brand.owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots: false,
			smartSpeed: 500,
			autoplay: 4000,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}

	
	// 15. Use for Accordion Box
	if($('.according_details').length){
		$('.according_title').on('click', function() {
			
		
			if($(this).hasClass('active')){
				$(this).addClass('active');			
			}
			
			//if ($(this).next('.according_details').is(':visible')){
//				$(this).removeClass('active');
//			}
			else{
				$('.according_title').removeClass('active');
				$('.according_details').slideUp(300);
				$(this).addClass('active');
				$(this).next('.according_details').slideDown(300);	
			}
		});	
	}
	
	
	
	// 16. Fact Counter For Achivement Counting  Uniland
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .count.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-num").attr("data-stop"),
					r = parseInt($t.find(".count-num").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-num").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-num").text(this.countNum);
						}
					});
				}
				
				//set skill building height


					var size = $(this).children('.progress-bar').attr('aria-valuenow');
					$(this).children('.progress-bar').css('width', size+'%');

				
			});
		}
	}
	
	
	// 8. Event time counter settings
	  $('[data-countdown]').each(function() {
		var $this = $(this),
			finalDate = $(this).data('countdown');

		$this.countdown(finalDate, function(event) {
		  $this.html(event.strftime('<span>%D<br><i>Days</i></span> <span>%H<br><i>Hour</i></span> <span>%M<br><i>Min</i></span> <span>%S<br><i>Sec</i></span>'));
		});
	  });
	
	
	// 16. LightBox / Fancybox
	if($('.photo_gallery a').length) {
		$('.photo_gallery a').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	
	
	// 17. Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.sortable-masonry .filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 1 
				 },
				animationOptions:{
					duration:1000,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 1000,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 1000,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.sortable-masonry .filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();
	
	$(function(){$("#slider-range").slider({range:true,min:0,max:5000,values:[370,3500],slide:function(event,ui){$("#amount").val("$"+ui.values[0]+" - $"+ui.values[1]);}});$("#amount").val("$"+$("#slider-range").slider("values",0)+" - $"+$("#slider-range").slider("values",1));});
	
	
	// 19. Date Picker
	  if($('.datepicker').length){
		$( ".datepicker" ).datepicker();
	  }
	
	
	// 20. Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var HeaderHeight = $('.header-lower').height();
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top - HeaderHeight
			 }, 1000);
	
		});
	}
	
	
	
	// 22. Contact Form Validation
	if($contact.length){
		$contact.validate({  //#contact-form contact form id
			rules: {
				name: {
					required: true    // Field name here
				},
				email: {
					required: true, // Field name here
					email: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			},
			
			messages: {
                name: "Please enter your Name", //Write here your error message that you want to show in contact form
                email: "Please enter valid Email", //Write here your error message that you want to show in contact form
                subject: "Please enter your Subject", //Write here your error message that you want to show in contact form
				message: "Please write your Message" //Write here your error message that you want to show in contact form
            },

            submitHandler: function (form) {
                $('#send').attr({'disabled' : 'true', 'value' : 'Sending...' });
                $.ajax({
                    type: "POST",
                    url: "email.php",
                    data: $(form).serialize(),
                    success: function () {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#success").slideUp( "slow" );
                        }, 5000);
                        form.reset();
                    },
                    error: function() {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#error").slideUp( "slow" );
                        }, 5000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

		});
	} 

	
	
	// 23. Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

   // 24. When document is Scrollig, do
	
	$window.on('scroll', function() {
		headerStyle();
		factCounter();
	});
	

   // 25. When document is loading, do
	
	$window.on('load', function() {
		handlePreloader();
		enableMasonry();
	});
	
	
	// 26. Youtube and Vimeo video popup control
	jQuery(function(){
		jQuery("a.video-popup").YouTubePopUp();
		//jQuery("a.video-popup").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
	});
	
	
	// 27. Gallery With Filters List
	var containerEl = document.querySelector('#mixitup-container');
	var mixer;
	if (containerEl){ 
		mixer = mixitup(containerEl, {
		  selectors: {
			target: '.mix',
			control: '[data-mixitup-control]'
		  }
		});
	}
	

})(window.jQuery);