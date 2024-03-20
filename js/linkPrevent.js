//(暫時)阻止連結作用

  document.querySelectorAll('.tab-pane a').forEach(function(link1){	
    link1.addEventListener("click", function(){	
	  event.preventDefault();
	});
  });
  
  
  document.querySelectorAll('.dropdown-item').forEach(function(link2){	
    link2.addEventListener("click", function(){	
	  event.preventDefault();
	});
  });
  
  
  document.querySelectorAll('.footer-item a').forEach(function(link3){	
    link3.addEventListener("click", function(){	
	  event.preventDefault();
	});
  });
	  
	  
	  