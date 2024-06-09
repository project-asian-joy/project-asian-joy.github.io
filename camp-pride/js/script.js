function load_page(load, p1, p2) { 

    var loader = document.getElementById(String(load));
    var page1 = document.getElementById(String(p1));
    var page2 = document.getElementById(String(p2));

    console.log( "first" + load + " " + p1 + p2);

    console.log( "second" + loader + " " + p1 + p2);

    if (load === 'loader_left') {
        loader.style.left = "0";
    } else if (load === 'loader_right') {
        loader.style.left = "-100%";
    } else {
        loader.style.opacity = "0";
        loader.style.transition = 'opacity 2s ease-in';
    }

    setTimeout(function() { 
        if (load === 'loader_left') {
            loader.style.left = "-100%";
        } else if (load === 'loader_right') {
            loader.style.left = "0";
        } else {
            loader.style.opacity = "1";
        }
        page1.style.display = "none";
        page2.style.display = "block";
     }, 200)
 }

