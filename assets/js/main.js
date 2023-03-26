console.log("huhu");

// lvl_2_1

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

// ==============================================================
let edelMetallPreiseArrName = [];

edelMetallPreise.forEach(element => {
    edelMetallPreiseArrName.push(element.name);
});
// console.log(edelMetallPreiseArrName);

edelMetallPreiseArrMapName = edelMetallPreise.map((element) => {
    return element.name
})
// console.log(edelMetallPreiseArrMapName);

// ==============================================================
let edelMetallPreiseArrPreis = [];

edelMetallPreise.forEach(element => {
    edelMetallPreiseArrPreis.push(element.preiseGramEuro);
});
// console.log(edelMetallPreiseArrPreis);

edelMetallPreiseArrMapPreis = edelMetallPreise.map((element) => {
    return element.preiseGramEuro
})
// console.log(edelMetallPreiseArrMapPreis);

// ==============================================================
let edelMetallPreiseArrVer = [];

edelMetallPreise.forEach(element => {
    edelMetallPreiseArrVer.push(element.veraenderung);
});
// console.log(edelMetallPreiseArrVer);

edelMetallPreiseArrMapVer = edelMetallPreise.map((element) => {
    return element.veraenderung
})
// console.log(edelMetallPreiseArrMapVer);

// ==============================================================
let edelMetallPreis2 = edelMetallPreise.filter((element) => {
    return element.preiseGramEuro > 50
})
// console.log(edelMetallPreis2);

// ==============================================================

// lvl_2_2

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

let singersName = singers.map((element) => {
    return names = element.name
})

singersName.sort();

const singersSorted = singersName.map((singer) => {
    let singersReturn;

    singers.forEach((element) => {
        if (singer === element.name) {
            singersReturn = element
        }
    }) 
    return singersReturn
})

// lösung alternativ 
/*
let singersSorted = [];

singersName.forEach((singer) => {
    singers.forEach((element) => {
        if (singer === element.name) {
            singersSorted.push(element);
        }
    })
});
*/
console.log(singersSorted);