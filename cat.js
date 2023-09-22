console.log("wooaaa")

var i = 1;                

function cat() {         
  setTimeout(function() {  

    cat++;                   
    if (cat < 10) { 
 var cats = [
        "black cat",
        "void cat",
        "cat black",
	"cat void",
    ];

    //destructive coad!

    document.title = cats[Math.ceil((Math.random()*cats.length-1))];         
      myLoop();             
    }                      
  }, 1000)
}

cat();               
