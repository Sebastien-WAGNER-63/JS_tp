function bindButton(button){
    button.click(function(index){
        event.preventDefault();
        let title = $('input[name="titleToAdd"]');
        let description = $('textarea[name="descriptionToAdd"]');

        let article = new Article(0, title.val(), description.val());
        if(article.addArticle()){
            title.val('');
            description.val('');
        }

        return false;
    });
}

function clearErrors(){
    let errors = $('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].parentNode.removeChild(errors[0]);
        }        
    }
}

function addError(message, parent){
    let error = $('<p></p>');
    error.html(message);
    error.css("color",ROUGE)
    error.addClass('error');

    parent.prepend(error);
}

function viewdetailClick(){
    logMessageWithDate($(this).parent().children('p').text());

}