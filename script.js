function contrast()
 {
    var x = document.getElementById("image");
    var y = document.getElementById("contrast").value;
    x.style.filter=`contrast(${y}%)`;
}

function brightness()
 {
    var x = document.getElementById("image");
    var y = document.getElementById("brightness").value;
    x.style.filter=`brightness(${y}%)`;
}

function saturate()
 {
    var x = document.getElementById("image");
    var y = document.getElementById("saturate").value;
    x.style.filter=`saturate(${y}%)`;
}

function uploadFile(){
    var fileInput = document.getElementById("filename");
    var imageFile = fileInput.files[0];
    var blogUrl = URL.createObjectURL(imageFile);
    var image = document.getElementById("image");

    image.src = blogUrl;
}