import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.prod.min.js';

const app = {
    data(){
        return{
            apiUrl:'https://vue3-course-api.hexschool.io/v2',
            apiPath:'mylmii',
            temp:{},
            products:[]
              }
           },
    methods:{
        checkLogin(){ 
            // 確認是否登入
                const url = `${this.apiUrl}/api/user/check`
                axios.post(url)
                .then(res=>{
                  console.log(res.data);
                  this.getProduct();
                })
                .catch(err=>{
                  console.log(err);
                  alert(err.data.message);
                  window.location="login test.html";
                })
        },
        getProduct(){
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
            axios.get(url)
                .then(res=>{
                    this.products = res.data.products;
                })
                .catch(err=>{
                    console.log(err);
                })
        },
        openProduct(item){
            this.temp = item;
        }
    },
    mounted(){
        // 取得 Token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)mylToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
              
        axios.defaults.headers.common['Authorization'] = token;

        this.checkLogin();
    }
}

createApp(app).mount('#app');