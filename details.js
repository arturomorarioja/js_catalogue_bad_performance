window.showProductDetails = function (product) {
    const dialog = document.getElementById('product-dialog');
    const body = document.getElementById('dialog-body');
    body.innerHTML = '<div class="dialog-content"><img src="' + product.image + '" alt=""><h2>' + product.name + '</h2><p>' + product.description + '</p><p class="price">€' + product.price.toFixed(2) + '</p></div>';
    dialog.showModal();
};
