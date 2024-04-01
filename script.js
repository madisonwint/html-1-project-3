
const FirstName = prompt("what is your name?");
alert ("hello " + FirstName + "!");

let favorite_genre = prompt("what is your favorite music genre?");
alert("cool!");

let SongsListenedTo = prompt("How many songs do you want to listen to?");


let age = prompt("How old are you?");
console.log('Age', age);


let YearOlder = age + 1;
console.log('Age in a Year', YearOlder);
alert("you will be " + YearOlder + " in a year");


if (age < 13) {
    alert("You are not old enough to use this website")
}
else {
    alert("You are old enough to use this website")
}

let tooYoung = (age <18);
if (!tooyoung)
alert("You are not old enough to vote! :(");


else {
alert("You are old enough to vote! :)");
}

let NewHeading = document.getElementById("NewHeading");

NewHeading.innerHTML = "This was made with javascript, how cool!";



