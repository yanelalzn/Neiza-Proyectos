const filterElements = document.querySelector(".list-projects");
const galleryItems = document.querySelectorAll(".galeria-card");

filterElements.addEventListener("click",(event)=>{
    if(event.target.classList.contains("filer-item")){
        filterElements.querySelector(".active").classList.remove("active")
        event.target.classList.add("active")
    }
})
