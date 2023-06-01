fetch("perfume.json")
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
                  <td>${product.Price}</td>
                  <td>${product.Brand}</td>
                  <td>${product.Ingredients}</td>
                  <td>${product.Product_name}</td>
                  <td>${product.Item_weight}</td>
              </tr>
              `;
        }

        placeholder.innerHTML = out;
    });
