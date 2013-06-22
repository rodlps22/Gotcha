
gotcha_nav_mouseover = {
	init: function() {
		$('header li.dropdown').on('mouseenter', function() {
			$(this).addClass('navHover').children('ul.dropdown-menu').show();
		}).on('mouseleave', function() {
			$(this).removeClass('navHover open').children('ul.dropdown-menu').hide();
		});
	}
};
gotcha_sky = {
	init: function(){
		$('#far-clouds').pan({fps: 5, speed: 0.7, dir: 'left', depth: 30});
		$('#near-clouds').pan({fps: 20, speed: 1, dir: 'left', depth: 70});
	
		window.actions = {
			speedyClouds: function(){
				$('#far-clouds').spSpeed(12);
				$('#near-clouds').spSpeed(20);
			},
			runningClouds: function(){
				$('#far-clouds').spSpeed(8);
				$('#near-clouds').spSpeed(12);
			},
			walkingClouds: function(){
				$('#far-clouds').spSpeed(3);
				$('#near-clouds').spSpeed(5);
			},
			lazyClouds: function(){
				$('#far-clouds').spSpeed(0.7);
				$('#near-clouds').spSpeed(1);
			},
			stop: function(){
				$('#far-clouds, #near-clouds').spStop();
			},
			start: function(){
				$('#far-clouds, #near-clouds').spStart();
			},
			toggle: function(){
				$('#far-clouds, #near-clouds').spToggle();
			},
			left: function(){
				$('#far-clouds, #near-clouds').spChangeDir('left');                    
			},
			right: function(){
				$('#far-clouds, #near-clouds').spChangeDir('right');                    
			}
		};
	}
};
gotcha_index_anime = {
	init: function(){
		console.log( $('.dv_full div').length );
		$('.dv_full div').each(function(a,b){
			$(this).mouseenter(function(){
				$(this).find('img').attr('src','/public/image/'+$(this).attr('id')+'_01.png' );	
			}).mouseleave(function(){
				$(this).find('img').attr('src','/public/image/'+$(this).attr('id')+'_00.png' );
			});
		});
	}
}
