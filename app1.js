let location_b = document.getElementById('location_b');
let search_arrow = document.getElementById('search_arrow');
let search_address = document.getElementById('search_address');

search_address.addEventListener('focusin', ()=>{
    location_b.style.visibility = "visible";
    search_arrow.style.transform = "rotate(180deg)";
    location_b.style.opacity = 1;
})
search_address.addEventListener('focusout', ()=>{
    location_b.style.visibility = "hidden";
    search_arrow.style.transform = "rotate(0deg)";
    location_b.style.opacity = 0;
})

let email = document.getElementById('email');
let phone = document.getElementById('phone');
let emails = document.getElementById('emails');
let phones = document.getElementById('phones');
let emails_phones = document.getElementById('emails_phones');
phone.addEventListener('click', ()=>{
    emails_phones.classList.add('show_more');
    email.checked = false;
});
email.addEventListener('click', ()=>{
    emails_phones.classList.remove('show_more');
    phone.checked = false;
});

let country_button = document.getElementById('country_button');
let country = document.getElementById('country');

window.addEventListener('click',(e) => {
    if (e.target.id == "country_button") {
        country.classList.add('country_java');
    } else {
        country.classList.remove('country_java')
    }
})