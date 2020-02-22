const lis = document.getElementsByTagName("li");
const submit = document.querySelector("input[type=submit]")
const input = document.querySelectorAll("input");
let thisLis = Array.from(lis);

thisLis.forEach((li, i) => {
    let thisLi = lis[i];
    let buttons = thisLi.getElementsByTagName("button");
    let buttonsArr = Array.from(buttons);

    const func = (e, typeOfEvent) => {
        let thisDiv = thisLi.getElementsByTagName("div")[0];
        e.preventDefault();
        if (input[i].value === "") {
            alert("Please, enter a value");
        } else {
            let nextDiv;
            if (typeOfEvent == "click") {
                thisDiv.classList.add("invisible");
                console.log(e.target);
                if (e.target.classList.contains("next")) {
                    nextDiv = lis[i + 1];
                    thisLi.classList.add("list");
                } else if (e.target.classList.contains("prev")) {
                    nextDiv = lis[i - 1];
                    thisLi.classList.remove("list");
                } 
                let nextAbc = nextDiv.getElementsByTagName("div")[0];
                nextAbc.classList.remove("invisible")
             } else if (typeOfEvent == "keypress") {
                 console.log(i, thisLis.length);
                 if (i == (thisLis.length - 1)) {
                     thisLi.classList.add("list");
                } else {
                    thisDiv.classList.add("invisible");
                    nextDiv = lis[i + 1].getElementsByTagName("div")[0];
                    console.log(nextDiv);
                    thisLi.classList.add("list");
                    nextDiv.classList.remove("invisible");
                }
             }
            
        }
    }

    input[i].addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            func(e, "keypress");
        }
    });

    buttonsArr.forEach((a, j) => {
        let thisButton = buttons[j];
        thisButton.addEventListener("click", (e) => {
            func(e, "click");
        });
    })
});

// submit.addEventListener("click", (e) => {
//     e.target.parentNode.parentNode.classList.add("list");
//     e.preventDefault();
//     // if (submit.value === "") {
//     //     console.log("hey");
//     //     console.log(submit.value);
//     //     alert("Please, enter a value");
//     // } else {
//     //     alert("clicked");
//     // }
// })