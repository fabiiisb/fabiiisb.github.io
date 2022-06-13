const mainContainer=document.getElementById('main_container')
const btnSubmit = document.getElementById('btn_submit');
const numContainer=document.getElementById('selector_cont');
const backContainer=document.getElementById('back_container_feedback');
const num1 = document.getElementById('1');
const num2 = document.getElementById('2');
const num3 = document.getElementById('3');
const num4 = document.getElementById('4');
const num5 = document.getElementById('5');
let selectedNumber=0;

num1.addEventListener('click',Fn_Select_Number);
num2.addEventListener('click',Fn_Select_Number);
num3.addEventListener('click',Fn_Select_Number);
num4.addEventListener('click',Fn_Select_Number);
num5.addEventListener('click',Fn_Select_Number);
btnSubmit.addEventListener('click',Fn_Submit);


function Fn_Create_Modal_Rating(num){
    
    mainContainer.innerHTML=`
    <div class="back_container_rating"> 
        <div class="thanks_container"> 
            <img src="images/illustration-thank-you.svg" alt="">
        </div>
        <span class="rating">
         You selected 
         <span id="selected_rating">
            ${num}
         </span> 
         out of 5
        </span>
        
        <h2 class="thank">
         Thank you!
        </h2>
        <p class="legend_rating">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
    </div>`;

}


function Fn_Select_Number(){

    let num =this.id
    
    num1.classList.remove('selected');
    num2.classList.remove('selected');
    num3.classList.remove('selected');
    num4.classList.remove('selected');
    num5.classList.remove('selected');

    if(num==1){
        num1.classList.add("selected");
    }else if(num==2){
        num2.classList.add("selected");
    }else if(num==3){
        num3.classList.add("selected");
    }else if(num==4){
        num4.classList.add("selected");
    }else if(num==5){
        num5.classList.add("selected");
    }

    selectedNumber=num
}
 
function Fn_Submit(){

    if(selectedNumber!=0){
        console.log(selectedNumber)
        backContainer.setAttribute('hidden',true);
        Fn_Create_Modal_Rating(selectedNumber);
    }

}

