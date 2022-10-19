/*
* Zentai Pál
* Szoft-II-N
* 2022-10-19
*/

const oldalElem = document.querySelector("#oldal") as HTMLInputElement;
const szamitGomb = document.querySelector("#szamitGomb");

function szamolAtlo(oldal: number): number {
    return Math.sqrt(2) * oldal;
}

szamitGomb?.addEventListener('click', () => {
    let oldal = Number(oldalElem.value);
    let atlo = szamolAtlo(oldal);
    alert(atlo);
});