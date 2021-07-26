const checkBtn = document.querySelector(".btn");
const li = document.querySelector(".firstOne");
const numbOfMeeting = li.querySelector(".numbOfThera");

function handleBtn (e) {
    let numb = 0;
    numb =+1;
    numbOfMeeting.innerHTML = `${numb}회`;
};

if(checkBtn){
    checkBtn.addEventListener("click", handleBtn);
}