// Get the modal
function modal(id) {
    var modal = document.getElementById('myModal');
    var img = document.getElementById(id);
    var modalImg = document.getElementById("modal-img");
        modalImg.src = img.src;
        modal.style.display = "block";
        img.src;
        // captionText.innerHTML = this.alt;
    // var span = document.getElementsByClassName("close")[0];
    // span.onclick = function() { 
    //     modal.style.display = "none";
}
function close_modal() {
    console.log(this);
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    span = modal.style.display = "none";
}