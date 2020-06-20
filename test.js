// Reduse method 

let arrayOfNum = [1, 2, 3, 4, 5];

const changedArray = arrayOfNum.reduce((acc, curr) => {
    return acc + curr;
});

console.log(changedArray);



// Map Method 

let arrayOfNum1 = [1, 2, 3, 4, 5];

const changedArray1 = arrayOfNum1.map(curr => {
    if (curr != 1)
        return curr + 10;
    else
        return curr + 20;
});

console.log(changedArray1);




// Filter Method 

let arrayOfNum2 = [1, 2, 3, 4, 5];

const changedArray2 = arrayOfNum2.filter((curr) => {
    return curr <= 4;
});
console.log(changedArray2);


// shorthand property name syntax for object creation

const name = " Sourav Karmakar ";
var obj = {
    name,
    roll_no: "18CS8039",
};

console.log(obj);

// Classes

class Song {
    constructor(title, song) {
        this.title = title;
        this.song = song;
    }

    play() {
        console.log(`\n ${this.song} with ${this.title} is Playing Right Now !`);
    }
    changeSong(newsong) {
        this.song = newsong;
    }
}

var mySong = new Song("Hum dil de chuke sanam", "Chura Liya");

mySong.play();

mySong.changeSong("Befikre");
mySong.play();


// Static Method

class Songname {
    constructor(title, song) {
        this.title = title;
        this.song = song;
    }

    static play() {
        console.log(`\n ${this.song} with ${this.title} is Playing Right Now !`);
    }
    changeSong(newsong) {
        this.song = newsong;
    }
}

var mySong1 = new Songname("Hum dil de chuke sanam", "Chura Liya");

// mySong1.play();

Songname.play();