const clock= document.getElementById('clock')
// console.log(clock);

// setInterval((function(){}), 1000) // Always write like this (Set interval Syntax)
setInterval((function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    // console.log(date);
    // clock.innerHTML = date.toLocaleString();
    // clock.innerHTML = date.toUTCString();
    // clock.innerHTML = date.toDateString();
    // clock.innerHTML += `, `;
    // clock.innerHTML += date.toLocaleTimeString();

}), 1000) // 1000 (mili sec)-> 1 sec
