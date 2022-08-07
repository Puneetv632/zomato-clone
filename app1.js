let location_b = document.getElementById('location_b')
let search_arrow = document.getElementById('search_arrow')
let search_address = document.getElementById('search_address')

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