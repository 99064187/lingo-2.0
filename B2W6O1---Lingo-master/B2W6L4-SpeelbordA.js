var nummer= Math.floor(Math.random() * words.length) + 1;
var woord= words[nummer].toUpperCase();
var copyword= woord;
var div= ["container", "input"];
var wordlength= woord.length;
const aantal_rijen= 6;
var RowHeight= 1;
const id_row= "Row";
const class_rows= "Rows";
const ClassLetters= "Letters";
var win= false;
var pogingen =0;

CreatePlayBoard();
ShowLetter(0);
function CreatePlayBoard(){
    console.log(woord);
    div[0]= document.createElement("div");
    div[0].setAttribute('class', "container");
    document.body.appendChild(div[0]);

    var header= document.createElement("div");
    header.setAttribute('id', "h1");
    div[0].appendChild(header);
    header.innerHTML= "LINGO";

    div[1]= document.createElement("div");
    div[1].setAttribute('class', "WoordenInput")
    header.appendChild(div[1]);

    var label= document.createElement("label");
    label.setAttribute('type', "text");
    div[1].appendChild(label);
    label.innerHTML= "Voer woord in:"

    var input= document.createElement("input");
    input.setAttribute('style', "text-transform:uppercase");
    input.setAttribute('id', "wordinput");
    div[1].appendChild(input);

    var inputBtn= document.createElement("input");
    inputBtn.setAttribute('type', "button");
    inputBtn.setAttribute('value', "Laat zien");
    inputBtn.setAttribute('id', "button");
    div[1].appendChild(inputBtn);
    inputBtn.onclick= CheckLetter;

    for(var loop=1; loop <= aantal_rijen; loop++){
        element = document.createElement("div");
        element.className = class_rows;
        element.id = id_row + loop;
        div[0].appendChild(element);

        for(var a=1; a <= wordlength; a++){
            var Wordbox= document.createElement("div");
            Wordbox.className = "WordBox";
            Wordbox.id = "letter" + a + id_row + loop;
            Wordbox.innerHTML = "-";
            element.appendChild(Wordbox);
        }
    }
     var input = document.getElementById ("wordinput");
    input.maxLength = 5;
}

function CheckLetter(){
    pogingen++
	var InputUser= document.getElementById("wordinput").value.toUpperCase();
    if(!isNaN(InputUser)){
		alert("ERROR: INVOER IS GEEN WOORD!");

    }
	if(isNaN(InputUser) && InputUser.length != wordlength){
		alert("ERROR: INVOER MOET " + woord.length + " LETTERS BEVATTEN!")
	}
    if(isNaN(InputUser) && InputUser.length == wordlength && win == false){
		copyword= woord;
        for(q= 0; q < wordlength; q++){
			var letter2= woord.charAt(q); 
			var letter= InputUser.charAt(q);
			document.getElementById("letter" + (q + 1) + "Row" + RowHeight).innerHTML= letter;

			if(letter == letter2){ 
				document.getElementById("letter" + (q + 1) + "Row" + RowHeight).style.backgroundColor= "green";
				copyword = copyword.replace(letter, "");
			} 

		}
		for(var z= 0; z < wordlength; z++){	
			var letter2= woord.charAt(z); 
			var letter= InputUser.charAt(z);

			if(copyword.includes(letter) && letter != letter2){
				document.getElementById("letter" + (z + 1) + "Row" + RowHeight).style.backgroundColor= "yellow";
				document.getElementById("letter" + (z+ 1) + "Row" + RowHeight).style.borderRadius= "30px";
				copyword = copyword.replace(letter, "");
			}
			else if(letter != letter2){
				document.getElementById("letter" + (z + 1) + "Row" + RowHeight).style.backgroundColor= "red";
			} 
		}
        RowHeight++;
        if(InputUser == woord){
            alert("U heeft gewonnen");
            win = true;
        }   
    }
    if(pogingen==6){
        window.location.reload();
    }
    console.log(pogingen);
}

function ShowLetter(indexletter) {
    for (var a = 1; a < (aantal_rijen + 1); a++) {
        console.log(a);
        document.getElementById("letter" + (indexletter + 1) + "Row" + a).innerHTML= woord.charAt(indexletter);  
    }
}



