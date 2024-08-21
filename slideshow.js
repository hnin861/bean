document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var images = [];
    var time = 2000; 

    images[0] = "image/enjoycoffee.jpg";
    images[1] = "image/seasonal.webp";
    images[2] = "image/community_events_boost_sales.jpg";

    function changeImg() {
        var slideElement = document.getElementById("coffee-photo");
        console.log(slideElement); 

        slideElement.src = images[i]; 

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(changeImg, time);
    }

    changeImg();
});