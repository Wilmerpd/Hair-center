// ====== LÓGICA DEL CARRITO LATERAL DESLIZANTE ======
const cartIcon = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const addCartButtons = document.querySelectorAll('.btn-add-cart');

function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
}

function closeCart() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
}

// Eventos de apertura y cierre del panel del carrito
cartIcon.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Vincular botones "Añadir al carrito" para abrir el panel visual
addCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });
});


// ====== LÓGICA DEL AGENDADOR POR WHATSAPP ======
document.getElementById('btn-reservar').addEventListener('click', function() {
    const sucursal = document.getElementById('sucursal-select').value;
    const servicio = document.getElementById('servicio-select').value;
    const telefonoWhatsApp = "18094389500"; 
    
    const mensaje = `Hola Peluca Hair Center, estuve revisando su catálogo web y deseo programar una cita:\n\n` +
                    `📍 *Sucursal deseada:* ${sucursal}\n` +
                    `💇‍♀️ *Servicio solicitado:* ${servicio}\n\n` +
                    `Quedo a la espera de que me confirmen los horarios libres para completar la reserva.`;
    
    const mensajeCodificado = encodeURIComponent(mensaje);
    const enlaceFinal = `https://wa.me/${telefonoWhatsApp}?text=${mensajeCodificado}`;
    window.open(enlaceFinal, '_blank');
});