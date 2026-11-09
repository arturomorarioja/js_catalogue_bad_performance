document.addEventListener('DOMContentLoaded', function () {
    var grid = document.getElementById('products');
    var search = document.getElementById('search');
    var count = document.getElementById('count');

    function render(items) {
        grid.replaceChildren();
        items.forEach(function (product) {
            var card = document.createElement('div');
            card.className = 'product';
            card.innerHTML = '<img src="' + product.image + '" alt="' + product.name + '">' +
                '<div class="product-body"><h3>' + product.name + '</h3><p class="price">€' + product.price.toFixed(2) +
                '</p><button type="button">Details</button></div>';
            card.querySelector('button').addEventListener('click', function () {
                window.showProductDetails(product);
            });
            grid.appendChild(card);
            count.textContent = grid.children.length + ' products';
        });
        if (items.length === 0) count.textContent = '0 products';
    }

    search.addEventListener('input', function () {
        var query = search.value.trim().toLowerCase();
        render(window.PRODUCTS.filter(function (product) {
            return product.name.toLowerCase().includes(query);
        }));
    });
    document.getElementById('close-dialog').addEventListener('click', function () {
        document.getElementById('product-dialog').close();
    });
    render(window.PRODUCTS);
});
