//取得 slide-item 的個數

  var itemsLengthNA = $('.slide-item').length;
  
        
//取得 slide-item 的寬度
	
  var getItemSizeNA = function(){
    return $('.slide-item').outerWidth(true);
  };
		
  var itemSizeNA = getItemSizeNA();
  
		
//取得選單上所有 slide-item 的總寬度

  var getSlideItemSize = function(){
    return itemsLengthNA * itemSizeNA;
  };
		
  var slideItemSize = getSlideItemSize(); 
  

//取得 slide-menu 的寬度

  var getSlideMenuSize = function(){
    return $('.slide-menu').outerWidth();
  };
        
  var slideMenuSize = getSlideMenuSize();
  

//取得多少選單項目是不可見的

  var getMenuInvisibleSizeNA = function(){
    return slideItemSize - slideMenuSize;
  };
		 
  var menuInvisibleSizeNA = getMenuInvisibleSizeNA();
  

// slideMenuSize、menuInvisibleSizeNA 的寬度是響應式

  window.addEventListener("resize", function(){
	slideMenuSize = getSlideMenuSize();
    menuInvisibleSizeNA = getMenuInvisibleSizeNA();
  });
        
	   
//取得選單向左滾動了多少

  var getMenuPositionNA = function(){
    return $('.slide-menu').scrollLeft();
  };
  
		 
//取得按鈕觸發點的相關寬度

  var arrowMarginNA = 20;
  

  //當實際滾動選單時會發生什麼
  
    $('.slide-menu').on("scroll", function(){
	
	  //了解到目前為止滾動了多少
	  
	    var menuPositionNA = getMenuPositionNA();
	    var menuEndOffsetNA = menuInvisibleSizeNA - arrowMarginNA;
		

 	      //顯示或隱藏按鈕，取決於滾動位置
	
	        if(menuPositionNA <= arrowMarginNA)
			{
		      $(leftArrowNA).addClass('d-none');
		      $(rightArrowNA).removeClass('d-none');
	        }
			
		  //當選單滾動至中間時，同時顯示兩個按鈕
			
			else if(menuPositionNA < menuEndOffsetNA)
			{
		      $(leftArrowNA).removeClass('d-none');
		      $(rightArrowNA).removeClass('d-none');
			}
			
		  //左鍵(顯示)，右鍵(隱藏)
			
			else if(menuPositionNA <= menuInvisibleSizeNA)
			{
		      $(leftArrowNA).removeClass('d-none');
		      $(rightArrowNA).addClass('d-none');
            }
    });


    //滾動的持續時間
	
      var scrollDurationNA = 300;
	  
		
    //控制按鈕
	
      var leftArrowNA = document.getElementsByClassName('leftPrevNA');
      var rightArrowNA = document.getElementsByClassName('rightNextNA');


      //向左滾動
	  
        $(rightArrowNA).on("click", function(){
	      $('.slide-menu').animate({scrollLeft:'+=' + itemSizeNA}, scrollDurationNA);
        });
		

      //向右滾動
	  
        $(leftArrowNA).on("click", function(){
	      $('.slide-menu').animate({scrollLeft:'-=' + itemSizeNA}, scrollDurationNA);
        });
		
		
	    //滑鼠控制
		
		  $(rightArrowNA).add($(leftArrowNA)).on({
		  
		    mouseenter: function(){
			  clearTimeout(this.countDown);
		      $(slideMenuNA).stop(true);
	          cancelAnimationFrame(timeOut);	  
		    },
		  
		      mouseleave: function(){
			  timeOut = requestAnimationFrame(startSlider);  
		    }
		  
		  });
		
		
//啟動投影片
		
  $(document).ready(startSlider());
  
  var timeOut;
  this.countDown = undefined;
  var slideMenuNA = document.getElementsByClassName('slide-menu');
  var slidePositionNA = 0;
  var slidePause = 5000;
 
  function startSlider(){
	   
	if(slidePositionNA < menuInvisibleSizeNA)
	{
      $(slideMenuNA).animate({scrollLeft: '+=' + itemSizeNA}, slidePause);
	  slidePositionNA = getMenuPositionNA();
      timeOut = requestAnimationFrame(startSlider);	  
	}
	
	else
	{
	  $(slideMenuNA).stop(true);
	  cancelAnimationFrame(timeOut);
	  this.countDown = setTimeout(() => {backSlider();}, 3000);
	}
	
  };
  	
	function backSlider(){
	  clearTimeout(this.countDown);
	  $(slideMenuNA).animate({scrollLeft: 0}, scrollDurationNA);
	  slidePositionNA = 0;
	  timeOut = requestAnimationFrame(startSlider);	  
	};
  
   
  //滑鼠控制(投影片暫停)
  
    $(slideMenuNA).mouseenter(function(){
      clearTimeout(this.countDown);
	  $(slideMenuNA).stop(true);
	  cancelAnimationFrame(timeOut);
    });
  
  
    $(slideMenuNA).mouseleave(function(){
      timeOut = requestAnimationFrame(startSlider);
    });
	
	
	