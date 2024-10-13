function toggleSegment(segment) {
    const segmentElement = document.getElementById(`segment-${segment}`);
    segmentElement.classList.toggle('active');
}

function reset(event) {
    if (event && event.type === "click" && event.target.id === "btnReset") {
        //"event" checks if the object exists so if true, continue to event.*, otherwise continue in function
        //Therefore if event is the parameter in the if statement, an error could (would) occur.
        // Run only if the event is a button click
        index = -1;
        const button = document.getElementById("btnUp");
        button.textContent = "Up " + (index + 1) + "/53";
    }
    // List of all segment IDs
    const segmentIds = [
        'segment-a', 'segment-b', 'segment-c', 'segment-d',
        'segment-e', 'segment-f', 'segment-g', 'segment-n', 'segment-h',
        'segment-i', 'segment-j', 'segment-k', 'segment-l',
        'segment-m'
    ];

    // Loop through each segment ID and remove the 'active' class
    segmentIds.forEach(id => {
        const segment = document.getElementById(id);
        if (segment) { //if statement is not necessary 
            segment.classList.remove('active'); // Reset to inactive state
        }
    });
}
document.getElementById("btnReset").addEventListener("click", reset);


function presetInput(str){
    reset();
    for(let i = 0; i < str.length; i++){
        const segmentElement = document.getElementById(`segment-${str.charAt(i)}`);
        segmentElement.classList.toggle('active');
    }
}

var index = -1;
function up() {
    index = (index == 54) ? 0 : index + 1; //syntax for ternary operator is: condition ? valueIfTrue : valueIfFalse. <-chatgpt
    btnPressed();
}
function down() {
    index = (index <= 0) ? 54 : index - 1; //these behave like if statements. They are here to condense the code.
    btnPressed();
}

function btnPressed(){
    const button = document.getElementById("btnUp");
    button.innerHTML = "Up " + (index + 1) + "/55";
    presetInput(presets[index]);
} 
  // Array of corresponding preset strings
  const presets = [
    "abcefgn", "abcdiln", "adef", "abcdil", "adefg", "aefg", "acdefn", "bcefgn", "adil", "bcde",
    "efgjk", "def", "bcefhj", "bcefhk", "abcdef", "abefgn", "abcdefk", "abefgkn", "adfgk", "ail",
    "bcdef", "efjm", "bcefkm", "hkjm", "bcdfgn", "adjm", "abcdefjm", "bc", "abdegn", "abcdn",
    "bcfgn", "acdfgn", "acdefgn", "ajl", "abcdefgn", "abcdfgn", "abcdefghijklmn", "", "ilgn",
    "gn", "gjhklimn", "jm", "m", "l", "bi", "fi", "h", "d", "acdfgiln", "hk", "abcd", "njk",
    "ghm", "jk", "hm"
  ];
/*  You can condense each function into 2 lines of code (or more if you spread them out like the following)
    but then typing "a" into the console wont print out the string that contains a letter for each segment
    so I prefer to do 1 line of code for each letter.

const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z] =
    presets.map(str => () => presetInput(str));
*/
//Presets:
/*
    Each 1-liner functions like the following
    function a(){
        presetInput("abcefgn");
    }
*/
//Uppercase Letters 26 Total
const a = () => presetInput("abcefgn");
const b = () => presetInput("abcdiln");
const c = () => presetInput("adef");
const d = () => presetInput("abcdil");
const e = () => presetInput("adefg");
const f = () => presetInput("aefg");
const g = () => presetInput("acdefn");
const h = () => presetInput("bcefgn");
const i = () => presetInput("adil");
const j = () => presetInput("bcde");
const k = () => presetInput("efgjk");
const l = () => presetInput("def");
const m = () => presetInput("bcefhj");
const n = () => presetInput("bcefhk");
const o = () => presetInput("abcdef");
const p = () => presetInput("abefgn");
const q = () => presetInput("abcdefk");
const r = () => presetInput("abefgkn");
const s = () => presetInput("adfgk");
const t = () => presetInput("ail");
const u = () => presetInput("bcdef");
const v = () => presetInput("efjm");
const w = () => presetInput("bcefkm");
const x = () => presetInput("hkjm");
const y = () => presetInput("bcdfgn");
const z = () => presetInput("adjm");
//Numbers 10 Total
const _0 = () => presetInput("abcdefjm");
const _1 = () => presetInput("bc"); //bcj looks worse in minecraft and on the website IMO | as 1 instead of /|
const _2 = () => presetInput("abdegn");//                                                 |                  |
const _3 = () => presetInput("abcdn");
const _4 = () => presetInput("bcfgn");
const _5 = () => presetInput("acdfgn");
const _6 = () => presetInput("acdefgn");
const _7 = () => presetInput("ajl");
const _8 = () => presetInput("abcdefgn");
const _9 = () => presetInput("abcdfgn");
//Other characters 17 Total
//const _ = () => presetInput("");
const full = () => presetInput("abcdefghijklmn");
const empty = () => presetInput("");

const plus = () => presetInput("ilgn");
const minus = () => presetInput("gn");
const asterisk = () => presetInput("gjhklimn");
const slash = () => presetInput("jm");

const comma = () => presetInput("m");
const period = () => presetInput("l");
const quotation1 = () => presetInput("bi");
const quotation2 = () => presetInput("fi");
const apostrophe = () => presetInput("h");

const underscore = () => presetInput("d");
const dollar = () => presetInput("acdfgiln");
const backSlash = () => presetInput("hk");

const closingBracket = () => presetInput("abcd"); //opening bracket is c()
const oCurlyBrace = () => presetInput("njk");
const cCurlyBrace = () => presetInput("gmh");
const oParenth = () => presetInput("jk");
const cParenth = () => presetInput("mh");
//55 all together