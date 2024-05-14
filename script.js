function search_website(event) {
    event.preventDefault(); // Prevent the default form submission action
    let input = document.getElementById('searchbar').value.toLowerCase();
    let x = document.querySelectorAll('.Website'); // Use querySelectorAll for better performance
    
    x.forEach(item => {
        let itemName = item.textContent.toLowerCase();
        if (itemName.includes(input)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
}
document.getElementById('add-to-cart').addEventListener('click', function() {
    var quantity = document.getElementById('quantity').value;
    alert('Added ' + quantity + ' to cart!');
  });
  