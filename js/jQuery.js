
$(document).ready(

function(){
	
	/*responsive meni*/
	
		$(".dropdugme").hover(
				function(){
				
					$(this).css("border","4px solid rgb(25,200,200)");
					$(this).css("cursor","pointer");
					$(".fa-caret-down:before").css("text-shadow","text-shadow: 5px 5px 7px white");
				
				},function(){
				
					$(this).css("border","4px solid gray");
					$(this).css("cursor","normal");
					$(".fa-caret-down:before").css("text-shadow","");
				});
		
			$(".dropdugme:first").click(function(){
			
				$("#responsiveLista1").toggle("slow").css("display","table");
			
			});
			
			$(".dropdugme:eq(-1)").click(function(){
			
				$("#responsiveLista2").toggle("slow").css("display","table");
			
			});
		
		
	
	$("nav ul li:first").hover(function(){
		$("#dropdaunLista1").stop(true).slideDown(350);},
		function() {$("#dropdaunLista1").stop(true).slideUp("fast");}
		);
	
	$("nav ul li:eq(7)").hover(function(){
		$("#dropdaunLista2").stop(true).slideDown(350);},
		function() {$("#dropdaunLista2").stop(true).slideUp("fast");}
		);
		
	$("#imejlInput").focus(function() {
		
		$(this).css("box-shadow","inset 4px 4px 10px 10px #888,inset -4px -4px 10px 10px #888").attr("placeholder","");
	});
	$("#imejlInput").blur(function() {
		
		$(this).css("box-shadow","").attr("placeholder","Your E-mail Here to Subscribe");
	});
	
	$('#wrapperFAQ ul > li ul')
    .click(function(e){
      e.stopPropagation();
    })
    .filter(':not(:first)')
    .hide();
	
	$('#wrapperFAQ ul li').click(function(){
    var selfClick = $(this).find('ul:first').is(':visible');
    if(!selfClick) {
      $(this)
        .parent()
        .find('> li ul:visible')
        .slideToggle();
		
		
		
    }
	
	
    $(this)
      .find('ul:first')
      .stop(true, true)
      .slideToggle();
	
	 
	 
	});
	
	$(".specs:eq(0) li:even,.specs:eq(1) li:even").css("background-color","#201f1f");
	$(".specs:eq(0) li:odd,.specs:eq(1) li:odd").css("background-color","#511");
	
	$(".specs:eq(1)").css("display","table-cell");
		
	$('.blokovi figure img').hover(function(){
		$(this).animate({paddingTop: '+=15px'}, 200);}, 
		function(){
		$(this).animate({paddingTop: '-=15px'}, 200);
		});
	
	$( '.proizvodi > ul > li > ul' ).hide();
	
	$('.proizvodi > ul > li').click(function() {
    $(this).find(">:nth-child(2)").stop(true).slideToggle('2000','swing',function(){});
	
	
  });
	
	
		$("#mainAbout h2").animate({bottom: '0%', opacity: '1'},1000,function(){
			
			$("#recAutora").animate({top: '0%', opacity: '1', right: '0%', bottom: '0%', left: '0%'},2500);
			$(".sadrzajAU").animate({top: '0%', opacity: '1', right: '0%', bottom: '0%', left: '0%'},2500);
			$(".parallax").animate({top: '0%', opacity: '1', right: '0%', bottom: '0%', left: '0%'},3000,function(){
				
					$("#recAutora > article, .sadrzajAU > figure, .sadrzajAU > p").animate({opacity: '1'},"slow",function(){
						
						$('#recAutora > article, .sadrzajAU > figure, .sadrzajAU > p, .sadrzajAU').animate({padding: '1% 2%'},"slow");
						
					});
					
				
			});
			
		});
		
		
	
	
	
	
	
	
	
	
	
});

