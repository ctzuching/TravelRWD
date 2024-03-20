// 開啟 offcanvas

  $(document).ready(function(){
		
    // 左側
	
	  document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener("click", function(){
	    document.querySelector('.left-backdrop').classList.toggle("active");
	    document.querySelector('.left-offcanvas-collapse').classList.toggle("open");
      });
		
		document.querySelectorAll('.left-btnClose').forEach(function(Closebutton){	
		  Closebutton.addEventListener("click", function(){	
	        close_left_offcanvas();
	  	  });
		});
		
		document.querySelector('.left-backdrop').addEventListener("click", function(event){
		  close_left_offcanvas();
		});
		
		
	// 右側
	
	  document.querySelector('#searchOffcanvas').addEventListener("click", function(){
        document.querySelector('.right-backdrop').classList.toggle("active");
	    document.querySelector('.right-offcanvas-collapse').classList.toggle("open");
      });
	  
	    document.querySelectorAll('.right-btnClose').forEach(function(Closebutton){	
		  Closebutton.addEventListener("click", function(){	
	        close_right_offcanvas();
	  	  });
		});
		
		document.querySelector('.right-backdrop').addEventListener("click", function(event){
		  close_right_offcanvas();
		});
  });


	// 搜尋框
	  
      $(document).ready(function(){
	    $('#searchPills .nav-link').hover(function(){
  		  $(this).tab("show");
	    });
      });
	
	
	// (關閉) Right offcanvas collapse
	  
	  function close_right_offcanvas(){
		document.querySelector('.right-backdrop').classList.remove("active");
		document.querySelector('.right-offcanvas-collapse.open').classList.remove("open");
	  };
	  
	  
	// (關閉) Left offcanvas collapse
	  
	  function close_left_offcanvas(){
		document.querySelector('.left-backdrop').classList.remove("active");
		document.querySelector('.left-offcanvas-collapse.open').classList.remove("open");
	  };


	  