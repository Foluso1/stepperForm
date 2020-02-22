const lis = document.getElementsByTagName("li");
const submit = document.querySelector("input[type=submit]")
const input = document.querySelectorAll("input");
let thisLis = Array.from(lis);


thisLis.forEach((li, i) => {
    let thisLi = lis[i];
    let buttons = thisLi.getElementsByTagName("button");
    let buttonsArr = Array.from(buttons);

    input[i].addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            e.preventDefault();
            let thisDiv = thisLi.getElementsByTagName("div")[0];
            if (input[i].value === "") {
                alert("Please, enter a value");
            } else {
                if (i == (thisLis.length - 1)) {
                    thisLi.classList.add("list");
                    alert("To submit");
                } else {
                    thisDiv.classList.add("invisible");
                    let nextDiv = lis[i + 1].getElementsByTagName("div")[0];
                    console.log(nextDiv);
                    thisLi.classList.add("list");
                    nextDiv.classList.remove("invisible");
                }
            }
        }
    });

    buttonsArr.forEach((a, j) => {
        let thisButton = buttons[j];
        
        thisButton.addEventListener("click", (e) => {
            e.preventDefault();
            let abc = thisLi.getElementsByTagName("div")[0];
            if (input[i].value === "") {
                alert("Please, enter a value");
            } else {
                abc.classList.add("invisible");
                let nextAbcLi;
                if (thisButton.classList.contains("next")) {
                    nextAbcLi = lis[i + 1];
                    lis[i].classList.add("list");
                } else if (thisButton.classList.contains("prev")) {
                    nextAbcLi = lis[i - 1];
                    lis[i].classList.remove("list");
                } else {
                    alert("submitted");
                }
                let nextAbc = nextAbcLi.getElementsByTagName("div")[0];
                nextAbc.classList.remove("invisible")
            }
        });
    })
})



submit.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.classList.add("list");
    e.preventDefault();
    if (submit.value === "") {
        alert("Please, enter a value");
    } else {
        alert("clicked");
    }
})