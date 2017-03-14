(function($){
    // 頁籤
	var _showTab = 0;
    $('.tabs').each(function(){
    	var $tab = $(this);
     
    	var $defaultShow =  $('ul.tab_title li', $tab).eq(_showTab).addClass('active');
    	$($defaultShow.find('a').attr('href')).siblings().hide();

    	$('ul.tab_title li', $tab).click(function(){
    		var _clickTab = $(this).find('a').attr('href');

    		$(this).addClass('active').siblings('.active').removeClass('active');
    		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
     
    		return false;
    	}).find('a').focus(function(){
    		this.blur();
    	});
    });

    // 鍵盤
    $('input').keypress(function(evt){
        if(evt.which==13){sendCheck();}
    });
})(jQuery)

// 鍵盤
function sendCheck(){
    console.log("施工中");
    alert("施工中");
}