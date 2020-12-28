// Close the modal when user click on X
function closeModal() { 
    // Get the modal list by class
    var modals = document.getElementsByClassName("modal");

    for (i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
}

// Open modal corresponding to button id
function openModal(buttonId) {
    switch(buttonId) {
        case 'btn-jungle':
            document.getElementById("modal-jungle").style.display = "block";
            break;
        case 'btn-seafood':
            document.getElementById("modal-seafood").style.display = "block";
            break;
        case 'btn-sugar':
            document.getElementById("modal-sugar").style.display = "block";
            break;
        case 'btn-burger':
            document.getElementById("modal-burger").style.display = "block";
            break;
    }  
}
