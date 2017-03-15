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

function sendCheck()
{
    var pass = true;
    // 初始化
    $('input').each(function(){
        $(this).css({'background-color':'white'});
    });

    // check
    $($('li.active>a').attr('href')+' input').each(function(){
        if( $(this).val()=="" ){
            $(this).css({'background-color':'pink'});
            alert("請輸入"+$(this).attr('placeholder'));
            pass = false;
        }
    });

    if(pass){doJoin();}
}

function doJoin()
{
    alert("doJoin");
    // 初始化
    /*$('.imgbox').each(function(){
        $(this).removeClass('error');
        $(this).siblings('.prompt_box').hide();
    });

    // check
    $($('li.active>a').attr('href')+' input').each(function(){
        if( $(this).val()=="" ){
            $(this).siblings('div.imgbox').addClass('error');
            $(this).siblings('.prompt_box').show();
            alert("請輸入"+$(this).attr('placeholder'));
        }
    });*/
}