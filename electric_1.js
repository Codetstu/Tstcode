fetch("Electric_1.json")
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
                    <td>${product["Price"]}</td>
                    <td>${product.Brand}</td>
                    <td>${product.Colour}</td>
                    <td>${product.Product_name}</td>
                    <td>${product.Wireless_carrier}</td>
                    <td>${product.Memory_storage_capacity}</td>
                    <td>${product.Screen_size}</td>
                    <td>${product.Operating_system}</td>
                </tr>
                `;
        }

        placeholder.innerHTML = out;
    });