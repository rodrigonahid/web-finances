const Modal = {
    open(){
        const modal = document.querySelector(".modal-overlay").classList.add("active");
    },
    close(){
        const modal = document.querySelector(".modal-overlay").classList.remove("active");
    }
}
