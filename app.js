
function foodSearch(){
    loadingText.style.display = "block";
}
let http = new XMLHttpRequest();
let apikey = '2a5aca9c0a44003d5c888477a9db0c71';
let searchUrl = 'https://www.food2fork.com/api/search'

let method = 'GET';

http.open();
