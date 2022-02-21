import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.prod.min.js';

const app = {
    data(){
        return{
            user:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
            axios.post(api,this.user)
    .then( res=>{
        console.log(res);
        //從 res 中取出 Token 以及 expired 期限
        const {token,expired} = res.data;
        document.cookie = `mylToken=${token}; expires=${new Date(expired)};`;
        
        //登入成功後轉到 products 頁面
        window.location="products.html"
    })
    .catch( err=>{
        console.dir(err);
        alert('❌您的帳號或是密碼錯誤！');
    })
        }
    }
}
createApp(app).mount('#app');
//需改寫成 module 型態！

// const url = 'https://vue3-course-api.hexschool.io/v2';
// const path = 'mylmii';

//           const usernameInput = document.querySelector("#username");
//           const pwdInput = document.querySelector("#password");
//           const loginBtn = document.querySelector("#login");

// loginBtn.addEventListener('click', login);
// function login(){
    
//     const username = usernameInput.value;
//     const password = pwdInput.value;

//     const user = {
//         username,
//         password
//     }
//     console.log(username, password);

//     axios.post(`${url}/admin/signin`,user)
//     .then( res=>{
//         console.log(res);
//         const {token,expired} = res.data;
//         console.log(token,expired);
//         document.cookie = `mylToken=${token}; expires=${new Date(expired)};`;
//         window.location="products.html"
//     })
//     .catch( err=>{
//         console.dir(err);
//         alert('❌您的帳號密碼錯誤！');
//     })
// }
