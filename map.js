document.addEventListener('DOMContentLoaded', (event) => {
    
    const coffeeShopLocation = [17.09779, 96.22225]; 
    
    const map = L.map('map').setView(coffeeShopLocation, 15);
    

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker(coffeeShopLocation).addTo(map)
        .bindPopup('<b>Bean Boutique Coffee Shop</b><br>Our location.').openPopup();
});

