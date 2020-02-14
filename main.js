const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
// This gives you three variables that store references 
// to the "Enter custom name" text field (customName), 
// the "Generate random story" button (randomize), 
// and the <p> element at the bottom of the HTML body 
// that the story will be copied into (story), respectively. 

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
// This gives you a function called randomValueFromArray() 
// that takes an array, and returns one of the items 
// stored inside the array at random.

let storyTxt = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
let insertx = new Array("Willy the Goblin", "Big Daddy", "Father Christmas")
let inserty = new Array("the soup kitchen","Disneyland","the White House")
let insertz = new Array("spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away")
let newStory = ""
newStory = storyTxt
  // This creates text strings that will act as input into our program. 

randomize.addEventListener('click', result);

function result() {
    // This is needed so we can create a new random story each time the button is pressed and the function is run. 
    xitem = randomValueFromArray(insertx)
    yitem = randomValueFromArray(inserty)
    zitem = randomValueFromArray(insertz)
    // This takes the string inside the selected array at random and assigns it for usage later on in creating a new story.
    newStory = newStory.replace(/:insertx:/g, xitem )
    console.log(newStory)
    newStory = newStory.replace(":inserty:", yitem )
    newStory = newStory.replace(":insertz:", zitem )

    if(customName.value !== '') {
      let name = customName.value;
      console.log(name)
      newStory = newStory.replace("Bob", name );
    }

    if(document.getElementById("uk").checked) {
      let weight = Math.round(300/14) + " stone";
      let temperature =  Math.round((94 - 32) * (5/9)) + " centigrade" ;
      newStory = newStory.replace("94 fahrenheit", temperature );
      newStory = newStory.replace("300 pounds", weight );
    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}

