const burger = document.getElementById('burger');

if(burger){
    const nav = document.getElementById('nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
        burger.classList.toggle('active'); // ← вот оно!
        document.body.classList.toggle('nav-open');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            nav.classList.remove('show');
            burger.classList.remove('active'); // ← убираем крестик
            document.body.classList.remove('nav-open');
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}


const reveals = document.querySelectorAll('.reveal');

if(reveals){
    function revealOnScroll() {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }
    window.addEventListener("scroll", revealOnScroll);

    window.addEventListener('load', revealOnScroll)
}


const form = document.getElementById('emailDownloadForm');
if(form){
    const emailInput = document.getElementById('userEmail');
    const message = document.getElementById('formMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (email) {
            message.textContent = "";

            const link = document.createElement('a');
            link.href = 'assets/images/book.pdf';
            link.download = 'Психология_Риска.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            message.textContent = "Пожалуйста, введите email";
            message.style.color = "red";
        }
    });
}






const faqItems = document.querySelectorAll('.faq-item');
if(faqItems){
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
        });
    });
}





document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookieBanner");
    const button = document.getElementById("cookieAccept");

    if (!localStorage.getItem("cookieAccepted")) {
        banner.classList.add("show");
    }

    button.addEventListener("click", () => {
        localStorage.setItem("cookieAccepted", "true");
        banner.classList.remove("show");
    });
});


const galleryData = {
    "1": {
        img: "https://picsum.photos/id/1015/800/600",
        title: "Страх и решение",
        text: "Когда человек сталкивается с неизвестностью, страх блокирует действия. В книге разобрано, как его преодолеть и идти вперёд."
    },
    "2": {
        img: "https://picsum.photos/id/1005/800/600",
        title: "Риск и свобода",
        text: "Риск может быть не врагом, а возможностью. Но только если он осознан и управляем."
    },
    "3": {
        img: "https://picsum.photos/id/1025/800/600",
        title: "Эмоции и логика",
        text: "Книга показывает, как эмоции захватывают решения, и как вернуть контроль."
    }
};

function openModal(id) {
    const modal = document.getElementById("modal");
    const data = galleryData[id];
    document.getElementById("modalImg").src = data.img;
    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalText").innerText = data.text;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.addEventListener("scroll", () => {
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});
document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) {
        closeModal();
    }
});