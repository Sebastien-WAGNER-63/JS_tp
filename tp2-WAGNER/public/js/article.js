class Article {
	id='null';
	title='null';
	desc='null';

	constructor(id,title,desc){
		this.id = id;
		this.title = title;
		this.desc = desc;
	}

	createNews(){
		if (this.id[0]===0){
			if (this.id[1]===0){
				let idB = "monBut" + this.id[2].toString();
			} else{
				let idB = "monBut"+this.id[1].toString();
				idB = idB+this.id[2].toString();
			}
		} else{
			let idB = "monBut"+this.id.toString();
		}
		let newArticle = document.createElement('article');
		let h3 = document.createElement('h3');
		let p = document.createElement('p');
		let button = document.createElement('button');
		let news = document.querySelector('#news');
		h3.innerHTML = this.title;
		p.innerHTML = this.desc;
		button.innerHTM = 'View detail';
		newArticle.setAttribute("id",this.id);
		button.setAttribute("id",idB);
		newArticle.append(h3);
		newArticle.append(p);
		newArticle.append(button);
		news.append(newArticle);
	}
}