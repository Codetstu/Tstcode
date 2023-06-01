fetch("Electric_2.json")
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
                  <td>${product.OS}</td>
                  <td>${product.CPU}</td>
                  <td>${product.Product_name}</td>
                  <td>${product.Screen_size}</td>
                  <td>${product.Computer_memory_size}</td>
                  <td>${product.Hard_disk_size}</td>
              </tr>
              `;
        }

        placeholder.innerHTML = out;
    });
