const genres = ["rock", "pop", "punk", "klassisk", "country", "folkemusikk", "rap", "hip-hop", "indie", "metal", "jazz", "soul", "blues", "funk", "k-pop", "gospel", "julemusikk", "latin"];
const weather = ["sol", "snø","regn","yr","tåke","minusgrader","frost","overskyet","storm","orkan"];


function textGenerator(){
    const genre = genres[0];
    const currentWeather = weather[0];
    console.log("idag er det fint å høre på "+genre+", siden det er "+currentWeather+" og humøret ditt blir bedre");

}

textGenerator();
