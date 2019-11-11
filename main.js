const odabiri = document.querySelectorAll('.karakteri p');
let odabir;

console.log(odabiri);



for (let i = 0; i < odabiri.length; i++) {
    odabiri[i].addEventListener('click', (e) => {
        e.preventDefault();
        odabir = odabiri[i].textContent;
        console.log('odabir je ', odabir)

    })
}

function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
    document.getElementById('pocetna').style.display = "none";
    if (odabir == "DŽECA") {
        console.log('odabrala sam dzecu, nema na cemu');
        document.getElementById('dzeca').style.display = "block";
    }

    if (odabir == "GAVI") {
        document.getElementById('gavi').style.display = "block";
    }

    if (odabir == "MARMI") {
        document.getElementById('marmi').style.display = "block";
    }

    if (odabir == "MICA") {
        document.getElementById('mica').style.display = "block";
    }

    if (odabir == "NINKO") {
        document.getElementById('ninko').style.display = "block";
    }

    if (odabir == "JANKO") {
        document.getElementById('janko').style.display = "block";
    }
}