$(document).ready(function($){
	var mainHeader = $('.auto-navbar'),
		headerHeight = mainHeader.height();

	var scrolling = false,     //滚动标志
		previousTop = 0,       //初始的位置
		currentTop = 0,	       //当前滚动条的位置
		scrollOffset = 5;      //滚动的距离

	$(window).on('scroll', function(){
		if(!scrolling){
			scrolling = true;
		    setTimeout(Autohide, 250)
		}
	});

	function Autohide(){
		var currentTop = $(window).scrollTop();
	    Scrollstatus(currentTop);
	   	previousTop = currentTop;
		scrolling = false;
	}

	function Scrollstatus(currentTop) {
	    if (previousTop - currentTop > scrollOffset) {
	    	mainHeader.removeClass('hidden');  //向上滚动
	    } else if( currentTop - previousTop > scrollOffset && currentTop > scrollOffset) {
	    	mainHeader.addClass('hidden');     //向下滚动
	    }
	}

});