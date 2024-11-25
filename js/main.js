function posalji() {
	var ime = document.getElementById('ime').value;
	var email = document.getElementById('email').value;
	var brtel = document.getElementById('brtelefona').value;
	var poruka=document.getElementById('poruka').value;
	var greske= new Array();
	var sadrzaj=new Array();
		var greskeID = new Array();
	var reime= /^[A-ZŠĐČĆŽ]{1}[a-zšđčćž]{2,14}$/;
	var reemail= /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/; 
	var rebrtel= /^[0][6][0,1,2,3,4,5,6,8,9][\d]{6,7}$/;
	var reporuka=/^[\d \w]{5,100}$/;
	
	
	if(reime.test(ime))
	{
		sadrzaj.push(ime)
		document.getElementById('nema').innerHTML="";
		
		
	}
	else
	
	{
		
		document.getElementById('nema').innerHTML="Ime mora imati prvo slovo veliko";
		
	}
	if(reemail.test(email))
	{
		sadrzaj.push(email);
		document.getElementById('nema1').innerHTML="";
	}
	else
	{
		document.getElementById('nema1').innerHTML="Email nije u dobrom formatu!"
		
	}
	if(rebrtel.test(brtel))
	{
		sadrzaj.push(brtel)
		document.getElementById('nema2').innerHTML=""
	}
	else
	{
		document.getElementById('nema2').innerHTML="Broj nije u dobrom formatu!";
		
	}
	if(reporuka.test(poruka))
	{	
		sadrzaj.push(poruka)
		document.getElementById('nema3').innerHTML="";
		
	
	}
	else{
		document.getElementById('nema3').innerHTML="Ostavite nam validnu poruku"
		
	}

	
if(sadrzaj.length == 4)
	{
		document.getElementById('ime').value="";
		document.getElementById('email').value="";
		document.getElementById('brtelefona').value="";
		document.getElementById('poruka').value="";	
		//document.getElementById('nema4').innerHTML="Vaša poruka je poslata,odgovor ćete dobiti najkasnije sledećeg radnog dana"
	
}
}
function anketa7()
{
var datum=new Date();
datum.setMonth(datum.getMonth()+1);
var status = document.getElementsByName("ocena_sajta");
var statusIzbor = "";
for(var i = 0; i < status.length; i++)
{
if(status[i].checked)
{
statusIzbor = status[i].value;
break;
}
}
if(statusIzbor == "")
document.getElementById('anketaPoruka').innerHTML="Niste izabrali nijednu opciju!"
else
{
document.getElementById('anketaPoruka').innerHTML="Hvala Vam sto ste glasali! Odabrali ste: "+statusIzbor;
document.cookie="choise="+statusIzbor+";expires="+datum.toGMTString();
}
}





// dinamicki nav meni
let nizLinkTekst = ["Početna", "O Nama", "Vesti", "Team", "Kontakt","Portfolio","Dokumentacija"];
let nizLinkHref = ["#home", "#about", "#news", "#team","#kontakt","https://sandraoraovcicportfolio.000webhostapp.com/index.html","../DokumentacijaVelmoze.pdf"];

let divNavMeni = document.querySelector(".nav-menu");

let formatZaIspisNavMeni = "";

for(let i = 0; i < nizLinkHref.length; i++){
    formatZaIspisNavMeni += `<li class="nav-item"><a href="${nizLinkHref[i]}" class="nav-item nav-link">${nizLinkTekst[i]}</a><li>`
}



divNavMeni.innerHTML = formatZaIspisNavMeni;


let footerlink = ["<a href='#'><i class='fab fa-facebook-f'></i></a>", "<a href='#'><i class='fab fa-instagram'></i></a>", "<a href='#'><i class='fab fa-linkedin-in'></i></a>"];
let fotterleft = [" ",];

let divfooter = document.querySelector("footer");

let formazafooter = "";

for(let i = 0; i < footerlink.length; i++){
    formazafooter += `<a>${footerlink[i]}</a>`
}
formazafooter+="<p class='copy'>Copyright 2022</p>";


divfooter.innerHTML = formazafooter;