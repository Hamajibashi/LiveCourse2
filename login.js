import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.prod.min.js';

const url = 'https://vue3-course-api.hexschool.io/v2';
          const path = 'mylmii';

          const usernameInput = document.querySelector("#username");
          const pwdInput = document.querySelector("#password");
          const loginBtn = document.querySelector("#login");

loginBtn.addEventListener('click', login);
function login(){
    
    const username = usernameInput.value;
    const password = pwdInput.value;

    const user = {
        username,
        password
    }
    console.log(username, password);

    axios.post(`${url}/admin/signin`,user)
    .then( res=>{
        console.log(res);
        const {token,expired} = res.data;
        console.log(token,expired);
        document.cookie = `mylToken=${token}; expires=${new Date(expired)};`;
        window.location="products.html"
    })
    .catch( err=>{
        console.dir(err);
        alert('❌您的帳號密碼錯誤！');
    })
}
