

function warmOrCold(outsideTemp) {
    if (outsideTemp < 10) {
        alert(`Het is kaulo koud G`)
    }
    if (outsideTemp < 16) {
        document.body.innerHTML += `<br>HeT iS nIeT wArM, mAaR jE kUnT bEtEr EeN jAs AaNdOeN<br>`
    }
    if (outsideTemp < 24) {
        console.log(`HeT iS nIeT kOuD, mAaR oOk NiEt WaRm`)
    }
    if (outsideTemp >= 24 && outsideTemp <= 30) {
        document.body.innerHTML += `<br>DoE jE jAs AaN<br>`
    }
    if (outsideTemp > 30) {
        document.body.innerHTML += `<br>Koud biertje?<br>`
    }
}

let todayTemperature = prompt(`Hoe warm is het buiten (graden celsius)?`);
warmOrCold(todayTemperature);

// let pingas = prompt(`Hoe warm is het buiten (graden celsius)?`);
// warmOrCold(pingas);

// let pingus = prompt(`Hoe warm is het buiten (graden celsius)?`);
// warmOrCold(pingus);

// let bingChilling = prompt(`Hoe warm is het buiten (graden celsius)?`);
// warmOrCold(bingChilling);

function smashOrPass(grade) {
    let passed; false;
    if (grade >= 5.5) {
        passed = true;
    }
    if (passed = true) {
        document.body.innerHTML += `Je bent geslaagd, joepie de poepie.`
    } if else {
        document.body.innerHTML += `Je bent gezakt, wat rot voor je.`
    }
}

let grade1 = prompt(`Wat heb je voor cijfer gehaald?`);
smashOrPass(grade1);

let grade2 = prompt(`Wat heb je voor cijfer gehaald?`);
smashOrPass(grade2);

let grade3 = prompt(`Wat heb je voor cijfer gehaald?`);
smashOrPass(grade3);