iterate();

let h1 = $('h1');
logMessageWithDate(h1.text());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.text());


$('.title').each(function(){
	logMessageWithDate($(this).text());
});

let button = $('input[name="addNewsBtn"]');
bindButton(button);

$('article button').each(function(){
	$(this).click(viewdetailClick);
});

var obj = jQuery.parseJSON(ALLNEWSJSON);
$.each(obj, function (index, value) {
    console.log(value);
    let a = new Article(value.id, value.title, value.description);
	a.addArticle();
});



var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + dd + '-' + mm;


/* Requete Ajax qui merde
$.ajax({
	url:'http://newsapi.org/v2/everything?q=minecraft&from='+ '2021-03-07' +'&sortBy=publishedAt&apiKey=9b4e42c6404c48cab0f04cb200654d6c&pageSize=5',
	methode: 'GET',
	dataType: 'html'
})
.done(function(data, textStatus, xhr) {
	if(xhr.status >= 300 && xhr.status < 400)
		console.log('Attention redirection');

	console.log(xhr);
	console.log(xhr.status);
	console.log(textStatus);
	console.log(data); //JSON
	console.log(data.headers); //JSON
	var obj = jQuery.parseJSON(data);
	$.each(obj, function (index, value) {
	    console.log(value);
	    let a = new Article(value.id, value.title, value.description);
		a.addArticle();
	});
})
.fail(function(xhr, textStatus, error) {
	console.log(xhr.status);
	console.log(textStatus);
	throw new Error(error);
});*/


//Onglet affichage 
$(function() {
    $('#onglets').css('display', 'block');
    $('#onglets').click(function(event) {
    	var actuel = event.target;
    	if (!/li/i.test(actuel.nodeName) || actuel.className.indexOf('actif') > -1) {
        	return;
    	}
    	$(actuel).addClass('actif').siblings().removeClass('actif');
   		setDisplay();
    });
    function setDisplay() {
        var modeAffichage;
        $('#onglets li').each(function(rang) {
        	modeAffichage = $(this).hasClass('actif') ? '' : 'none';
        	$('.item').eq(rang).css('display', modeAffichage);
        });
      }
      setDisplay();
    });