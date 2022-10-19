/*
* Zentai Pál
* Szoft-II-N
* 2022-10-19
*/
var oldalElem = document.querySelector("#oldal");
var szamitGomb = document.querySelector("#szamitGomb");
function szamolAtlo(oldal) {
    return Math.sqrt(2) * oldal;
}
szamitGomb === null || szamitGomb === void 0 ? void 0 : szamitGomb.addEventListener('click', function () {
    var oldal = Number(oldalElem.value);
    var atlo = szamolAtlo(oldal);
    alert(atlo);
});
