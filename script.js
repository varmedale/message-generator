const genres = ["rock", "pop", "punk", "klassisk", "country", "folkemusikk", "rap", "hip-hop", "indie", "metal", "jazz", "soul", "blues", "funk", "k-pop", "gospel", "julemusikk", "latin"];
const weather = ["sol", "snø", "regn", "yr", "tåke", "minusgrader", "frost", "overskyet", "storm", "orkan"];
const moods = ["glad", "gal", "sur", "bisk", "irritert", "sint", "engasjert", "deprimert", "lykkelig", "sliten", "sulten", "trøtt", "konsentrert",]

function textGenerator(){
    const genre = genres[Math.floor(Math.random()*genres.length)];
    const currentWeather = weather[Math.floor(Math.random()*weather.length)];
    const mood = moods[Math.floor(Math.random()*moods.length)];
    console.log("idag er det fint å høre på "+genre+", siden det er "+currentWeather+" og du blir "+mood+".");

}

textGenerator();
