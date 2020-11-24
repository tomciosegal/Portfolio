function fadeIn(){
    for(let blog of document.querySelectorAll('.blog-link')){
        blog.style.opacity = 0.5;
    }
    this.style.opacity = 1;
}

function fadeOut(){
     for(let blog of document.querySelectorAll('.blog-link')){
        blog.style.opacity = 1;
    }
}
