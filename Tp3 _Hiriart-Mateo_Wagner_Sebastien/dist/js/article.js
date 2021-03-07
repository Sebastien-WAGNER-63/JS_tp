class Article {
    id;
    title;
    description;

    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }
   
    createArticleHtml(){
        let newArticle = $("<article></article>");
        let h3 = $("<h3></h3>").text(this.title); 
        h3.addClass("title");
        let p = $("<p></p>").text(this.description);
        let button = $("<button>View detail</button>");
        let news = $('#news');

        this.bindButtonViewdetail(button, viewdetailClick);

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }

    checkArticleUnicity(monTitre) {
        let h3s = $('.title');
        let addNewsForm = $('#addNewsForm');
        for (let i = 0; i < h3s.length; i++) {
            if (h3s.eq(i).text().toLowerCase().trim() === monTitre.toLowerCase().trim()) {
                addError('Erreur article deja existant', addNewsForm);

                return false;
            }  
        }

        return true;
    }

    checkValue() {
        if (this.title === '') {
            let form = $('#addNewsForm');
            addError('Title vide', form);
            return false;
        }

        if (this.description === '') {
            let form = $('#addNewsForm');
            addError('Description vide', form);
            return false;
        }

        return true;
    }

    addArticle() {
        clearErrors();

        if (!this.checkValue()) {
            return false;
        }

        if (!this.checkArticleUnicity(this.title)) {
            return false;
        }
        this.createArticleHtml();
        return true;
    }

    bindButtonViewdetail(button, callback){
        //shit might happend
        button.click(callback);
    }
}