var coin = {
    state: 0,
    flip: function() {
        // randomly set this.state to be either 0 or 1
        coin.state = getRandomInt(2);
        console.log(coin.state);
    },
    toString: function() {
        // return “H” or “T” depending on whether this.state is 0 or 1
        if (this.state !== 0) {
            console.log("Oh snap, It's Tails!");
            return "Oh snap, It's Tails!";
        } else {
            console.log("Ahhh yeah, It's Heads!");
            return "Ahhh yeah, It's Heads!";
        }
    },
    toHTML: function() {
        var img = document.createElement("img");
        // set the properties of the image element to show either heads or tails
        if (this.state !== 0) {
            img.src = "https://upload.wikimedia.org/wikipedia/commons/5/5a/98_quarter_reverse.png";
            document.body.appendChild(img);
            console.log("You're seeing a glorious picture of a back of a quarter.")
        } else {
            img.src = "http://www.ssaurel.com/blog/wp-content/uploads/2017/01/heads.png";
            document.body.appendChild(img);
            console.log("You're seeing a glorious picture of the front of a quarter.")
        }
    }
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

for (i = 0; i < 20; i++) {
    var text = document.createElement("p");
    var breakLine = document.createElement("hr");
    text.setAttribute("id", "coinText");
    document.body.appendChild(text);
    
    coin.flip();
    text.innerHTML = coin.toString();
    coin.toHTML();
    document.body.appendChild(breakLine);
    
}