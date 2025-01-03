// today We will learn about the 

// callback function

// A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.


function milkshake(timepass){
    console.log("Milkshake is order place");
    timepass();
    console.log("Milkshake is ready");
}

function timepass(){
    console.log("chugalya");
}


milkshake(timepass)


//// end of callback function