

// sidebar

let sidebarBtn = document. querySelector(".sidebarBtn");
let sidebar = document. querySelector('.sidebar')

function opensidebar(){
  sidebar.classList.add('active');
    
}


sidebarBtn.addEventListener('click', opensidebar);



let crossBtn = document.querySelector(".crossBtn");

function closesidebar (event){

    if (
        event.target.classList.contains("sidebar")||
        event.target.classList.contains('bi')
    ) {
        sidebar.classList.remove("active");
    }

}

crossBtn.addEventListener("click", closesidebar);

sidebar.addEventListener("click", closesidebar);



// Dark Mode And Light Mode

let btn = document.querySelector('.btnCnt');
let body = document.querySelector("body");
let icon = document.querySelector('.btn_Cnt')




btn.addEventListener('click', () => {

    body.classList.toggle('darkmode');

    if(body.classList.contains('darkmode')){
       icon.classList.remove('fa-sun');
       icon.classList.add('fa-moon');
    }else{
        icon.classList.remove('fa-moon');
       icon.classList.add('fa-sun');
    }
})




// mouse cursor
let cursor = document.querySelector('.cursor')
let cursorSm = document.querySelector(".cursor-sm")
window.addEventListener('mousemove', (event) => {
    let topValue = event.pageY;
    let leftValue = event.pageX;


    cursor.style.top = `${topValue}px`
    cursor.style.left = `${leftValue}px`

    cursorSm.style.top = `${topValue}px`
    cursorSm.style.left = `${leftValue}px`
   

})