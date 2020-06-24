console.log("OK");

function kreniGore(){
	
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
	
}

function responsiveMenu() {
 
	var x=document.querySelector("#wrapperResponsive");
	
	if(x.style.display==="none")
	{
		x.style.display="block";
	}
	else
	{
		x.style.display="none";
	}
 
}


//dark mode svic


function svic(){
	

	
	if(document.querySelector("#najt").checked===true){
		document.querySelector("header").style.backgroundColor="rgb(42,42,42)";
		document.querySelector("footer").style.backgroundColor="rgb(42,42,42)";
		document.querySelector("body").style.background="linear-gradient(to bottom right, #000000 -26%, #808080 132%)";
		document.querySelector("h1").style.color="rgb(252,37,62)";
		document.querySelector("h1").style.textShadow="3px 3px 10px rgb(252,37,62)";
		document.querySelector("ul li").style.color="white";
		document.querySelector("#slikica img").src="img/logostefan.png";
		document.querySelector("#wrapperSlika img").src="img/logostefan.png";
		$("p").css("color","white");
		$("a").css("color","white");
		$("i").css("color","white");
		$("label").css("color","white");
		
		}
	else{
		
		
		document.querySelector("header").style.backgroundColor="white";
		document.querySelector("footer").style.backgroundColor="white";
		document.querySelector("body").style.background="linear-gradient(to bottom, #37b9e9 -10%, #8dbeba 85%)";
		document.querySelector("h1").style.color="black";
		document.querySelector("h1").style.textShadow="0px 0px 0px white";
		document.querySelector("#slikica a img").src="img/logostefanDay.png";
		document.querySelector("#wrapperSlika img").src="img/logostefanDay.png";
		$("p").css("color","#11ffff");
		$("a").css("color","#11ffff");
		$("i").css("color","#11ffff");
		$("label").css("color","#11ffff");
		
		
	
	}
	
	
}
//dark mode svic

function unselektuj(){
	var saglasnost=document.querySelector("#saglasnost");
	saglasnost.checked=false;
	
}

function prikazi(){
	
	document.querySelector("#dugmeZaSlanje").style.display="table-cell";
}

function posalji(){
	document.querySelector("#poljeGresaka").innerHTML="";
	var greske=[];
	
	var imePrezime=document.querySelector("#imePrezime").value;
	var chekLista=document.querySelector("#odaberite");
	var telefon=document.querySelector("#telefon").value;
	var tekstzona=document.querySelector("#tekstzona");
	var adresa=document.querySelector("#eAdresa").value;
	var serBroj=document.querySelector("#serBroj").value;
	var fajl=document.querySelector("#fajl");
	var saglasnost=document.querySelector("#saglasnost");
	var opis=document.querySelector("#tekstzona").value;
	var fajl=document.getElementById("#fajl");
	
	var praviloIme=/^[A-Z]{1}[a-z]{2,10}(\s[A-Z]{1}[a-z]{2,20})+$/;
	var praviloMail=/^[A-z]{1}[A-z_\d-\.]+@[a-z]+mail\.com$/;
	var praviloFon=/^(06){1}[0-9]{1}\/(\d{2}-){2}\d{3}$/;
	var praviloID=/^123S-[A-Z]{4}-\d{4}-(\d{1}[A-Z]{1}){2}$/;
	
	if(praviloIme.test(imePrezime)){
		document.querySelector("#imePrezime").style.border="";
		
		
	}
	else{
		document.querySelector("#imePrezime").style.border="2px solid red";
		greske.push("You have incorrectly inputted your first and/or last name!<br>Your first and last name must start with a capital letter, all the other letters must be undercase!");
	}
	
	if(praviloMail.test(adresa)){
		document.querySelector("#eAdresa").style.border="";
		
	}
	else{
		document.querySelector("#eAdresa").style.border="2px solid red";
		greske.push("Incorrect e-mail!<br>Your e-mail must start with a letter and can contain numbers, letters, '_', '-' and '.'!");
	}
	
	if(praviloFon.test(telefon)){
		document.querySelector("#telefon").style.border="";
		
	}
	else{
		document.querySelector("#telefon").style.border="2px solid red";
		greske.push("Your phone is wrong!<br>Phone format is the following: 0xx/xx-xx-xxx !");
	}
	
	if(praviloID.test(serBroj)){
		document.querySelector("#serBroj").style.border="";
		
	}
	else{
		document.querySelector("#serBroj").style.border="2px solid red";
		greske.push("Invalid ID!");
	}
	
	if(chekLista.selectedIndex==0){
		document.querySelector("#odaberite").style.border="2px solid red";
		greske.push("You must select the problem!");
	}
	else{
		document.querySelector("#odaberite").style.border="";
	}
	
	if(opis.length==0){
		document.querySelector("#tekstzona").style.border="2px solid red";
		greske.push("Description mustn't be empty!");
	}
	else{
		document.querySelector("#tekstzona").style.border="";
		
	}
	
	if(greske.length==0&&saglasnost.checked===true){
		document.querySelector("#poljeGresaka").style.display="none";
		
		var jsonPodaci={
			"ime_i_prezime":imePrezime,
			"telefon":telefon,
			"e_adresa":adresa,
			"id_uredjaja":serBroj,
			"selektovana_opcija":chekLista.selectedIndex,
			"opis_problema":opis,
			"prilozene_slike":fajl
			
			
		};
		
		$.ajax({
			type:"POST",
			dataType:"json",
			url:"obrada.php",
			data:jsonPodaci,
			success:function(){
				alert("The files have been sent!");
				
			}
			
			
			
		});
		
	}
	else if(greske.length!=0){
		
		for(var i=0;i<=greske.length;i++)
		{
			document.querySelector("#poljeGresaka").style.display="table-cell";
			document.querySelector("#poljeGresaka").innerHTML+="*"+greske[i]+"<br><br>";
			
		}
	}
	
	
}
//mapa
function initMap() {
  // The location of Uluru
  var uluru = {lat: 44.820941, lng: 20.460774};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
//mapa

//otvara tabove
function openProduct(productName) {
  var i;
  var x = document.getElementsByClassName("product");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(productName).style.display = "block";
}
//otvara tabove

//za slajder

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function automaticSlide() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(automaticSlide, 2000); // Change image every 2 seconds
}


//za slajder

//za imejl newsletter

function newsletterSlanje(){
	var adresa=document.querySelector("#imejlInput").value;
	var praviloMail=/^[A-z]{1}[A-z_\d-\.]+@[a-z]+mail\.com$/;
	
	if(praviloMail.test(adresa)){
		jsonImejl={
			"e-mail":adresa
		}
		
		$.ajax({
	            type : "post",
	            dataType : "json",
	            url : "http://localhost/podaci.php",
	            data : jsonImejl,
	            success : function() {
	                console.log("Subscribed!");
	            },
	            error : function(xhr, status, error) {
	                console.log(error);
	            }
	        });
		
	}
	else{
		alert("Invalid e-mail!");
	}
}

//za imejl newsletter