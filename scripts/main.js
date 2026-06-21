const images = [
    'assets/images/book1.png',
    'assets/images/book2.png',
    'assets/images/book3.png',
    'assets/images/book4.png',
    'assets/images/book5.png',
    'assets/images/book6.png',
    'assets/images/book7.png',
    'assets/images/book8.png',
    'assets/images/book9.png'
];

let currentIndex = 0;

const bookImage = document.getElementById('bookImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    if (bookImage) {
        bookImage.src = images[currentIndex];
    }
}

if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage();
        }
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        if (nextBtn) nextBtn.click();
    } else if (e.key === 'ArrowLeft') {
        if (prevBtn) prevBtn.click();
    }
});

updateImage();

document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerToggle');
    const navigation = document.getElementById('mainNav');

    if (burgerBtn && navigation) {
        burgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navigation.classList.toggle('open');
            burgerBtn.classList.toggle('active');
            
            if (navigation.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 480) {
                if (!navigation.contains(e.target)) {
                    navigation.classList.remove('open');
                    burgerBtn.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });

        navigation.querySelectorAll('.nav-block a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 480) {
                    navigation.classList.remove('open');
                    burgerBtn.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 480) {
                navigation.classList.remove('open');
                burgerBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});