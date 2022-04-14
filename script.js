const genres = ["rock", "pop", "punk", "klassisk", "country", "folkemusikk", "rap", "hip-hop", "indie", "metal", "jazz", "soul", "blues", "funk", "k-pop", "gospel", "julemusikk", "latin"];
const weather = ["sol", "snø", "regn", "yr", "tåke", "minusgrader", "frost", "overskyet", "storm", "orkan"];
const moods = ["glad", "gal", "sur", "bisk", "irritert", "sint", "engasjert", "deprimert", "lykkelig", "sliten", "sulten", "trøtt", "konsentrert",]

function textGenerator(){
    const genre = genres[0];
    const currentWeather = weather[0];
    const mood = moods[0];
    console.log("idag er det fint å høre på "+genre+", siden det er "+currentWeather+" og du blir "+mood+".");

}

textGenerator();
