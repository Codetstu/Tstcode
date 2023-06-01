$(document).ready(function() {
    $('#search-form').submit(function(event) {
        event.preventDefault();

        var keyword = $('#keyword').val();
        var minPrice = $('#min-price').val();
        var maxPrice = $('#max-price').val();

        $.ajax({
            url: 'book.json',
            type: 'GET',
            data: {
                keyword: keyword,
                'min-price': minPrice,
                'max-price': maxPrice
            },
            dataType: 'json',
            success: function(response) {
                var searchResults = $('#search-results');
                searchResults.empty();

                if (response.length > 0) {
                    var table = $('<table>');
                    var headerRow = $('<tr>').html('<th>ID</th><th>Book name</th><th>Description</th><th>Price</th><th>Author</th><th>Type</th>');
                    table.append(headerRow);

                    $.each(response, function(index, product) {
                        var row = $('<tr>').html('<td>' + product.id + '</td><td>' + product["Book name"] + '</td><td>' + product.description + '</td><td>' + product.price + '</td><td>' + product.author + '</td><td>' + product.type + '</td>');

                        table.append(row);
                    });

                    searchResults.append(table);
                } else {
                    searchResults.text('No results found.');
                }
            },
            error: function() {
                var searchResults = $('#search-results');
                searchResults.text('Error occurred while searching. Please try again later.');
            }
        });
    });
});

$(document).ready(function() {
    $('#search-form').submit(function(event) {
        event.preventDefault();

        var keyword = $('#keyword').val();
        var minPrice = $('#min-price').val();
        var maxPrice = $('#max-price').val();

        $.ajax({
            url: 'Electric_1.json',
            type: 'GET',
            data: {
                keyword: keyword,
                'min-price': minPrice,
                'max-price': maxPrice
            },
            dataType: 'json',
            success: function(response) {
                var searchResults = $('#search-results');
                searchResults.empty();

                if (response.length > 0) {
                    var table = $('<table>');
                    var headerRow = $('<tr>').html('<th>ID</th><th>Price</th><th>Brand</th><th>Colour</th><th>Product Name</th><th>Wireless Carrier</th><th>Memory Storage Capacity</th><th>Screen Size</th><th>Operating System</th>');

                    table.append(headerRow);

                    $.each(response, function(index, product) {
                        var row = $('<tr>').html('<td>' + product.id + '</td><td>' + product.Price + '</td><td>' + product.Brand + '</td><td>' + product.Colour + '</td><td>' + product.Product_name + '</td><td>' + product.Wirless_carrier_Memory_Storage_Capacity + '</td><td>' + product.Screen_size + '</td><td>' + product.Operating_system + '</td>');


                        table.append(row);
                    });

                    searchResults.append(table);
                } else {
                    searchResults.text('No results found.');
                }
            },
            error: function() {
                var searchResults = $('#search-results');
                searchResults.text('Error occurred while searching. Please try again later.');
            }
        });
    });
});

$(document).ready(function() {
    $('#search-form').submit(function(event) {
        event.preventDefault();

        var keyword = $('#keyword').val();
        var minPrice = $('#min-price').val();
        var maxPrice = $('#max-price').val();

        $.ajax({
            url: 'Electric_2.json',
            type: 'GET',
            data: {
                keyword: keyword,
                'min-price': minPrice,
                'max-price': maxPrice
            },
            dataType: 'json',
            success: function(response) {
                var searchResults = $('#search-results');
                searchResults.empty();

                if (response.length > 0) {
                    var table = $('<table>');
                    var headerRow = $('<tr>').html('<th>ID</th><th>Price</th><th>Brand</th><th>OS</th><th>CPU</th><th>Product_name</th><th>Screen_size</th><th>Computer_memory_size</th><th>Hard_disk_size</th>');

                    table.append(headerRow);

                    $.each(response, function(index, product) {
                        var row = $('<tr>').html('<td>' + product.id + '</td><td>' + product.Price + '</td><td>' + product.Brand + '</td><td>' + product.OS + '</td><td>' + product.CPU + '</td><td>' + product.Product_name + '</td><td>' + product.Screen_size + '</td><td>' + product.Computer_memory_size + '</td><td>' + product.Hard_disk_size + '</td>');



                        table.append(row);
                    });

                    searchResults.append(table);
                } else {
                    searchResults.text('No results found.');
                }
            },
            error: function() {
                var searchResults = $('#search-results');
                searchResults.text('Error occurred while searching. Please try again later.');
            }
        });
    });
});

$(document).ready(function() {
    $('#search-form').submit(function(event) {
        event.preventDefault();

        var keyword = $('#keyword').val();
        var minPrice = $('#min-price').val();
        var maxPrice = $('#max-price').val();

        $.ajax({
            url: 'Perfume.json',
            type: 'GET',
            data: {
                keyword: keyword,
                'min-price': minPrice,
                'max-price': maxPrice
            },
            dataType: 'json',
            success: function(response) {
                var searchResults = $('#search-results');
                searchResults.empty();

                if (response.length > 0) {
                    var table = $('<table>');
                    var headerRow = $('<tr>').html('<th>id</th><th>Price</th><th>Brand</th><th>Ingredients</th><th>Product_name</th><th>Item_weight</th>');
                    table.append(headerRow);

                    $.each(response, function(index, product) {
                        var row = $('<tr>').html('<td>' + product.id + '</td><td>' + product.Price + '</td><td>' + product.Brand + '</td><td>' + product.Ingredients + '</td><td>' + product.Product_name + '</td><td>' + product.Item_weight + '</td>');

                        table.append(row);
                    });

                    searchResults.append(table);
                } else {
                    searchResults.text('No results found.');
                }
            },
            error: function() {
                var searchResults = $('#search-results');
                searchResults.text('Error occurred while searching. Please try again later.');
            }
        });
    });
});
