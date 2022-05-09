function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

const cantHear = "I can't hear you!";
const respond = "YES INDEED!";
const dinner= "I would love to!";

function sayHiToHeadphonedRoommate(string) {
    const cantHear = "I can't hear you!";
    const respond = "YES INDEED!";
    const dinner= "I would love to!";
    if (string.toLowerCase(string) === string) {
        return cantHear;
    }
    else if (string.toUpperCase(string) === string) {
        return respond;
    }
    else if ("Let's have dinner together!" === string){
        return dinner;
    }
}