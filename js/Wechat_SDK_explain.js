

$(function(){
	
	//循环客户端DOM节点
	$.each(data,function(i){
		
		var Left_iterm=$('<div aid="'+data[i].aid+'" class="Left_iterm menuItem" ></div>')
		$('.clientchild').append(Left_iterm);
		var Left_nav=$('<span class="Left_nav">'+data[i].Interface+'</span>');
		var Left_ul=$('<ul class="Left_ul ulli1"></ul>');
		Left_iterm.append(Left_ul);
		Left_ul.before(Left_nav);

		//加入二级菜单
		if(data[i].children){
			var lidata=data[i].children;
			$.each(lidata,function(a){
				var Li=$('<li gid="'+lidata[a].gid+'"><a class="linka" state="'+lidata[a].state+'" href="javascript:">'+lidata[a].name+'</a></li>')
				Left_ul.append(Li);
			})	
		}
	})
	
	
	//循环服务端DOM节点
	$.each(servData, function(i) {
		var data=$('<div sid="'+servData[i].sid+'" class="Left_iterm menuItem"><span class="Left_nav lcontent">'+servData[i].Conthtml+'</span></div>')
		$('.servchild').append(data);
		var ul2=$('<ul class="Left_ul servul"></ul>');
		$('.Left_iterm').append(ul2);
		//加入二级菜单
		if(servData[i].Child){
			var lidata=servData[i].Child;
			$.each(lidata,function(a){
				var Li2=$('<li nid="'+lidata[a].nid+'"><a class="linkb" state="'+lidata[a].state+'" href="javascript:">'+lidata[a].name+'</a></li>')
				ul2.append(Li2);
			})	
		}
	});
	
	
	//客户端函数调用
	pageA();
	
	//服务端函数调用
	pageB();
})



function pageA(){
	
	
	//返回顶部
	$('.goTop').on('click',function(){
		 $('html,body').animate({ scrollTop: 0 }, 200);
	})
	 
	//点击展开客户端和服务端内容
	$('.PortLeft').on('click',function(){
		$('.portchild').stop().slideUp();
		$(this).find('.portchild').stop().slideToggle();

	})
	
	//高亮函数调用
	prettyPrint();
	
	//第一次加载页面
	$.ajax({
			url:"client/Interface_description.html",
			type:"get",
			async:true,
			success:function(data){
				var result=$(data).html();
				$('.bodyContent').html(result);
				//高亮函数调用
				prettyPrint();
				
				//动态让左右两边的高度相等
				SetSameHeight();
				
				$('.Meta').text('<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>')
			},
			error:function(){
				$('.bodyContent').html('找不到页面！');
			}
	});
	
	
//点击折叠和收起左边导航栏
	$('.menuItem').on('click',function(event){
		$('.Left_iterm').find('.Left_ul').stop().slideUp();
		$(this).find('.Left_ul').stop().slideToggle();
		//阻止事件冒泡到父元素
		event.stopPropagation();
	});
	
	
	
	$('.ulli1 li .linka').on('click',function(event){
		//阻止事件冒泡到父元素
		event.stopPropagation();
		event.preventDefault();

		var txt=$(this).text();
		$('.Right_head').text(txt);
		
		//设置左边选中的样式
		$(this).css('color','DodgerBlue');
		$(this).parents('.Left_iterm').siblings().find('.linka').css('color','#333');
		$(this).parent().siblings().find('.linka').css('color','#333');
		$(this).parents('.port1').next('.port2').find('.linkb').css('color','#333');
		//获取每个页面的state属性
		var propertie=$(this).attr('state');
		
		if(propertie ){
			$.ajax({
				url:'client/'+propertie+'.html',
				type:"get",
				async:true,
				success:function(data){
					
					var result=$(data).html();
					$('.bodyContent').html(result);
					
					//高亮函数调用
					prettyPrint();
					
					//动态让左右两边的高度相等
					SetSameHeight();
					
					//判断浏览器是IE浏览器的时候页面需要变化的样式
					if((navigator.userAgent.indexOf('MSIE') >= 0)&& (navigator.userAgent.indexOf('Opera') < 0)){
						$('.ul_con').each(function(i,ul_con){
							var Liheight=$(this).find('li').last().height()
							$(this).find('li').height(Liheight);
							$('.ul_con').last().find('li').eq(2).addClass('diandian');
						})
					}
					
					//加载meta标签
					$('.Meta').text('<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>')
					
				},
				error:function(){
					$('.bodyContent').html('找不到页面！');
					
				}
			});
		}
		
		
	})
	
}

function pageB(){
	$('.servul li .linkb').on('click',function(event){
		//阻止事件冒泡到父元素
		event.stopPropagation();
		event.preventDefault();
		
		//服务端点击时候的样式
		$(this).css('color','DodgerBlue');
		$(this).parents('.Left_iterm').siblings().find('.linkb').css('color','#333');
		$(this).parent().siblings().find('.linkb').css('color','#333');
		$(this).parents('.port2').prev('.port1').find('.linka').css('color','#333');
		var txt=$(this).text();
		$('.Right_head').text(txt);
		
		var State=$(this).attr('state');
		if(State){
			$.ajax({
				url:'server/'+State+'.html',
				type:"get",
				async:true,
				success:function(Udata){
					var result=$(Udata).html();
					$('.bodyContent').html(result);
					
					//高亮函数调用
					prettyPrint();
					
					//动态让左右两边的高度相等
					SetSameHeight();
					
					//IE浏览器的样式加载
					if((navigator.userAgent.indexOf('MSIE') >= 0)&& (navigator.userAgent.indexOf('Opera') < 0)){
						$('.wrapjson').css({'position':'relative','top':'20px'});
						$('.wrap2').css({'position':'relative','top':'40px'});
					}
					
				},
				error:function(){
					$('.bodyContent').html('找不到页面！');
				}
			});
		}
		
	})
}







function SetSameHeight() { 	 

	 var Left=$('.Left').css("height","auto").outerHeight();
//	 var Right=$('.Right').css("height","auto").outerHeight();
	 var Content=$('.Content').css("height","auto").outerHeight();

	 var mh = Math.max(Left, Content); 

	 $('.Left').height(mh);
	 $('.Content').height(mh);

}