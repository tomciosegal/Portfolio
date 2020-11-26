const posts = {
    create(){
        const post = document.querySelector('#title');
        const content = document.querySelector('#post_text');
        const image =document.querySelector('#image');
        const lead = document.querySelector('#post_lead');
        
        const posts = firebase.database().ref('posts');
        const newPost = posts.push();
        newPost.set({
            title: post.value,
            image: image.value,
            lead: lead.value,
            date: new Date().getTime(),
            content: content.value
        }).then(() => {
            alert('Post saved!');
            location.href = './index.html';
        })
    },
    
    getAllPosts(){
        const posts = firebase.database().ref().child('posts');
        posts.once('value', snapshot => {
            const list =  document.querySelector('#posts');
            list.innerHTML = '';
            snapshot.forEach(post => {
                const li = document.createElement('li');
                li.innerHTML = post.val().title;
                
                const removeBtn = document.createElement('button');
                removeBtn.innerHTML = 'Delete post';
                removeBtn.dataset.id = post.key;
                removeBtn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    firebase.database().ref('posts').child(id).remove();
                    this.getAllPosts();
                });
                li.appendChild(removeBtn);
                
                list.appendChild(li);
            })
        })   
    },
}

if(document.querySelector('#posts')){
    posts.getAllPosts();
}

if(document.querySelector('#add_post')){
    document.querySelector('#add_post').addEventListener('click', posts.create);
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

const url = new URL(location.href);
const id = url.searchParams.get('id');

const post = firebase.database().ref().child('posts').child(id);

post.once('value').then(data => {
    const date = new Date(data.val().date);

    document.querySelector('#title').innerHTML = data.val().title;
    document.querySelector('#lead').innerHTML = data.val().lead;
    document.querySelector('#content').innerHTML = data.val().content;
    document.querySelector('#date').innerHTML =`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    document.querySelector('#image').src = data.val().image;
})
