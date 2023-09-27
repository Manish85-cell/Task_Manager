document.addEventListener('DOMContentLoaded', function () {

    console.log("event handler")
    function checkbox() {
        let k = "";
        document.querySelectorAll('.ctg').forEach(function (i) {
            if (i.checked == true) {
                k = i.id;
            }
        })
        return k;
    }
    function ctg() {
        document.querySelectorAll('.head').forEach(function (i) {
            let n = i.querySelector('ul').children.length;
            if (n == 0) {
                i.style.display = "none";
            }
            if (n > 0) {
                i.style.display = "block";
            }
        })
    }

    ctg();


    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;
        const li = document.createElement('li');
        li.innerHTML = task;

        const btn = document.createElement('button');
        btn.innerText = 'Delete'
        btn.id = li.innerHTML;

        //delete operation
        btn.onclick = () => {
            document.querySelectorAll('li').forEach(function (i) {
                if (i.innerHTML == btn.id) {
                    i.remove()
                    btn.remove();
                    btn2.remove();
                    check.remove();
                    btn3.remove();
                }
            })
            ctg();

        }

        //edit operation
        const btn2 = document.createElement('button');
        btn2.innerText = 'Edit';
        btn2.id = li.innerHTML;
        btn2.onclick = () => {
            document.querySelectorAll('li').forEach(function (i) {
                if (i.innerHTML == btn2.id) {
                    document.querySelector('#task').value = i.innerHTML;
                    document.querySelector('#click').onclick = () => {
                        i.remove();
                        btn.remove();
                        btn2.remove();
                        check.remove();
                        btn3.remove();
                    }

                }
            })
        }

        const btn3 = document.createElement('button');
        btn3.id = "time";
        const d = new Date();
        btn3.innerText = `Created on:${d.getFullYear()}/${d.getMonth()}/${d.getDate()}||${d.getHours()}:${d.getMinutes()}`;

        document.querySelector('select').onchange=function(){
            if(document.querySelector.options[selectElement.selectedIndex].value == "O")
            {
                document.querySelectorAll('li').forEach(function (j) {
                    let swap = 0;
                    forEach(function (i) {
                        let a = i.querySelector('#time').innerText;
                        let b = (i + 1).querySelector('#time').innerText;
        
                        let c = a(parseInt);
                        let d = b(parseInt);
        
                        if (c > d) {
                            i.querySelector('ul').button('#time').innerText = b;
                            (i + 1).querySelector('ul').button('#time').innerText = a;
                        }
                        swap++;
                    })
                    if (swap == 0) {
                        return;
                    }
                    
                })
            }
            
        }
        
        

//checkbox operation
const check = document.createElement('input');
check.setAttribute("type", "checkbox");
check.id = li.innerHTML
check.onchange = () => {

    if (check.checked == true) {
        document.querySelectorAll('li').forEach(function (i) {
            if (check.id == i.innerHTML) {
                i.style.color = "green";
                i.style.fontStyle = "italic"
            }
        })
        const c = new Date();
        btn3.innerText = `Completed on:${d.getFullYear()}/${d.getMonth()}/${d.getDate()}||${d.getHours()}:${d.getMinutes()}`;
    }
    else {

        document.querySelectorAll('li').forEach(function (i) {
            if (check.id == i.innerHTML) {
                i.style.color = "red";
                i.style.fontStyle = "normal"
            }
        })

    }
}



li.style.color = "red";
li.style.fontSize = "25px";
const selected = checkbox();

document.querySelector(`#${selected}-task`).append(li, btn, btn2, check, btn3);


ctg();
//for clearing the input field after adding
document.querySelector('#task').value = '';

//stop the form from submitting

return false;


    }
})