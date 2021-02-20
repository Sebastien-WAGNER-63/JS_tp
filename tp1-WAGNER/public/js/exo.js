		{
			console.log('Ceci est le TP1 de javascript : ');
			console.log(' --------------- EXO 1 : --------------- ');
		}

		{
			for (let i = 0; i < 5; i++){
				if(i===0){
					console.log(vert);
				}
				else if(i % 2 === 0){
					console.log(rouge);
				}
				else{
					console.log(bleu);
				}
			}
		}

		{
			console.log(' --------------- EXO 2 : --------------- ');
		}

		{
			let elements = document.getElementsByTagName("h1");
			Array.prototype.forEach.call(elements, function(ele){
				console.log(ele.innerHTML);
			});
		}

		{
			console.log(' --------------- EXO 3 : --------------- ');
		}

		{
			let h2 = document.getElementById("titleNews");
			console.log(h2.innerHTML);
		}

		{
			console.log(' --------------- EXO 4 : --------------- ');
		}

		{
			let text = document.getElementsByClassName("title");
			Array.prototype.forEach.call(text, function(tits){
				console.log(tits.innerHTML);
			});
		}

		{
			console.log(' --------------- EXO 5 : --------------- ');
		}

		{
			let form = document.querySelector('#submit');	
			form.onclick = function(){
				let {i, name} = laFonctionVerif();
				if(i === 1){
					creation(name);
				}
			}

			function laFonctionVerif(){
				let titre = document.querySelector('input[name="titleToAdd"]');
				document.querySelectorAll('h3').forEach(function(nom){
					let verif = 0;
					if(nom.innerText === titre.value){
						form = document.querySelector('form');
						form.innerHTML = 'article non unique : <input name="titleToAdd" type="text">';
						form.style.color = rouge;
						verif = verif + 1;
					} 
					let name = titre.value;
					if(verif>0){
						let i = 0;
						return {i,name};
					} else {
						let i = 1;
						return {i,name};
					}
				});

			}

			function creation(nom){
				let art = document.creatElement('article');
				let h = document.creatElement('h3');
				let news = document.querySelector('#news');
				h.innerHTML = nom;
				art.append(h);
				news.append(article);
			}
		}