 $(function(){

 	//wow
 	new WOW().init();
 	//tween max


 	// Click more
 	$('.product-more').slideUp(0);

 	$('.categories .main .btn.btn-primary.more').click(function(event) {
 		/* Act on the event */

 		$(this).parent().prev().children('.product-more').slideDown(400);
 		
 		$('body').animate({scrollTop: $(this).parent().prev().children('.product-more').offset().top - 100},1000);
 	});


 	//menu-top

 	var vitricate = $('.categories').offset().top - 200;

 	$(window).scroll(function(event) {
 		/* Act on the event */
 		var x = $('body').scrollTop();
 		
 		if(x >= vitricate)
 		{
 			$('.menu').addClass('bienhinh');
 		}
 		else
 		{
 			$('.menu').removeClass('bienhinh');
 		}
 	});

 	//tính vị trí nhấn danh mục
 	$('.menu ul.nav.navbar-nav li.nav-item').not('.menu ul.nav.navbar-nav li.nav-item:last-child()').on('click', function(event) {
 		event.preventDefault();
 		/* Act on the event */
 		$('.menu ul.nav.navbar-nav li.nav-item').removeAttr('style');

 		$(this).css({
 			borderBottom: '1px solid white'
 		});

 		var vitri = $(this).index() + 1;
 		$('body').animate({scrollTop: $('.categories.' + vitri + '').offset().top - 100},500, "easeInCubic");
 		
 	});

 	$('.menu ul.nav.navbar-nav li.nav-item:last-child()').on('click', function(event) {
 		event.preventDefault();
 		/* Act on the event */
 		
 		$('body').animate({scrollTop: $('section.contact').offset().top - 100},500, "easeInCubic");
 		
 	});


 	

 	// $('.menu ul li:nth-child(1)').on('click', function(event) {
 	// 	event.preventDefault();
 	// 	 Act on the event 
 	// 	$('body').animate({scrollTop: $('.categories').offset().top - 100},500, "easeInCubic");
 	// });


 	//auto slides
	var auto = setInterval(function(){
	 	var arrAppear = ["appear", "appear2", "appear3"];
	 	var arrDisappear = ["disappear", "disappear2", "disappear3"];

	 	var appear = arrAppear[Math.floor(Math.random()*(arrAppear.length - 0 ) + 0)];
	 	var disappear = arrDisappear[Math.floor(Math.random()*(arrAppear.length - 0 ) + 0)];

	 	

	 	//chuyển slide
	 	var vitri = $('.banner .dot ul li.active').index() + 1;
	 	var next = $('.banner .dot ul li.active').next();
	 	var max = $('.banner .dot ul li').length;

	 	if(vitri == max)
	 	{
	 		next = $('.banner .dot ul li:first-child');
	 		vitri = 1;
	 	}

	 	
	 	$('.banner .dot ul li').removeClass('active');
	 	next.addClass('active');

		var vitri = $('.banner .dot ul li.active').index() + 1;
		

		$('.banner .slides ul li.active').addClass(disappear).one('webkitAnimationEnd', function(event) {
			/* Act on the event */
			$('.banner .slides ul li.' + disappear + '').removeClass(disappear);
		});

		$('.banner .slides ul li').removeClass('active');

		$('.banner .slides ul li:nth-child(' + vitri + ')').addClass(appear).one('webkitAnimationEnd', function(event) {
			/* Act on the event */
			$('.banner .slides ul li.' + appear + '').addClass('active').removeClass(appear);
		});		

	},2000);
	

 	//Hiệu ứng click nút tròn trên slide
 	$('.banner .dot ul li').click(function(event){


 		/* Act on the event */

 		//xóa auto
 		clearInterval(auto);

 		//random
	 	var arrAppear = ["appear", "appear2", "appear3"];
	 	var arrDisappear = ["disappear", "disappear2", "disappear3"];

	 	var appear = arrAppear[Math.floor(Math.random()*(arrAppear.length - 0 ) + 0)];
	 	var disappear = arrDisappear[Math.floor(Math.random()*(arrAppear.length - 0 ) + 0)];


 		if(!$(this).hasClass('active'))
 		{
 			$('.banner .dot ul li').removeClass('active');
	 		$(this).addClass('active');
	 		var vitri = $(this).index() + 1;
	 		

	 		$('.banner .slides ul li.active').addClass(disappear).one('webkitAnimationEnd', function(event) {
	 			/* Act on the event */
	 			$('.banner .slides ul li.' + disappear + '').removeClass(disappear);
	 		});

	 		$('.banner .slides ul li').removeClass('active');

	 		$('.banner .slides ul li:nth-child(' + vitri + ')').addClass(appear).one('webkitAnimationEnd', function(event) {
	 			/* Act on the event */
	 			$('.banner .slides ul li.' + appear + '').addClass('active').removeClass(appear);
	 		});
 		}
 		
 	});
 	

 	
})  
 