//取得 HR-scroll-item 的個數

  var itemsLengthHR = $('.HR-scroll-item').length;

        
//取得 HR-scroll-item 的寬度
	
  var getItemSizeHR = function(){
    return $('.HR-scroll-item').outerWidth(true);
  };
		
  var itemSizeHR = getItemSizeHR();
  
		
//取得選單上所有 HR-scroll-item 的總寬度

  var getScrollItemSizeHR = function(){
    return itemsLengthHR * itemSizeHR;
  };
		
  var scrollItemSizeHR = getScrollItemSizeHR();


//取得 HR-horizontalScroll-menu 的寬度

  var getScrollMenuSizeHR = function(){
    return $('.HR-horizontalScroll-menu').outerWidth();
  };
        
  var scrollMenuSizeHR = getScrollMenuSizeHR();


//取得多少選單項目是不可見的

  var getMenuInvisibleSizeHR = function(){
    return scrollItemSizeHR - scrollMenuSizeHR;
  };
		 
  var menuInvisibleSizeHR = getMenuInvisibleSizeHR();


// itemSizeHR、scrollItemSizeHR、scrollMenuSizeHR、menuInvisibleSizeHR 的寬度是響應式

  window.addEventListener("resize", function(){
    itemSizeHR = getItemSizeHR();
	scrollItemSizeHR = getScrollItemSizeHR();
    scrollMenuSizeHR = getScrollMenuSizeHR();
	menuInvisibleSizeHR = getMenuInvisibleSizeHR();
  });

	   
//取得選單向左滾動了多少

  var getMenuPositionHR = function(){
    return $('.HR-horizontalScroll-menu').scrollLeft();
  };

		 
//取得按鈕觸發點的相關寬度

  var arrowMarginHR = 20;


  //當實際滾動選單時會發生什麼
  
    $('.HR-horizontalScroll-menu').on("scroll", function(){
	
	  //了解到目前為止滾動了多少
	  
	    var menuPositionHR = getMenuPositionHR();

	    var menuEndOffsetHR = menuInvisibleSizeHR - arrowMarginHR;


 	      //顯示或隱藏按鈕，取決於滾動位置
	
	        if(menuPositionHR <= arrowMarginHR)
			{
		      $(leftArrowHR).addClass('d-none');
		      $(rightArrowHR).removeClass('d-none');
	        }			
			
	      //當選單滾動至中間時，同時顯示兩個按鈕
			
			else if(menuPositionHR < menuEndOffsetHR)
			{
		      $(leftArrowHR).removeClass('d-none');
		      $(rightArrowHR).removeClass('d-none');
			}
			
		  //左鍵(顯示)，右鍵(隱藏)
		  
			else if(menuPositionHR <= menuInvisibleSizeHR)
			{
		      $(leftArrowHR).removeClass('d-none');
		      $(rightArrowHR).addClass('d-none');
            }
    });


    //滾動的持續時間
	
      var scrollDurationHR = 300;
		
		
    //控制按鈕      
	  
	  var rightArrowHR = document.querySelector('.rightNextHR');
	  var leftArrowHR = document.querySelector('.leftPrevHR');
	  
	  
	  //載入頁面時判斷(jQuery) 
	  
        $(document).ready(wideOrNarrowHR());


      //發生 響應式 時判斷  
		
        window.addEventListener("resize", wideOrNarrowHR);
		
		
		//判斷電腦版 或 手機版(576px)
    
	        function wideOrNarrowHR()
	        {
	          if(window.innerWidth >= 576)	
              {
		        rightArrowHR.addEventListener("click", wideRightNextHR);
	            leftArrowHR.addEventListener("click", wideLeftPrevHR);
		
	              rightArrowHR.removeEventListener("click", narrowRightNextHR);
	              leftArrowHR.removeEventListener("click", narrowLeftPrevHR);	    
	          }
	  
	          else
	          {
		        rightArrowHR.removeEventListener("click", wideRightNextHR);
	            leftArrowHR.removeEventListener("click", wideLeftPrevHR);
		
                  rightArrowHR.addEventListener("click", narrowRightNextHR);
	              leftArrowHR.addEventListener("click", narrowLeftPrevHR);          
	          }	
	        };
  
  
            //電腦版(4物件)
  
              function wideRightNextHR(){
	            $('.HR-horizontalScroll-menu').animate({scrollLeft:'+=' + itemSizeHR*4}, scrollDurationHR);
              };
  
              function wideLeftPrevHR(){
	            $('.HR-horizontalScroll-menu').animate({scrollLeft:'-=' + itemSizeHR*4}, scrollDurationHR);
              };
	
  
            //手機版(1物件)
  
              function narrowRightNextHR(){	  
                $('.HR-horizontalScroll-menu').animate({scrollLeft:'+=' + itemSizeHR*1}, scrollDurationHR);
              };
  
              function narrowLeftPrevHR(){
                $('.HR-horizontalScroll-menu').animate({scrollLeft:'-=' + itemSizeHR*1}, scrollDurationHR);
              };
		

		