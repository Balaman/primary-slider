var viewport = document.querySelector('.s-view');
		var pre = document.getElementById('s-pre');
		var next = document.getElementById('s-next');
		var slider = document.querySelector('.s-slider');
		var buttons = document.querySelector('.s-dots').getElementsByTagName('i');
		var index = 0;

		next.onclick=function(){
			animate(-800);
			if(parseInt(slider.style.left)<=-4800){
				slider.style.left='-800px';
			}
			if(index == 4){
			 	index = 0;
			}else{
				index ++;
			}
			showButton();
		}
		pre.onclick=function(){
			animate(800);
			if(parseInt(slider.style.left)>=-800){
				slider.style.left='-4000px';
			}
			if(index==0){
				index = 4;
			}else{
				index--;
			}
			showButton();
			
		}

		for(var i = 0; i < buttons.length; i++){
			buttons[i].onclick=function(){
				var myIndex = +this.getAttribute('index');
				animate((myIndex-index)*-800);
				index = myIndex;
				showButton();
			}
		}

		var showButton = function() {
			index = index;
			for(var i = 0; i < buttons.length; i++){
				buttons[i].className ='';
			}
			buttons[index].className ='z';
		}

		var timer = null;
		var timer2 = null;

		var animate = function(change){
			// slider.style.left= parseInt(slider.style.left)+change+'px';
			var time = 300;
			var interval = 30;
			var speed = change/(time/interval);
			var count=0;
			clearInterval(timer2);
			timer2 = setInterval(function(){
				if(count===time/interval){
					clearInterval(timer2);
				}else{
					count++;
					slider.style.left = parseInt(slider.style.left)+speed+'px';
				}
			},interval);
		}

		
		
		function play(){
			clearInterval(timer);
			timer = setInterval(function(){
				next.onclick();
			},2000)
		}
		function stop(){
			clearInterval(timer);
		}
		
		viewport.onmouseover = stop;
		viewport.onmouseout = play;
		play();