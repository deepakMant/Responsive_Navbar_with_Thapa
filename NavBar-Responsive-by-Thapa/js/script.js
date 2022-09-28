const myFunction = () => {
    var showhide = document.getElementById('mylink');

    if (showhide.style.display === "block"){
        showhide.style.display = "none";
    } else {
        showhide.style.display = "block";
    }
}