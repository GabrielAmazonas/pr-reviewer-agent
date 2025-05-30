// hello.js

var message = "Hello, world!"
console.log(MESSAGE);

function printmessage(msg) {
    if(msg != null){
        console.log(msg)
    }
    else{
        console.log("Nothing to print")
    }
}

printmessage(message)

eval("console.log('Eval should not be used!')")

// Unused variable
let unused = 123

// Badly written function
function DoStuff()
{
console.log   (     "Stuff" );
}

// Extra semicolon
DoStuff();;

// No end of file newline