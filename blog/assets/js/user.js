const loginSettings = {
    
    checkIsAuth(){
        let url = location.href;
        url = url.split('/');
        url = url[url.length - 1];
       
        if(!sessionStorage.getItem('logged') && url !== 'login.html'){
            location.href = '../login.html';
        }
        else if(sessionStorage.getItem('logged') && url === 'login.html'){
            location.href = './panel/index.html';
        }
    },
    
    login(){
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(response => {
            sessionStorage.setItem('logged', true);
            location.href = './panel/index.html';
        })
        .catch(error => {
            alert('Incorrect login!');
        })
    },
    
    logout(){
        if(confirm('Sure You want to logout?')){
            firebase.auth().signOut().then(() => {
                sessionStorage.removeItem('logged');
                location.href = '../login.html';
            });
        }
    }
    
}

loginSettings.checkIsAuth();

if(document.querySelector('#login')){
    document.querySelector('#login').addEventListener('click', loginSettings.login);
}


if(document.querySelector('#logout')){
    document.querySelector('#logout').addEventListener('click', loginSettings.logout);
}


