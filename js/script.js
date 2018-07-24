var theDocumentary = ["Intro", "Westside Stroy", "Dreams", "Hate it or Love it", "Higher",
"How We Do", "Don't Need Your Love", "Church for Thugs", "Put You on the Game", "Star from Scratch",
"The Documentary", "Runnin", "No More Fun & Games", "We Ain't", "Where I'm From", "Special",
"Don't Worry", "Like Father, Like Son"]

var illmatic = ["The Genesis", "N.Y. State of Mind", "Life's a Bitch", "The World Is Yours",
"Halftime", "Memory Lane", "One Love", "One Time for Ya Mind", "Represent", "It Ain't Hard To Tell"]

var playlist = [
["One Blood", "The Game"],
["One Mic", "Nas"],
["Many Men", "50 Cent"],
["Good Life", "Kanye West"],
["Sunshine", "Blu"]
];

var person = {
  name: "Eric",
  age: 26,
  state: "California",
  hometown: "Albuquerque",
}

var questions = [
  ["How many rings does Kobe Bryant have?", 5],
  ["How many rings does Michael Jordan have?", 6],
  ["How many rings does Lebron James have?", 3],
  ["How many rings does Shaq have?", 4]
];

const printAlbum = (album)=>{
  var printHTML = "<ol>";
  for (var i = 0; i < album.length; i++) {
    printHTML += "<li>" + album[i][0] + " by " + album[i][1] + "</li>";
  }
  printHTML += "</ol>";
  document.write(printHTML);
}

const randomNum = (upper) =>{
  return Math.floor(Math.random() * upper) +1;

}
