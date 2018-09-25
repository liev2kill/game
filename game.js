// game victor de lange

var antwoord = prompt('You wake up in a dark room you there are two hallways, wich one do you choose left or right?');
if (antwoord == 'right') {
    antwoord = prompt('You enter a really large room there are 2 buttons. do you push the left or right one?');
    if (antwoord == 'right') {
        antwoord = prompt('you see 2 rooms?');
        if (antwoord == 'right') {
            antwoord = document.write('The room fills with gas and you die');
        } else if (antwoord = 'left') {
            antwoord = document.write('A door opens you have escaped!');
        }
    } else if (antwoord == 'left') {
        antwoord = prompt('you enter a room with a sign asking a question : wich year did micheal jackson die?');
        if (antwoord == '2009') {
            antwoord = document.write('A door opens you have escaped');
        } else {
            	 document.write('The room fills with gas you have died');
        }
    }
} else if (antwoord == 'left') {
    antwoord = prompt('You enter a small dark room you seee two hallways left or right?');
    if (antwoord == 'left') {
        antwoord = prompt('You see a sign with with two arrows pointing to two words death or freedom');
        if (antwoord == 'death') { 
            antwoord = document.write('A door opens, you are free!');
        } else if (antwoord == 'life') {
            antwoord = document.write('You got tricked the room fills up with gas you are dead!');
        }
    } else if (antwoord == 'right') {
        antwoord = prompt('You see a bookcase filled with books you see 2 books highlighted one has an A on it the other has a B wich one do you choose?'); 
        if (antwoord == 'a') {
            antwoord = document.write('a door opens you are free');
        } else if (antwoord == 'b') {
            antwoord = document.write('The room fills up with gas you are dead');
        }
    }
}





