//取得 PC-scroll-item 的個數

  var itemsLengthPC = $('.PC-scroll-item').length;

        
//取得 PC-scroll-item 的寬度
	
  var getItemSizePC = function(){
    return $('.PC-scroll-item').outerWidth(true);
  };
		
  var itemSizePC = getItemSizePC();
 
		
//取得選單上所有 PC-scroll-item 的總寬度

  var getScrollItemSizePC = function(){
    return itemsLengthPC * itemSizePC;
  };
		
  var scrollItemSizePC = getScrollItemSizePC();
  

//取得 PC-horizontalScroll-menu 的寬度

  var getScrollMenuSizePC = function(){
    return $('.PC-horizontalScroll-menu').outerWidth();
  };
        
  var scrollMenuSizePC = getScrollMenuSizePC();


//取得多少選單項目是不可見的

  var getMenuInvisibleSizePC = function(){
    return scrollItemSizePC - scrollMenuSizePC;
  };
		 
  var menuInvisibleSizePC = getMenuInvisibleSizePC();


// itemSizePC、scrollItemSizePC、scrollMenuSizePC、menuInvisibleSizePC 的寬度是響應式

  window.addEventListener("resize", function(){
    itemSizePC = getItemSizePC();
	scrollItemSizePC = getScrollItemSizePC();
    scrollMenuSizePC = getScrollMenuSizePC();
	menuInvisibleSizePC = getMenuInvisibleSizePC();
  }); 

	   
//取得選單向左滾動了多少

  var getMenuPositionPC = function(){
    return $('.PC-horizontalScroll-menu').scrollLeft();
  };

		 
//取得按鈕觸發點的相關寬度

  var arrowMarginPC = 20;


  //當實際滾動選單時會發生什麼
  
    $('.PC-horizontalScroll-menu').on("scroll", function(){
	
	  //了解到目前為止滾動了多少
	  
	    var menuPositionPC = getMenuPositionPC();

	    var menuEndOffsetPC = menuInvisibleSizePC - arrowMarginPC;


 	      //顯示或隱藏按鈕，取決於滾動位置
	
	        if(menuPositionPC <= arrowMarginPC)
			{
		      $(leftArrowPC).addClass('d-none');
		      $(rightArrowPC).removeClass('d-none');
	        }			
			
		  //當選單滾動至中間時，同時顯示兩個按鈕
			
			else if(menuPositionPC < menuEndOffsetPC)
			{
		      $(leftArrowPC).removeClass('d-none');
		      $(rightArrowPC).removeClass('d-none');
			}
			
		  //左鍵(顯示)，右鍵(隱藏)
		  
			else if(menuPositionPC <= menuInvisibleSizePC)
			{
		      $(leftArrowPC).removeClass('d-none');
		      $(rightArrowPC).addClass('d-none');
            }
    });


    //滾動的持續時間
	
      var scrollDurationPC = 300;
	
	
    //控制按鈕

      var rightArrowPC = document.querySelector('.rightNextPC');
	  var leftArrowPC = document.querySelector('.leftPrevPC');
      
      
      //載入頁面時判斷(jQuery) 
	  
        /*$( window ).on( "load", function() { ... })在文件「準備好」之前，無法安全地操作頁面*/

        $(document).ready(wideOrNarrowPC());	
		
		
      //發生 響應式 時判斷

        /*如果用 addEventListener() 註冊事件的話，同一種事件可以有很多個 handler，而且彼此不會覆蓋*/  
		
        window.addEventListener("resize", wideOrNarrowPC);  
 
 
          //判斷電腦版 或 手機版(576px)
    
	        function wideOrNarrowPC()
	        {
	          if(window.innerWidth >= 576)	
              {
		        rightArrowPC.addEventListener("click", wideRightNextPC);
	            leftArrowPC.addEventListener("click", wideLeftPrevPC);
		
	              rightArrowPC.removeEventListener("click", narrowRightNextPC);
	              leftArrowPC.removeEventListener("click", narrowLeftPrevPC);	    
	          }
	  
	          else
	          {
		        rightArrowPC.removeEventListener("click", wideRightNextPC);
	            leftArrowPC.removeEventListener("click", wideLeftPrevPC);
		
                  rightArrowPC.addEventListener("click", narrowRightNextPC);
	              leftArrowPC.addEventListener("click", narrowLeftPrevPC);          
	          }	
	        };
  
  
            //電腦版(6物件)
  
              function wideRightNextPC(){
	            $('.PC-horizontalScroll-menu').animate({scrollLeft:'+=' + itemSizePC*6}, scrollDurationPC);
              };
  
              function wideLeftPrevPC(){
	            $('.PC-horizontalScroll-menu').animate({scrollLeft:'-=' + itemSizePC*6}, scrollDurationPC);
              };
	
  
            //手機版(3物件)
  
              function narrowRightNextPC(){	  
                $('.PC-horizontalScroll-menu').animate({scrollLeft:'+=' + itemSizePC*3}, scrollDurationPC);
              };
  
              function narrowLeftPrevPC(){
                $('.PC-horizontalScroll-menu').animate({scrollLeft:'-=' + itemSizePC*3}, scrollDurationPC);
              };
			  
			  
			  