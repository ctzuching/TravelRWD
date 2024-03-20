// 互動視窗

  //啟動
  
    $(document).ready(showModal());
	
	  document.querySelectorAll('.callModal').forEach(function(callModalAct){	
	    callModalAct.addEventListener("click", function(){	
	      showModal();
	  	});
	  });
	
    
    function showModal(){
	  
	  var modalWrapper = document.querySelector('#beginModal');
      var modalBody = document.querySelector('body');
	
	
	  //載入頁面時顯示(隱藏body捲軸)
	
	    modalWrapper.style.display = "block";
	    modalBody.style.overflow = "hidden";
	  
	  
	    //新增背景
	  
	      $(modalBody).append("<div id='backdropModal'></div>");
		
		
        //新增動畫
	  
	      var modalAT = document.querySelector('#backdropModal');
		  this.timeOutAT = undefined;
		
		    modalAT.addEventListener("click", function(){	
	          addAT();
			  this.timeOutAT = setTimeout(() => {removeAT();}, 300);            			
	  	    });
		  
		      function addAT(){
			    modalWrapper.style.transform = "scale(1.03)";  
		      };
		  
		      function removeAT(){
			    modalWrapper.style.transform = "scale(1)";
                clearTimeout(this.timeOutAT);			
		      };
	  
	    						  
	  //關閉視窗
	  
	    function closeModal(){
	      modalWrapper.style.removeProperty("display");
		  modalBody.style.removeProperty("overflow");
          $("#backdropModal").remove();		  
	    };
		
	      document.querySelectorAll('.closeModalBtn').forEach(function(closeModalAct){	
		    closeModalAct.addEventListener("click", function(){	
	          closeModal();
	  	    });
		  });  	 	  
  };
  

  //阻擋關閉網頁視窗
  
    document.querySelector('.modalCloseWindow').addEventListener("click", function(){       
      
	  //按下"確定"，離開網頁
	  
	  if(window.confirm("要離開網頁嗎？")){  
        window.open("","_self").close();
      }
	  
	  //按下"取消"，網頁重整
	  
      else{
	    window.location.reload();
      }			  
    });

	
	