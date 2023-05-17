let gsaveEl = document.getElementById("gsave-el")
let gcountEl = document.getElementById("gcount-el")
let gcount = 0

function gincrement() {
    gcount += 1
    gcountEl.textContent = gcount
}

function gsave() {
    let gcountStr = gcount + " + "
    gsaveEl.textContent += gcountStr
    gcountEl.textContent = 0
    gcount = 0
}

let bsaveEl = document.getElementById("bsave-el")
let bcountEl = document.getElementById("bcount-el")
let bcount = 0

function bincrement() {
    bcount += 1
    bcountEl.textContent = bcount
}

function bsave() {
    let bcountStr = bcount + " + "
    bsaveEl.textContent += bcountStr
    bcountEl.textContent = 0
    bcount = 0
}
