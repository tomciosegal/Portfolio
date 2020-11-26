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

const firebaseConfig = {
    apiKey: "AIzaSyB5x17MeRrma1XPPsO5ILyX-8xiAmNncaE",
    authDomain: "blog-ad72f.firebaseapp.com",
    databaseURL: "https://blog-ad72f.firebaseio.com",
    projectId: "blog-ad72f",
    storageBucket: "blog-ad72f.appspot.com",
    messagingSenderId: "568653500752",
    appId: "1:568653500752:web:8d56bdae093703b4759c55" 
  };

  firebase.initializeApp(firebaseConfig);

    const posts = firebase.database().ref().child('posts');
    posts.once('value', snapshot => {
        const list =  document.querySelector('#posts');
    
        snapshot.forEach(post => {
            const date = new Date(post.val().date);

            const item = `
            <a href="post.html?id=${post.key}" class="blog-link"> 
                <div class="fade-wrap">
                    <div class="thumb-1 image" style="background-image: url('${post.val().image}')"></div>
                    <h4 class="label bold">${post.val().title}</h4>
                    <h6 class="date underline">${date.getDate()}/${date.getMonth()}/${date.getFullYear()}</h6>
                    <p class="break-all">
                        ${post.val().lead}
                    </p>
                </div>    
            </a>`;
            
            list.innerHTML += item;
        })

        const blogLinks = document.querySelectorAll('.blog-link')
        for(let blog of blogLinks){
            blog.addEventListener('mouseover', fadeIn);
            blog.addEventListener('mouseout', fadeOut);
        }

    })