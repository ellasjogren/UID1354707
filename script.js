
// CART
function showCart() {
    var cartPopup = document.getElementById("cartPopup");
    if (cartPopup.style.display === "none" || cartPopup.style.display === "") {
        cartPopup.style.display = "block";
    } else {
        cartPopup.style.display = "none";
    }
}
