function getCantimetersFromMetres (metres) {
    let centimetres = metres * 100;
    console.log(centimetres);
    return centimetres;
}

// First exercise 
// 1. Create a called function that will check if age is enough for Driver License
// 2. Create a variable that will take values from the prompt input.
// 3. Add a condition if age is greater or equals 18, it's true
// 4. The rest will be false.
// 5. Call the function.

function canGetDriverLicense() {
    let age = prompt('Введите свой возраст', '');
    if (age >= 18) {
        alert(true);
    } else {
        alert(false);
    }
}
canGetDriverLicense()

function canGetDriverLicenseSecond() {
    let age = prompt('Возраст?', 18);
    let licenseAllowed = (age >=18) ? alert(true) : alert(false); 
}
canGetDriverLicenseSecond(18)

// Second exercise
// 1. Create a called function that will return the name of the season by it's number
// 2. Create a variable for month
// 3. Create a if else loop with conditions if value of variable greater than .., but less than ... return It's ...  
// 4. Call the function 

function getSeason() {
    let month = prompt('Введите порядковый номер месяца', '');
    if ( 1 <= month && month <= 2 && month == 12 ) {
        alert(`It's winter!`);
    } else if ( 3 <= month && month <= 5 ) {
        alert(`It's spring!`);
    } else if ( 6 <= month && month <= 8 ) {
        alert(`It's summer!`);
    } else if ( 9 <= month && month <= 11 ) {
        alert(`It's autumn!`);
    }
    else {
        alert('Я сказала, введите номер месяца!')
    }
}
getSeason()