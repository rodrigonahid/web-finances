const Modal = {
    open(){
        const modal = document.querySelector(".modal-overlay").classList.add("active");
        console.log(modal)
    },
    close(){
        const modal = document.querySelector(".modal-overlay").classList.remove("active");
    }
}
