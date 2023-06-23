let content = {};

document.addEventListener('DOMContentLoaded', async function () {
    await fetch('content.json')
        .then(response => response.json())
        .then(data => {
            content = data
        })
        .catch(error => {
            console.error('Error:', error);
        });

    loadContent("english")
});

function loadContent(language) {
    loadContentNavbar(language);

    handleChangeLanguage();

    loadContentHeroSection(language)
    loadTitleTech(language)
    loadContentAboutMe(language)
    loadContentPortfolio(language)
    loadContentContact(language)
    loadContentFooter(language)

    closeModalPortfolio();
    showModalPortfolio(language);
    closeImageModal();

    sendWa();
}

function loadContentNavbar(language) {
    const ulNavbar = document.getElementById('ul-navbar');
    ulNavbar.innerHTML = '';

    content[language].navbar.map((data) => {
        ulNavbar.innerHTML += `
            <li class="group lg:grid">
                <a href="${data.href}"
                    class="text-base font-medium lg:text-md xl:text-lg py-2 px-4 flex capitalize">
                    ${data.text}</a>
                <div class="hidden lg:group-hover:block border-b-4 border-indigo-400 rounded-lg"></div>
            </li>
        `
    })

    ulNavbar.innerHTML += `
            <li class="group relative ml-2 group relative lg:flex justify-center z-[2]">
                <button
                    class="text-base lg:text-md xl:text-lg font-medium py-2 px-4 flex items-center group rounded-3xl capitalize">
                    <img src="./images/${language}.webp" class="mr-3 h-[30px]" alt="earth">
                    ${language}
                    <svg class="ml-2 group-hover:rotate-180 transition duration-300 ease-in" width="20"
                        height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                            fill="#000000" />
                    </svg>
                </button>
                <div class="hidden lg:group-hover:block border-b-4 rounded-lg"></div>
                <div
                    class="absolute right-4 lg:right-0 z-[10] hidden group-hover:block top-full min-w-full w-max bg-white drop-shadow-xl rounded-xl">
                    <ul
                        class="text-lg rounded py-2 px-8 space-y-5 max-h-[50vh] lg:max-h-min overflow-auto">
                        <li
                            class="cursor-pointer text-base xl:text-lg hover:underline underline-offset-2 flex items-center gap-3" id="btn-change-language">
                            <img src="./images/${language == 'english' ? 'indonesia' : 'english'}.webp" alt="IND" class="h-[30px]">
                            <p class="capitalize">${language == 'english' ? 'indonesia' : 'english'}</p>
                        </li>
                    </ul>
                </div>
            </li>
        `;
}

function handleChangeLanguage() {
    const buttonChangeLanguage = document.getElementById('btn-change-language');
    buttonChangeLanguage.addEventListener("click", function () {
        console.log('test')
        const languageOnChange = buttonChangeLanguage.querySelector('p').textContent;
        loadContent(languageOnChange)
    });
}

function loadContentHeroSection(language) {
    const contentHero = content[language].hero;
    const heroSection = document.getElementById('content-hero_section');
    heroSection.innerHTML = '';

    heroSection.innerHTML += `
        <p class="font-light text-sm md:text-xl uppercase text-grey">
            ${contentHero.one}
            </p>
        <h2 class="font-[500] text-2xl lg:text-4xl 2xl:text-6xl uppercase text-dark">
            ${contentHero.two}
        </h2>
        <h3 class="font-light text-dark text-base lg:text-2xl">${contentHero.three}</h3>
        <div class="flex gap-5 items-center py-4 lg:py-10">
            <a class="group transform transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5" href="https://github.com/rizatsk" target="_blank">
                <img class="h-[35px] object-contain group-hover:drop-shadow-imageSm" src="./images/github rizat.webp" alt="github">
            </a>
            <a class="group transform transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5" href="https://www.linkedin.com/in/rizat-sakmir-7499951a4/" target="_blank">
                <img class="h-[35px] object-contain group-hover:drop-shadow-imageSm" src="./images/linkedin rizat.webp" alt="linkedin">
            </a>
            <a class="group transform transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5" href="https://www.instagram.com/rz.sk/" target="_blank">
                <img class="h-[35px] object-contain group-hover:drop-shadow-imageSm" src="./images/instagram rizat.webp" alt="instagram">
            </a>
        </div>
        <div class="group lg:text-md transform transition-transform hover:-translate-x-1 hover:-translate-y-1">
            <a class="bg-gradient-primary text-white rounded-md py-3 px-6 lg:py-4 lg:px-10 uppercase font-[400] group-hover:shadow-hoverFly"
                href="#portfolio">${contentHero.button}</a>
        </div>
    `;

    const contentFooter = content[language].footer;
    const divCopyRight = document.getElementById('copyRight');
    divCopyRight.innerText = contentFooter.copyRight
}

function loadTitleTech(language) {
    const contentTech = content[language].tech;
    const h2Tech = document.getElementById('h2-tech');
    h2Tech.innerText = contentTech
}

function loadContentAboutMe(language) {
    const contentAbout = content[language].about;
    const divContentAbout = document.getElementById('content-about');
    divContentAbout.innerHTML = `
        <p class="tracking-widest uppercase text-grey font-[500]">${contentAbout.title}</p>
        <h2 class="font-[500] text-xl 2xl:text-4xl text-dark capitalize py-5">${contentAbout.job}</h2>
        <p class="  py-5">
            ${contentAbout.description}
        </p>
        <div class="group lg:text-md py-5 lg:py-10 transform transition-transform hover:-translate-x-1 hover:-translate-y-1">
            <a class="bg-gradient-primary text-white rounded-md py-3 px-6 lg:py-4 lg:px-10 uppercase font-[400] uppercase group-hover:shadow-hoverFly"
                href="https://drive.google.com/file/d/1_SuQWwe7MhLq3j-91GRv155nSOiTdHz8/view?usp=sharing" target="_blank">${contentAbout.button}</a>
        </div>
    `
}

function loadContentPortfolio(language) {
    const titlePortfolio = content[language].portfolio.title;
    const divTitlePortfolio = document.getElementById('title-portfolio');
    divTitlePortfolio.innerHTML = `
        <p class="tracking-widest uppercase text-grey font-[500]">${titlePortfolio.one}</p>
        <h2 class="font-[500] text-xl lg:text-2xl 2xl:text-4xl text-dark capitalize py-5">${titlePortfolio.two}</h2>
    `;

    const contentPortfolio = content[language].portfolio.content;
    const divContentPortfolio = document.getElementById('content-portfolio')
    divContentPortfolio.innerHTML = '';

    contentPortfolio.map((data) => {
        divContentPortfolio.innerHTML += `
            <div
                class="group rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-2xl">
                <div
                    class="group h-[150px] xl:h-[250px] overflow-hidden flex justify-center items-center bg-grey relative cursor-pointer" id="open-modal-portfolio" key="${data.key}" title="${data.title}">
                    <img class="h-[150px] xl:h-[250px] object-contain z-10" src="./images/${data.image}"
                        alt="${data.altImage}">
                    <div
                        class="z-1 opacity-0 group-hover:opacity-100 transition duration-500 absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    </div>
                </div>
                <div class="p-4">
                    <h2 class="tracking-widest uppercase text-dark font-[500] pb-2 md:pb-4">${data.title}</h2>
                    <p class="text-sm md:text-base text-dark max-character-3">${data.content}</p>
                </div>
            </div>
        `
    })
}

function loadContentContact(language) {
    const titleContact = content[language].contact.title;
    const divTitleContact = document.getElementById('title-contact');
    divTitleContact.innerHTML = `
        <p class="tracking-widest uppercase text-grey font-[500]">${titleContact.one}</p>
        <h2 class="font-[500] text-xl lg:text-2xl 2xl:text-4xl text-dark capitalize py-5">${titleContact.two}</h2>
    `;

    const formContact = content[language].contact.form;
    const divFormContact = document.getElementById('form-contact');
    divFormContact.innerHTML = `
        <div
            class="flex flex-col gap-5 w-full font-[500] lg:text-[15px] 2xl:text-[18px] px-5 md:px-14 space-y-2">
            <div>
                <div class="flex justify-center">
                    <img class="w-[60px] object-contain" src="./images/whathsapp.webp" alt="whathsapp">
                </div>
                <h2 class="text-center italic text-dark">${formContact.title}</h2>
            </div>
            <div class="group form">
                <label class="text-dark text-base capitalize" for="form-send-message-name">${formContact.name.label}: </label>
                <input type="text" id="form-send-message-name" name="name" placeholder="${formContact.name.placeholder}"
                    class="w-full rounded-[8px] py-3 pl-2 mt-1 text-sm border-b-2 focus:outline-none focus:ring-indigo-400 focus:ring-1 focus:border-indigo-400"
                    required>
            </div>
            <div class="group form">
                <label class="text-dark text-base capitalize" for="form-send-message-email">${formContact.email.label}: </label>
                <input type="email" id="form-send-message-email" name="email" placeholder="${formContact.email.placeholder}"
                    class="w-full rounded-[8px] py-3 pl-2 mt-1 text-sm border-b-2 focus:outline-none focus:ring-indigo-400 focus:ring-1 focus:border-indigo-400">
            </div>
            <div class="group form">
                <label class="text-dark text-base capitalize" for="form-send-message-phone">${formContact.phone.label}:</label>
                <input type="number" id="form-send-message-phone" name="phone"
                    class="w-full rounded-[8px] py-3 pl-2 mt-1 text-sm border-b-2 focus:outline-none focus:ring-indigo-400 focus:ring-1 focus:border-indigo-400"
                    placeholder="${formContact.phone.placeholder}">
            </div>
            <div class="group form">
                <label class="text-dark text-base capitalize" for="form-send-message-message">${formContact.message.label}: </label>
                <textarea type="text" id="form-send-message-message" name="message"
                    placeholder="${formContact.message.placeholder}"
                    class="w-full rounded-[8px] py-3 pl-2 mt-1 text-sm border-b-2 focus:outline-none focus:ring-indigo-400 focus:ring-1 focus:border-indigo-400"
                    required></textarea>
            </div>
            <div class="self-end">
                <button type="submit"
                    id="btn-send-message"
                    class="text-sm lg:text-base 2xl:text-lg bg-gradient-primary px-7 py-3 rounded-lg text-white capitalize">${formContact.button}</button>
            </div>
        </div>
    `;

    const listContact = content[language].contact.contact;
    const divListContact = document.getElementById('list-contact');
    divListContact.innerHTML = '';

    listContact.map((data) => {
        divListContact.innerHTML += `
            <div class="flex gap-3">
                <img class="w-[40px] 2xl:w-[50px] object-contain" src="./images/${data.image}.webp" alt="${data.key}">
                <div class="self-end">
                    <p class="text-dark font-[700]">${data.one}</p>
                    <p class="text-grey font-light text-sm">${data.two}</p>
                </div>
            </div>
        `
    })
}


function loadContentFooter(language) {
    const contentNavbar = content[language].navbar;
    const divNavbarFooter = document.getElementById('navbar-footer');
    divNavbarFooter.innerHTML = '';

    contentNavbar.map((data) => {
        divNavbarFooter.innerHTML += `
            <a href="${data.href}" class="text-sm font-[700] text-gradient-primary-footer py-2 px-4 flex uppercase tracking-widest">
                ${data.text}
            </a>
        `
    })
}

function showModalPortfolio(language) {
    const divKey = document.querySelectorAll('#open-modal-portfolio');
    divKey.forEach(function (item) {
        item.addEventListener('click', function () {
            const key = this.getAttribute('key');
            const title = this.getAttribute('title');
            const dataContent = content[language].portfolio.content
            const dataContentKey = dataContent.find(item => item.key === key);
            console.log(dataContentKey)

            // open modal
            const modalPortfolio = document.getElementById('modal-portfolio');
            modalPortfolio.classList.remove('invisible');

            // fill modal
            const divTitleModalPortfolio = document.getElementById('title-modal-portfolio');
            divTitleModalPortfolio.innerText = title;

            loadContentModalPortFolio(dataContentKey.modal, key);

            carousel();

            showImageModal();
        })
    })

    const buttonCloseModal = document.getElementById('close-modal-portfolio');
    if (buttonCloseModal) {
        buttonCloseModal.addEventListener('click', function () {
            const modalPortfolio = document.getElementById('modal-portfolio')
            modalPortfolio.classList.add('invisible')
        })
    }

}

function closeModalPortfolio() {
    const modalPortfolio = document.getElementById('modal-portfolio')
    if (modalPortfolio) {
        if (!modalPortfolio.classList.contains('invisible')) {
            modalPortfolio.classList.add('invisible')
        }
    }
}


function loadContentModalPortFolio(content, key) {
    const divImagesModalPortfolio = document.querySelector('.images-modal-portfolio');
    console.log(divImagesModalPortfolio)
    divImagesModalPortfolio.innerHTML = '';

    content.images.map((data, index) => {
        if (index === 0) {
            divImagesModalPortfolio.innerHTML += `
                <li class="h-[200px] lg:h-[300px] rounded-lg overflow-hidden">
                    <img class="h-[200px] lg:h-[300px] object-contain mx-auto large-image-modal cursor-pointer"
                        src="./images/${data}" alt="${key}">
                </li>
            `
        } else {
            divImagesModalPortfolio.innerHTML += `
                <li class="h-[200px] lg:h-[300px] rounded-lg overflow-hidden hidden">
                    <img class="h-[200px] lg:h-[300px] object-contain mx-auto large-image-modal cursor-pointer"
                    src="./images/${data}" alt="${key}">
                </li>
            `
        }
    });

    let contentTitle = '';
    content.framework.content.map((data) => {
        contentTitle += `<li class="pl-2">${data}</li>`
    })

    let contentTools = '';
    content.tools.content.map((data) => {
        contentTools += `<li class="pl-2">${data}</li>`
    })

    let contentFitur = '';
    content.fitur.content.map((data) => {
        contentFitur += `<li class="pl-2">${data}</li>`
    })

    let contentJobsDesk = '';
    content.jobsDesk.content.map((data) => {
        contentJobsDesk += `<li class="pl-2">${data}</li>`
    })

    const divContentModalPortfolio = document.getElementById('content-modal-portfolio');
    divContentModalPortfolio.innerHTML = `
        <div class="my-5">
            <p class="text-md text-gradient-primary-modal italic capitalize font-[600]">
                ${content.processTime.title}
            </p>
            <div class="flex items-center gap-2">
                <img class="h-[20px] object-contain" src="./images/date.webp" alt="date">
                <p>${content.processTime.content}</p>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
                <p class="text-md text-gradient-primary-modal italic capitalize font-[600]">
                    ${content.framework.title}
                </p>
                <ul class="py-1 grid grid-cols-2 list-['»'] pl-2">
                    ${contentTitle}
                </ul>
            </div>
            <div>
                <p class="text-md text-gradient-primary-modal italic capitalize font-[600]">
                    ${content.tools.title}
                </p>
                <ul class="py-1 list-['»'] pl-2">
                    ${contentTools}
                </ul>
            </div>
            <div>
                <p class="text-md text-gradient-primary-modal italic capitalize font-[600]">
                    ${content.fitur.title}
                </p>
                <ul class="py-1 list-['»'] grid grid-cols-2  pl-2">
                    ${contentFitur}
                </ul>
            </div>
            <div>
                <p class="text-md text-gradient-primary-modal italic capitalize font-[600]">
                    ${content.jobsDesk.title}
                </p>
                <ul class="py-1 list-['»'] grid grid-cols-2  pl-2">
                    ${contentJobsDesk}
                </ul>
            </div>
        </div>
        <div class="mt-5">
            <p class="text-md text-gradient-primary-modal italic capitalize font-[600]">
                ${content.description.title}
            </p>
            <p>${content.description.content}</p>
        </div>
    `
}

function carousel() {
    let currentSlideId = 1;

    const sliderElement = document.getElementById('slider');
    totalSlides = sliderElement.childElementCount;


    // Next
    const buttonNextCarousel = document.getElementById('button-next-carousel');
    buttonNextCarousel.addEventListener('click', function () {
        if (currentSlideId == totalSlides) {
            currentSlideId = 1;
            showSlide();
        } else if (currentSlideId < totalSlides) {
            currentSlideId++;
            showSlide();
        }
    })

    // Prev
    const buttonPrevCarousel = document.getElementById('button-prev-carousel');
    buttonPrevCarousel.addEventListener('click', function () {
        if (currentSlideId == 1) {
            currentSlideId = totalSlides;
            showSlide();
        } else if (currentSlideId > 1) {
            currentSlideId--;
            showSlide();
        }
    })

    function showSlide() {
        const slides = document.getElementById('slider').getElementsByTagName('li');
        for (let index = 0; index < totalSlides; index++) {
            const element = slides[index];
            if (currentSlideId === (index + 1)) {
                element.classList.remove('hidden')
            } else {
                element.classList.add('hidden')
            }
        }
    }
}

function showImageModal() {
    const img = document.querySelectorAll('.large-image-modal');
    img.forEach(function (item) {
        item.addEventListener('click', function () {
            const src = this.getAttribute('src');
            const divImageModal = document.getElementById('image-modal');
            divImageModal.classList.remove('hidden');

            const imgImageModal = document.getElementById('img-image-modal');
            imgImageModal.src = src;
        })
    });

}

function closeImageModal() {
    const btnCloseImageModal = document.getElementById('button-close-image-modal');
    btnCloseImageModal.addEventListener('click', function () {
        const divImageModal = document.getElementById('image-modal');
        divImageModal.classList.add('hidden');
    })

    const imgImageModal = document.getElementById('img-image-modal');
    imgImageModal.addEventListener('click', function () {
        const divImageModal = document.getElementById('image-modal');
        divImageModal.classList.add('hidden');
    })
}

function sendWa() {
    const h = (new Date()).getHours();

    let waktu = '';
    if (h >= 4 && h < 10) { waktu = "Selamat Pagi" };
    if (h >= 10 && h < 15) { waktu = "Selamat Siang" };
    if (h >= 15 && h < 18) { waktu = "Selamat Sore" };
    if (h >= 18 || h < 4) { waktu = "Selamat Malam" };

    const btnSendMessage = document.getElementById('btn-send-message');
    btnSendMessage.addEventListener('click', function () {
        const walink = 'https://api.whatsapp.com/send',
            phone = '6287782987067',
            walink2 = 'Assalamualaikum Rizat,' + waktu;

        /* Call Input Form */
        const nama = document.getElementById('form-send-message-name').value,
            email = document.getElementById('form-send-message-email').value,
            phone_user = document.getElementById('form-send-message-phone').value,
            message = document.getElementById('form-send-message-message').value;

        if (("" != message) && ("" != nama)) {

            /* Final Whatsapp URL */
            const blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
                'Name : ' + nama + '%0A' +
                'Email Address : ' + email + '%0A' +
                'Phone : ' + phone_user + '%0A' +
                'Message : ' + message + '%0A';

            /* Whatsapp Window Open */
            window.open(blanter_whatsapp, '_blank');
        }
    });
}