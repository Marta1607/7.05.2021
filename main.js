function pobieranie() {
    let imie = document.getElementById('imie').value
    let nazwisko = document.getElementById('nazwisko').value
    let email = document.getElementById('email').value
    let telefon = document.getElementById('telefon').value
    let wiadomość = document.getElementById('wiadomosc').value
    console.log(imie, nazwisko, email, telefon, wiadomość)
}

function myFunction1() {
    const imie = document.getElementById('imie').value
    console.log(imie)
}

function myFunction2() {
    const nazwisko = document.getElementById('nazwisko').value
    console.log(nazwisko)
}

function myFunction3() {
    const email = document.getElementById('email').value
    console.log(email)
}

function myFunction4() {
    const telefon = document.getElementById('telefon').value
    console.log(telefon)
}

function myFunction5() {
    const wiadomosc = document.getElementById('wiadomosc').value
    console.log(wiadomosc)
}


function myFunction1() {
    const imie = document.getElementById('imie').value
    if (imie.length < 3) {
        alert("za krótkie imię")
        console.log(imie)
    }
}
function myFunction2() {
    const nazwisko = document.getElementById('nazwisko').value
    if (nazwisko.length < 3) {
        alert("za krótkie nazwisko")
        console.log(nazwisko)
    }
}

function myFunction5() {
    const wiadomosc = document.getElementById('wiadomosc').value
    if (wiadomosc.length < 20) {
        alert("za krótka wiadomość")
        console.log(wiadomosc)
    }
}


function myFunction4(val) {
    const arr = val.split('')
    const num = arr.filter(item => {
        if(item === '0' || item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            return item
        } 
        else {
            alert('to nie jest cyfra')
        }
    })
    console.log(num)
}

function myFunction4() {
    const tel = document.getElementById('telefon').value
    if (tel.length < 9) {
    alert('za któtki telefon')
    console.log(tel)
}
}


// function myFunction3() {
//     const malpa = document.getElementById('email')
//         if(malpa.length('@') <= 1) {
//             return malpa
//         } 
//         else {
//             alert('brakuje @')
//         }
//     console.log(malpa)
//     }

    function myFunction3() {
        const malpa = document.getElementById('email')
            if(malpa.search('@') <= 1) {
                alert('to nie jest cyfra')} 
            else {
            }
        console.log(malpa)
    }