let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});
function toggleReadMore() {
    var moreContent = document.getElementById("more-content");
    var btn = document.getElementById("read-more-btn");
    
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        moreContent.style.display = "none";
        btn.innerText = "Read More";
    }
}

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
    
});
function sendToWhatsApp() {
    // Mengambil nilai dari form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Memeriksa apakah semua field telah diisi
    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Membuat pesan dengan format yang benar
    var text = "Booking Request:%0A%0A" +
              "Name: " + encodeURIComponent(name) + "%0A" +
              "Email: " + encodeURIComponent(email) + "%0A" +
              "Phone: " + encodeURIComponent(phone) + "%0A" +
              "Message: " + encodeURIComponent(message);

    // Membuat URL WhatsApp dengan pesan yang telah diformat
    var whatsappURL = "https://wa.me/6285230873290?text=" + text;

    // Membuka WhatsApp di tab baru
    window.open(whatsappURL, '_blank');
}
