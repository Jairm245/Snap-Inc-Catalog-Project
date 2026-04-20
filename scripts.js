/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */
const REY_SIG_MOVE = "619"
const MISTICO_SIG_MOVE = "La Mistica"
const SANTOS_SIG_MOVE = "La de a Caballo"
const BLUE_DEMON_SIG_MOVE = "NONE"                 /* Data set for wrestler signature move*/
const VILLANO_SIG_MOVE = "NONE"
const PENTA_SIG_MOVE = "Mexican Destroyer"
const MIL_MASCARAS_SIG_MOVE = "Diving Crossbody"
const DRWAGNER_JR_SIG_MOVE = "Wagner Driver"
const PSICOSIS_SIG_MOVE = "Psico Driver"
const EL_CANEK_SIG_MOVE = "Canek Press"

const REY_REAL_NAME = "Oscar Gutierrez"
const MISTICO_REAL_NAME = "Luis Ignacio Urive Alvirde"
const SANTOS_REAL_NAME = "Rodolfo Guzman Huerta"
const BLUE_DEMON_REAL_NAME = "Alejandro Munoz Moreno"
const VILLANO__REAL_NAME = "Jose de Jesus Diaz Mendoza"       /* Data set for wrestler real name*/
const PENTA_REAL_NAME = "Unknown"
const MIL_MASCARAS_REAL_NAME = "Aaron Rodriguez Arellano"
const DRWAGNER_JR_REAL_NAME = "Juan Manuel Gonzalez"
const PSICOSIS_REAL_NAME = "Dionicio Castellanos Torres"
const EL_CANEK_REAL_NAME = "Felipe Estrada"

const REY_DOB = "December 11, 1974"
const MISTICO_DOB = "December 22,1982"
const SANTOS_DOB = "September 23,1917"
const BLUE_DEMON_DOB = "April 24,1922"           /* Data set for wrestler Date of Birth*/
const VILLANO_DOB = "June 28, 1950"
const PENTA_DOB = "February 5,1985"
const MIL_MASCARAS_DOB = "July 15, 1942"
const DRWAGNER_JR_DOB = "August 12, 1965"
const PSICOSIS_DOB = "May 19, 1971"
const EL_CANEK_DOB = "June 19, 1952"

/* Data set for wrestler Biography*/
const REY_BIO = "Legendary Mexican-American masked luchador (5'6\", 175 lbs) known for pioneering the high-flying cruiserweight style in the US";
const MISTICO_BIO = " Known as \"El Principe de Plata y Oro\" (The Prince of Silver and Gold), he became Mexico's biggest box office draw in the mid-2000s, known for his high-flying style and signature hold La Mistica. He also wrestled in WWE as Sin Cara (2011-2014) and has performed for AEW and NJPW.";
const SANTOS_BIO = "legendary Mexican luchador, film actor, and cultural icon. Known for his silver mask, he was a 1940s-1980s wrestling superstar who symbolized justice, starring in over 50 movies as a superhero,  He was a folk hero who popularized Lucha Libre and was buried in his mask."
const BLUE_DEMON_BIO = "Known for his iconic blue mask and technical wrestling style. Active from 1948 to 1989, he was a massive cultural icon often matched with El Santo in films and the ring, known as a \"rudo\" (villain) turned \"tecnico\" (hero)."
const VILLANO_BIO = "Part of the famous Mendoza wrestling dynasty. As the first of five brothers to take the \"Villano\" name, he was a standout performer in the Universal Wrestling Association (UWA), winning multiple tag team and trio titles"
const PENTA_BIO = "Renowned Mexican luchador known for his \"Cero Miedo\" (Zero Fear) mantra, who achieved fame in Lucha Underground, AAA, and AEW before debuting in WWE in early 2025. He is often associated with a \"curse\" regarding the Pentagon gimmick, which he famously broke by becoming the most successful wrestler to ever use the persona.";
const MIL_MASCARAS_BIO = "Legendary Mexican luchador and actor considered one of the most influential high-flyers in wrestling history. Debuting in 1963, he became an international superstar, known for pioneering lucha libre in Japan and being the first masked wrestler in Madison Square Garden.";
const DRWAGNER_JR_BIO = " Debuting in 1986, he is a second-generation wrestler famous for his tenure in CMLL, AAA, and Japan, utilizing the monikers \"El Galeno del Mal\" (Rudo) or \"El Galeno del Bien\" (Tecnico). He is a central figure in La Dinastia Wagner, with his sons, El Hijo de Dr. Wagner Jr. and Galeno del Mal, also wrestling." ;
const PSICOSIS_BIO = "Born in Mexico City, he debuted in the early 90s, gaining international fame in WCW for his acrobatic, \"rudo\" (villain) style. After losing his mask in WCW, he continued to compete in the US and Mexico, joining WWE in 2005 alongside Super Crazy and Juventud Guerrera as \"The Mexicools\" he is best known for his intense rivalry with Rey Mysterio Jr. and as a member of The Mexicools";
const EL_CANEK_BIO = " known as \"El Principe Maya\" (The Mayan Prince), renowned as one of Lucha Libre's top heavyweights during the 1980s. Based primarily in the Universal Wrestling Association (UWA), he held the UWA World Heavyweight Championship 15 times and gained fame for facing international stars like Hulk Hogan and Andre the Giant";

/* Data set for wrestler images*/
const REY_MYSTERIO_URL = 
  "https://upload.wikimedia.org/wikipedia/commons/6/66/Rey_Mysterio.jpg";
const MISTICO_URL = 
  "https://upload.wikimedia.org/wikipedia/commons/c/c3/M%C3%ADstico.jpg";
const SANTOS_URL = 
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Hijo_del_Santo.jpg";
const BLUE_DEMON_URL = 
  "https://upload.wikimedia.org/wikipedia/commons/3/34/El_Hijo_De_Santo_vs_Blue_Demon_Jr.jpg";
const VILLANO_URL = 
  "https://upload.wikimedia.org/wikipedia/commons/e/e3/VillanoRing.jpg";
const PENTA_URL = 
  "https://upload.wikimedia.org/wikipedia/commons/2/2b/Pentag%C3%B3n_Jr_August_2018_%28cropped%29.jpg";
const MIL_MASCARAS_URL = 
  "https://upload.wikimedia.org/wikipedia/commons/7/71/Mil_Mascaras_1_%28cropped%29.jpg";
const DRWAGNER_JR_URL = 
  "https://upload.wikimedia.org/wikipedia/commons/7/7d/Dr._Wagner%2C_Jr._Latin_American_Champion.jpg";
const PSICOSIS_URL = 
  "https://upload.wikimedia.org/wikipedia/commons/8/85/Psicosis.jpg";
const EL_CANEK_URL = 
"https://upload.wikimedia.org/wikipedia/commons/9/97/El_Canek_2018_%28cropped%29.jpg";
//Enum type that give each wrestler an alignment Face = good guy, Heel = bad guy
const Alignment = Object.freeze({
  FACE: 'face',  
  HEEL: 'heel' 
});
// class template that creates an object with a name, picture, alignment, Date of Birth, Biography, and signature moves
class luchador
{
  constructor(title,imageURL,alignment,realName = "",DOB = "",bio = "", signatureMove = "")
  {
    this.title = title;
    this.imageURL = imageURL;
    this.alignment = alignment;
    this.realName = realName;
    this.DOB = DOB;
    this.bio = bio;
    this.signatureMove = signatureMove;
  }
  /* This code block creates the container and shows the info from our class, it also helps with color-coding the boxes
  based on wreslter alignent, also prints out the index number +1 on the bottom of the card to help user select card to use a function on */
  generateHTML(index) {
    const alignmentClass = this.alignment === Alignment.FACE ? 'face-card' : 'heel-card';
    
    return `
      <div class="lucha-card ${alignmentClass}">
        <img src="${this.imageURL}" alt="${this.title}" style="width:100%">
        <h3>${this.title}</h3>
        <p><b>Alignment: </b>${this.alignment.toUpperCase()}</p>
        <p><b>Real Name: </b>${this.realName}</p>
        <p><b>Date of Birth: </b>${this.DOB}</p>
        <p><b>Signature move: </b>${this.signatureMove}</p>
        <p><b>Bio: </b>${this.bio}</p>
        <p>${index +1}</p> <!--Card Number -->
      </div>
    `;
  }
}
// An array that contains all our objects this helps with organization and makes writing functions easier
const luchadorArray = [
  new luchador("Rey Mysterio", REY_MYSTERIO_URL, Alignment.FACE,REY_REAL_NAME,REY_DOB,REY_BIO,REY_SIG_MOVE),
  new luchador("Mistico", MISTICO_URL, Alignment.FACE,MISTICO_REAL_NAME, MISTICO_DOB, MISTICO_BIO,MISTICO_SIG_MOVE),
  new luchador("El Santo", SANTOS_URL, Alignment.FACE,SANTOS_REAL_NAME, SANTOS_DOB, SANTOS_BIO,SANTOS_SIG_MOVE),
  new luchador("Blue Demon", BLUE_DEMON_URL, Alignment.FACE,BLUE_DEMON_REAL_NAME, BLUE_DEMON_DOB,BLUE_DEMON_BIO,BLUE_DEMON_SIG_MOVE),
  new luchador("Villano", VILLANO_URL, Alignment.HEEL,VILLANO__REAL_NAME, VILLANO_DOB,VILLANO_BIO,VILLANO_SIG_MOVE),
  new luchador("Penta", PENTA_URL, Alignment.FACE,PENTA_REAL_NAME, PENTA_DOB,PENTA_BIO,PENTA_SIG_MOVE),
  new luchador("Mil Mascaras", MIL_MASCARAS_URL, Alignment.HEEL,MIL_MASCARAS_REAL_NAME, MIL_MASCARAS_DOB,MIL_MASCARAS_BIO,MIL_MASCARAS_SIG_MOVE),
  new luchador("Dr. Wagner jr.", DRWAGNER_JR_URL, Alignment.HEEL,DRWAGNER_JR_REAL_NAME, DRWAGNER_JR_DOB,DRWAGNER_JR_BIO,DRWAGNER_JR_SIG_MOVE),
  new luchador("Psicosis", PSICOSIS_URL, Alignment.HEEL,PSICOSIS_REAL_NAME, PSICOSIS_DOB,PSICOSIS_BIO,PSICOSIS_SIG_MOVE),
  new luchador("El Canek", EL_CANEK_URL, Alignment.HEEL,EL_CANEK_REAL_NAME, EL_CANEK_DOB,EL_CANEK_BIO,EL_CANEK_SIG_MOVE)
];



// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  luchadorArray.forEach((luchador,index) => {
    cardContainer.innerHTML += luchador.generateHTML(index);
  });
  
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h3");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
// function loops through array and removes the face cards the copies result back into the array.
function removeFace()
{
  const updatedArray = luchadorArray.filter(luchador => luchador.alignment !== Alignment.FACE); // creates a new array by removing the FACE enun types

  luchadorArray.length = 0; // clears old array
  luchadorArray.push(...updatedArray); // copies updated array back into original array variable
  
  showCards(); // shows cards again with updated filters removed.
  
}

//function loops through array and removes the face cards the copies result back into the array.
function removeHeel()
{
  const updatedArray = luchadorArray.filter(luchador => luchador.alignment !== Alignment.HEEL); // creates a new array by removing the HEEL enun types

  luchadorArray.length = 0; // clears old array
  luchadorArray.push(...updatedArray); // copies updated array back into original array variable
  
  showCards();
  
}

function addWrestler(event)
{
  event.preventDefault(); // prevents page from refreshing 

  const titleInput = document.getElementById("title").value.trim();
  const imageInput = document.getElementById("imageURL").value.trim(); // copies values put into form into respective variables
  const alignmentInput = document.getElementById("alignment").value.trim();

  if (!titleInput || !imageInput) {
    alert("Please provide both title and image URL."); // chekcs for vaild image and title(name) input
    return;
  }

  const alignmentKey = alignmentInput.toUpperCase();
  if (alignmentKey !== "FACE" && alignmentKey !== "HEEL") {
    alert("Invalid alignment! Please select either FACE or HEEL"); // checks for vaild alignment input
    return;
  }

  const alignmentValue = Alignment[alignmentKey] 
  const newWrestler = new luchador(titleInput, imageInput, alignmentValue); // creates new luchador object pased on input

  luchadorArray.push(newWrestler); // pushes wrestler into array 

  showCards(); // shows updated cards

  document.getElementById("add-luchador-form").reset(); // resets form

}

function changeAlignment()
{
  const index = prompt("Enter Wrester Card Number to change Alignment: ") 
  const i = parseInt(index) - 1                                         //  user choses which card to change based on index

  if (isNaN(i) || i < 0 || i >= luchadorArray.length) // checks for valid index
  {
    alert("Invalid index!");
    return;
  }
  const wrestler = luchadorArray[i]; 

  wrestler.alignment = wrestler.alignment === Alignment.FACE ? Alignment.HEEL : Alignment.FACE; // Switches which alignment the wrestler has
  
  showCards(); // updates cards
  
}

function changeImage(event)
{
  event.preventDefault();

  const indexInput = document.getElementById("index").value;
  const newImageURL = document.getElementById("newImageURL").value.trim(); // user gives index and new image to use

  const i = parseInt(indexInput) -1;

  if (isNaN(i) || i < 0 || i >= luchadorArray.length)
  {
    alert("Invalid index!");
    return;
  }
// checks for validity
  if (!newImageURL)
  {
    alert("Enter a valid URL!");
    return;
  }
  luchadorArray[i].imageURL = newImageURL; // changes URL to new user input

  showCards(); // updates cards

  document.getElementById("change-img-form").reset(); // resest form
}

function addInfo(event)
{
  event.preventDefault();
 
  const indexInput = document.getElementById("bioIndex").value;
  const bioInput = document.getElementById("newBio").value; // collects user input
  const moveInput = document.getElementById("newMove").value;

  const i = parseInt(indexInput) -1;

  if (isNaN(i) || i < 0 || i >= luchadorArray.length)
  {
    alert("Invalid index!");
    return;
  }

  luchadorArray[i].bio += " " + bioInput;
  luchadorArray[i].signatureMove = moveInput; // add info to bio and replaces signature move

  showCards(); // updates cards

  document.getElementById("add-info-form").reset();

}

document.addEventListener("DOMContentLoaded", () => {
  showCards(); // keep initial render
  const form = document.getElementById("add-luchador-form");
  if (form) form.addEventListener("submit", addWrestler);

  const imgForm = document.getElementById("change-img-form"); // this helps eveything load properly so code can worl and be seen
  if (imgForm) imgForm.addEventListener("submit", changeImage);

  const bioForm = document.getElementById("add-info-form");
  if (bioForm) bioForm.addEventListener("submit", addInfo);
});
