//presets
$(window).on('scroll', function() {
var docTop = $(document).scrollTop();
if (docTop === 0) {	
	$(".jumbotron").css('opacity', 1);
	console.log(docTop);
}
});

$('#geog-content-phone').hide();
$('#africa-map-phone').hide();

// hyperlinks
$('#logo').on('click', () => {
   		window.location.href='index.html';
    });
$('#logo-icon').on('click', () => {
   		window.location.href='index.html';
    });
    
$('.tablink').eq(2).on('click', () => {
   		window.location.href="diary.html#gallery";
    });  
 	
$('.tablink').eq(1).on('click', () => {
   		window.location.href="diary.html#past";
    });  
        
$('.diary-link').on('click', () => {
   		window.location.href="diary.html";
    }); 
    
$('#notice-board span').on('click', () => {
   		window.location.href="diary.html#events-tabs";
    }); 

//menu bars
function changeMenu(x) {
    x.classList.toggle("change");
}
	
$('.menu-container').on('click', () => {
	$('#hidden-nav').slideToggle();	
	
});

// scroll fade out function

$(function() {
	var documentEl = $(document), 
		fadeElem = $('.fade-scroll');
		
		documentEl.on('scroll', function() {
			var currScrollPos = documentEl.scrollTop();
			fadeElem.each(function() {
				var $this = $(this),
					elemOffsetTop = $this.offset().top;
					
					if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/300);					
		});
	});
});

// scroll animations move and fade in

$('#geog-content').css('margin-right', -900);
$(window).on('scroll', function() {
	var currPos = $(document).scrollTop();
        if(currPos < 180) {
  			$(".jumbotron").css('margin-bottom', 150 - (currPos/2));
  		}
//zoom
  		
  		if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  		if( currPos < 800) {
  		$(".jumbotron").css('background-size', (100 + 100 * currPos / 2000) + "%");
  		
  		$('#myBtn').on('click', function() {
  		$(".jumbotron").css('background-size', "cover").css('opacity', 1);
  		});
  		}
  		}
  		
  	var x = 1 - (currPos/100);
  			$('#hidden-nav').css({'background-color' : 'rgba(0, 0, 0, ' + x + ')'});
  	if($('body').width() > 737) {	
  		//moves map in
  		if (currPos < 990) {
    		$('#geog-content').css('margin-right', -500 + (currPos/1.2));
  		}
  		
  		if (currPos > 1000) {
  		$('#geog-content').css('zoom', 0 + (currPos/1000));	
  		}
  	
  		if(currPos < 120) {
  			$('.animate').css('margin-top', 100 - currPos);	
  		}
  		} else if ($('body').width() < 737){
  			$('#geog').show();
  		}  			  		
});
 
  $(function() {
	var documentEl = $(document), 
		fadeElemA = $('.animate');
		
		documentEl.on('scroll', function() {
			var currScrollPos = documentEl.scrollTop();
			fadeElemA.each(function() {
				var $this = $(this),
					elemOffsetTop = $this.offset().top;
					
					if (currScrollPos < elemOffsetTop ) $this.css('opacity', 0 + ((currScrollPos + 10)/(elemOffsetTop * 1.1)));
		});
	});
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

	//$('#logo').css('font-size', '18px');
	$('#logo').hide();
	$('#logo-icon').show();
	$('#main-nav').css('margin-left', 'auto');
	
	$('#myBtn').on('click', function() {
  		$(".jumbotron").css('opacity', 1);
  		});
	
if($('body').width() < 768) {	
	$('#geog-content-phone').show();
	$('#africa-map-phone').show();
	$('#africa-map').hide();
	$('#geog-content').hide();
	}
	
$(function() {
	var documentEl = $(document), 
		fadeElem = $('.fade-scroll');
		
		documentEl.on('scroll', function() {
			var currScrollPos = documentEl.scrollTop();
			fadeElem.each(function() {
				var $this = $(this),
					elemOffsetTop = $this.offset().top;
					
					if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/500);
							
		});
		
	});
});



if($('body').width() < 769) {
$('.tablink').css('font-size', 12).css('float', 'left');
}
  
	if($('body').width() > 736) {

  	$('#geog-content').css('margin-right', -900);
	$(window).on('scroll', function() {
	var currPos = $(document).scrollTop();
  		//moves map in
  		if (currPos < 990) {
    		$('#geog-content').css('margin-right', -600 + (currPos/1.1));
  		}
  		
  		if (currPos > 1000) {
  		$('#geog-content').css('zoom', 0 + (currPos/1000));	
  		}
  		
  		/*if(currPos < 120) {
  			$('.animate').css('margin-top', 100 - currPos);	
  		}*/
    });
  }
}  


//copyright year change

function displayYear() {
   
   	var currentTime = new Date();
   	var year = currentTime.getYear();

   	var copyrightYear = document.getElementById('copyright');
   	copyrightYear.innerText = "© " + (year + 1900) + " Project Timothy Uganda.";
  }
$(document).ready(function() {
	displayYear();
});



//tabs

function openEvent(eventName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(eventName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//diary buttons fade in when on screen

$(window).on('scroll', function() {
var tab = $('.tablink').offset().top;
var top = $(document).scrollTop();
var bottom = top + $(window).height();

if ((bottom - 900) > tab) {
	$('.tablink').eq(0).fadeIn(1500);
	$('.tablink').eq(1).delay(500).fadeIn(1000);
	$('.tablink').eq(2).delay(1000).fadeIn(1000);
}
});

//pushing images to gallery
$(document).ready(function(){
var dir = "images/"; // folder location
var fileextension = ".jpg"; // image format
var i = "1";


$(function imageloop(){
var number = i % 2;
if (number === 0) {

 $("<img />").attr('src', dir + i + fileextension ).appendTo(".column");
 
 }  else if (number === 1) {
 
 $("<img />").attr('src', dir + i + fileextension ).appendTo(".column-two");
 
 }
 
 if (i == 50) {
 	$('.gallery-column img').on('error', function() {
 	$(this).remove();
 });	
 }
 
 else {
 i++;
 imageloop();
  };

  });   
});

// ensures jumbotrons reset correctly


