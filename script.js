fetch("book.json")
	.then(function(response){
		return response.json();
	})
	.then(function(products){
		let placeholder = document.querySelector("#data-output");
		let out = "";
		for(let product of products){
			out += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product["Book name"]}</td>
                    <td>${product.description}</td>
                    <td>${product.price}</td>
                    <td>${product.author}</td>
                    <td>${product.type}</td>
                    <td> <img src='${product.img}'> </td>
                    <td>${product.incart}</td>
                    <td>${product.category}</td>
                </tr>
                `;
		}

		placeholder.innerHTML = out;
	});