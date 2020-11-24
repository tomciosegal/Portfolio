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

