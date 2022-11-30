const vardasAkt = "žan-Pol";
const pavardeAkt = "Belmando";
if (vardasAkt.length > pavardeAkt.length) {
    console.log(pavardeAkt);
    alert(pavardeAkt);
}
else {
    console.log(vardasAkt);
    alert(pavardeAkt);
}
//-----------------------------
const vardasMe = "Arvydas";
const pavardeMe = "Grigalauskas";
const born = new Date("2000");
let d = new Date();
d = d.getFullYear() - born.getFullYear();
console.log("Aš esu " + vardasMe + " " + pavardeMe + ". Man yra " + d + " metai(ų)");
alert("Aš esu " + vardasMe + " " + pavardeMe + ". Man yra " + d + " metai(ų)");
//----------------------
const vardasAkt2 = vardasAkt;
const pavardeAkt2 = pavardeAkt;
let rezult = "";
rezult = vardasAkt2[vardasAkt2.length - 3];
rezult += vardasAkt2[vardasAkt2.length - 2];
rezult += vardasAkt2[vardasAkt2.length - 1];
rezult += pavardeAkt2[pavardeAkt2.length - 3];
rezult += pavardeAkt2[pavardeAkt2.length - 2];
rezult += pavardeAkt2[pavardeAkt2.length - 1];
console.log(rezult);
alert(rezult);
