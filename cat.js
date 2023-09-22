console.log("wooaaa")

function cat() {         
  setTimeout(function() {  
    var cats = [
        "black cat",
        "void cat",
        "cat black",
	"cat void",
    ];

    //destructive coad!

    document.title = cats[Math.ceil((Math.random()*cats.length-1))];         
      cat();                             
  }, 1000)
}

cat();               
