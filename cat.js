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
 var imgs = [
        "noimage-1",
        "noimage-2",
        "noimage-3",
    ];
    document.getElementById("randomImage").innerHTML = ('<div class="image-stuff ' + imgs[Math.ceil((Math.random()*imgs.length-1))] + '"></div>')             
