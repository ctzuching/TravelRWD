//取得回到頁首-按鈕

  var topButton = document.getElementById('goTopBtn');


//當使用者從頁首向下捲動 50px 時，顯示按鈕

  /*window.onscroll = function(){displayTopBtn()}; 
    檔案撰寫多個 window.onscroll 事件，後者會覆蓋前者；
	如果用 addEventListener() 註冊事件的話，同一種事件可以有很多個 handler，而且彼此不會覆蓋*/
	
	window.addEventListener("scroll", function(){
      displayTopBtn()
	});

      function displayTopBtn(){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
	    {
          topButton.style.display = "block";
        } 
        else
	    {
          topButton.style.display = "none";
        }
      };


//當使用者點擊按鈕時，捲動到頁首

  function topFunction(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  
  
  