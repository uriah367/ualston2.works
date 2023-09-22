while (true) {
	wait(1000)
    var cats = [
        "black cat",
        "void cat",
        "cat black",
	"cat void",
    ];

    //destructive coad!

    document.title = cats[Math.ceil((Math.random()*cats.length-1))];
}