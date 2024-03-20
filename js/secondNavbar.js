/* 上下滾動 */

  /*window.onscroll = function(){scrollFunction()}; 
    檔案撰寫多個 window.onscroll 事件，後者會覆蓋前者；
	如果用 addEventListener() 註冊事件的話，同一種事件可以有很多個 handler，而且彼此不會覆蓋*/
	
  window.addEventListener("scroll", scrollFunction);

  function scrollFunction(){
	
	var imgElements = document.getElementsByClassName('secondNavbarImg');
	var listElements = document.getElementsByClassName('secondNavbarList');
	var aElements = document.querySelectorAll('#secondNavbar .nav-link');
	var dropMenuElements = document.querySelectorAll('#secondNavbar .dropdown-menu');
	
	// 向下
	
	if(window.innerWidth >= 768 && document.documentElement.scrollTop > 50)
	{
      document.getElementById('secondNavbar').style.height = "48px";
	  $(navRightArrow).addClass('d-md-flex');			
					
        for(var i=0; i<imgElements.length; i++)
		{
          imgElements[i].style.width = "2.5rem";
		  imgElements[i].style.display = "inline";
        }
				  
          for(var j=0; j<listElements.length; j++)
		  {
		    listElements[j].style.display = "inline";
          }
		  
            for(var k=0; k<aElements.length; k++)
		    {
		      aElements[k].style.paddingBottom = "0.5rem";
            }
			
              for(var m=0; m<dropMenuElements.length; m++)
		      {
		        dropMenuElements[m].style.top = "104px";
              }
			  	  
		      $(dropMenuElements).removeClass('multiColMenu');	  
			
	  document.querySelector('#passportDropdown .dropdown-menu').style.minWidth = "8.817rem";
	  document.querySelector('#taiwanDropdown .dropdown-menu').style.marginLeft = "-16.6rem";
	  
	  // 向左
  
	  var leftSlide = document.querySelector('#secondNavbar .scrollWrapper');
      leftSlide.addEventListener("scroll", checkScroll);

        function checkScroll(){
          for(var s=0; s<dropMenuElements.length; s++)
		  {
            dropMenuElements[s].style.transform =
              "translateX(-" + leftSlide.scrollLeft + "px)";
          }
        };	  
    }
	
	// 置頂
	
	else
	{
      document.getElementById('secondNavbar').style.removeProperty("height");
      $(navRightArrow).removeClass('d-md-flex');
	    
        for(var i=0; i<imgElements.length; i++)
		{
          imgElements[i].style.removeProperty("width");
		  imgElements[i].style.removeProperty("display");
        }
				  
          for(var j=0; j<listElements.length; j++)
		  {
		    listElements[j].style.removeProperty("display");
          }
		  
            for(var k=0; k<aElements.length; k++)
		    {
		      aElements[k].style.removeProperty("padding-bottom");
            }
			
              for(var m=0; m<dropMenuElements.length; m++)
		      {
		        dropMenuElements[m].style.removeProperty("top");
				dropMenuElements[m].style.removeProperty("transform");
              }
		  
		      $(dropMenuElements).addClass('multiColMenu');
		
	  document.querySelector('#passportDropdown .dropdown-menu').style.removeProperty("min-width");
	  document.querySelector('#taiwanDropdown .dropdown-menu').style.removeProperty("margin-left");
    }
  };
  
  
/* 向左滑動(響應式寬度) */

   window.addEventListener("resize", function()
   {
      if(window.innerWidth >= 768)	
      {
        $('#secondNavbar .scrollWrapper').scrollLeft(0);  //滑回至起點
	  }
	  
	  else
	  {
        var dropMenuElements = document.querySelectorAll('#secondNavbar .dropdown-menu');
        for(var m=0; m<dropMenuElements.length; m++)
	    {
	      dropMenuElements[m].style.removeProperty("transform");
        }
	  }
   });    
  
 
/* 按鈕功能 */


  //取得 nav-link 的個數 
	
	var navLinkLength = document.querySelectorAll('#secondNavbar .nav-link');
	
	
  //取得 nav-link 的寬度
  
    var getNavLinkSize = function()
	{
      for(var n=0; n<navLinkLength.length; n++)
	  {
        return navLinkLength[n].clientWidth;
      }	   
    };
		
    var navLinkSize = getNavLinkSize();


  //取得選單上所有 nav-link 的總寬度
  
    var getNavMenuSize = function()
	{
	  var navLinkTotal = 0;
      for(var t=0; t<navLinkLength.length; t++)
	  {
        navLinkTotal += navLinkLength[t].clientWidth;
      }
      return navLinkTotal;	   
    };
		
    var navMenuSize = getNavMenuSize();
	

  //取得 scrollWrapper 的寬度
  
    var getScrollWrapperSize = function(){
      return $('#secondNavbar .scrollWrapper').outerWidth();
    };
        
    var scrollWrapperSize = getScrollWrapperSize();
	
	
  //取得多少選單項目是不可見的
  
    var getNavMenuInvisibleSize = function(){
      return navMenuSize - scrollWrapperSize;
    };
		 
    var navMenuInvisibleSize = getNavMenuInvisibleSize();
	
	
  // navLinkSize、navMenuSize、scrollWrapperSize、navMenuInvisibleSize 的寬度是響應式(上下滾動時)
  
    window.addEventListener("scroll", function()
	{
      navLinkSize = getNavLinkSize();
	  navMenuSize = getNavMenuSize();
	  scrollWrapperSize = getScrollWrapperSize();
	  navMenuInvisibleSize = getNavMenuInvisibleSize();	  
    });
	
	   
  //取得選單向左滾動了多少
  
    var getNavMenuPosition = function(){
      return $('#secondNavbar .scrollWrapper').scrollLeft();
    };

		 
  //取得按鈕觸發點的相關寬度
  
    var navArrowMargin = 20;
	

    //當實際滾動選單時會發生什麼
	
      $('#secondNavbar .scrollWrapper').on("scroll", function(){
	
	    //了解到目前為止滾動了多少
		
	      var navMenuPosition = getNavMenuPosition();

	      var navMenuEndOffset = navMenuInvisibleSize - navArrowMargin;
		  

 	        //顯示或隱藏按鈕，取決於滾動位置
	
	          if(navMenuPosition <= navArrowMargin)
			  {
		        $(navLeftArrow).removeClass('d-md-flex');
		        $(navRightArrow).removeClass('d-md-none');
	          }
			  
			  
			//當選單滾動至中間時，同時顯示兩個按鈕
			  
			  else if(navMenuPosition < navMenuEndOffset)
			  {
		        $(navLeftArrow).addClass('d-md-flex');
		        $(navRightArrow).removeClass('d-md-none');
			  }
			
			
			//左鍵(顯示)，右鍵(隱藏)
			  
			  else if(navMenuPosition <= navMenuInvisibleSize)
			  {
		        $(navLeftArrow).addClass('d-md-flex');
		        $(navRightArrow).addClass('d-md-none');
              }
      });
	  
	  
    //滾動的持續時間
	
      var navScrollDuration = 300;
	
	
    //控制按鈕
	
      var navLeftArrow = document.getElementsByClassName('secondNavbar-left-prev');
      var navRightArrow = document.getElementsByClassName('secondNavbar-right-next');


      //向左滾動
	  
        $(navRightArrow).on("click", function(){
	      $('#secondNavbar .scrollWrapper').animate({scrollLeft:'+=' + navLinkSize*2}, navScrollDuration);
        });


      //向右滾動
	  
        $(navLeftArrow).on("click", function(){
	      $('#secondNavbar .scrollWrapper').animate({scrollLeft:'-=' + navLinkSize*2}, navScrollDuration);
        });
		
		
		