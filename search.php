<?php

try {
    $keyword = $_GET['keyword'];
    $minPrice = $_GET['min-price'];
    $maxPrice = $_GET['max-price'];

    $bookData = json_decode(file_get_contents('book.json'), true);
    $electric_1Data = json_decode(file_get_contents('Electric_1.json'), true);
    $electric_2Data = json_decode(file_get_contents('Electric_2.json'), true);
    $perfumeData = json_decode(file_get_contents('Perfume.json'), true);

    $products = array_merge($bookData, $electric_1Data, $electric_2Data, $perfumeData);

    $results = array_filter($products, function ($product) use ($keyword, $minPrice, $maxPrice) {
        $idMatch = stripos($product['id'], $keyword) !== false;
        $nameMatch = stripos($product['Product_name'], $keyword) !== false;
        $priceMatch = $product['Price'] >= $minPrice && $product['Price'] <= $maxPrice;
        return $idMatch || $nameMatch || $priceMatch;
    });

    header('Content-Type: application/json');
    echo json_encode($results);
} catch (Exception $e) {
    // Handle the error and display a custom message
    $errorMessage = 'Server Details Missing';
    echo json_encode(['error' => $errorMessage]);
}


