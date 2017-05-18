$(document).ready(function() { 
	var clientH=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  $('.videoWrap','.videoBox').css({'width':'100%','height':clientH});
	$('.h5video').css({'width':'100%','height':clientH});
	$('.landWrap').css({'width':'100%','height':clientH});
	$('.follow').css({'width':'100%','height':clientH});
	$('.videoBox').css({'width':'120%','left':'-10%'});
	$('.h5video').css({'width':'100%'});
	//为 <video> 元素添加 ontimeupdate 事件，如果当前播放位置改变则执行函数 
	var video=$('#h5video')[0];
	//video.addEventListener('play', function() { })
     video.addEventListener('playing', function() {
           video.addEventListener('timeupdate', function() {
           		//当视频的currentTime大于0.1时表示黑屏时间已过，已有视频画面，可以移除浮层（.pagestart的div元素）
              	if(video.currentTime>0.1){
              		//$('.bg-poster').fadeOut(500);
              	}
            	if(video.ended){
              		$('#videoWrap').hide();
       				    $('.landWrap').show();
       			  }
           })
    })

}); 
