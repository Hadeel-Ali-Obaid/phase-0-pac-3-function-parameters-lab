function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}


/*function introductionWithLanguageOptional(name, language) {
    let defaultLanguage = 'JavaScript';
    if (language) {
        defaultLanguage = language;
    } 
    return `Hi, my name is ${name} and I am learning to program in ${defaultLanguage}.`
}*/


function introductionWithLanguageOptional(name, language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}