//document.write("Labas xxx");

confirm("Gerai?");
alert("Geras oras");
var x1 = prompt("Kiek tau metu");


// ND 20230106 >>>>>>-------------------------------------------------------------------------
class Vaisius {
    constructor() {
        this.id;
        this.dydis;
        this.prakastas;
    }

    setVaisius(size) {
        let max = 0;
        if (Krepsys.vaisiai.length != 0) max = Math.max.apply(Math, Krepsys.vaisiai.map((o) => o.id));
        this.id = max + 1;
        this.dydis = size;
        this.prakastas = false;
        // return;
    }

    prakasti(obj) {
        obj.prakastas = true;
        grauztukai.push(obj);
    }
}

class Krepsys {
    static vaisiai = [];
    static pripildyti() {
        while (this.vaisiai.length < 20) {//užpild 20 obj (vaisiai = [];) ir išrūšiuoti nuo max iki min dydžio
            const fruit = new Vaisius();
            fruit.setVaisius(rand(5, 25));
            this.vaisiai.push(fruit);
        }
        this.vaisiai.sort((v1, v2) => v2.dydis - v1.dydis);
        console.log(Krepsys.vaisiai);
    }

    static isimti() {
        //iš (vasiai = []) ištrinti max vaisiu (jį parodyti)
        //, paleidziant prakasti(id), 

        console.log(this.vaisiai[0]);
        alert('Išimtas vaisius. ID: ' + this.vaisiai[0].id + ', dydis: ' + this.vaisiai[0].dydis);
        // document.write('Išimtas vaisius. ID: ' + this.vaisiai[0].id + ', dydis: ' + this.vaisiai[0].dydis);

        const niam = new Vaisius();
        niam.prakasti(this.vaisiai[0]);
        this.vaisiai.shift();
    }

}
// ND 20230106 <<<<<<<<<-------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

// ND 20230103 >>>>>>-------------------------------------------------------------------------
// async function fnNewUser(){await ...}//Alternatyva
const fnNewUser = async () => {
    await fnGetUser();
}

let userObj;
const fnGetUser = () => {
    fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            userObj = data.results[0];
            document.querySelector('#photo').setAttribute('src', userObj.picture.large);
            document.querySelector('h4').textContent = "Hi, My name is"
            document.querySelector('.user h1').textContent = userObj.name.first + ' ' + userObj.name.last;
            fnColorIcon('#name');
        });
}

document.querySelector('#name').style.color = 'grey';

const atr = document.querySelector('#photo').addEventListener('mouseover', () => {
    document.querySelector('#newUser').setAttribute('style', 'display: block;');
});
// ND 20230103 <<<<<<<<<-------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ND 20221228 >>>>>>----------------------------------------------------------------------------
// event.preventDefault();//-- preventDefault() - standartinis page perkrovimo sustabdymas paspaudus button
// funkcija beep
document.querySelector('button').style.cssText = 'display: none';//paslepia mygtuka
document.querySelector('#round').textContent = 'Round: ' //+ game; -- iveda teksta

tm = document.querySelector('[name="minutes"]').value;
document.querySelector('button').remove;
document.querySelector('form').removeAttribute('onsubmit');

document.querySelector('#timer').innerHTML = '<span style="color: red"> ABC </span>';

intervalStart = setInterval(fnMove, 1000);
clearInterval(intervalStart);


console.log(Math.ceil(2.1));//= 3
console.log(Math.floor(2.9))//= 2

// ND 20221228 <<<<<<<<<-------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ND 20221223 >>>>>>----------------------------------------------------------------------------
const store = [];
store.map((product, index) => {
    addTag += `<tr>
    <td>${product.item}</td>
    <td>${product.qty}</td>
    <td><button onclick="fnDeleteItem(${index})" class="btn btn-danger">Šalintti</button></td></tr>`
});

store.push(product);

function fnDeleteItem(index) {
    store.splice(index, 1);            // delete store[index];
    fnViewStore();
}
// ND 20221223 <<<<<<<<<-------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ND 20221222 >>>>>>----------------------------------------------------------------------------
// let x = event.target.querySelector('#fname').value;  //---------- ALTERNATYVA ----------

document.querySelector("form").insertAdjacentHTML('beforebegin', "<p></p>");

if (fname.length < 2) document.querySelector('#fname').classList.add('err');
else document.querySelector('#fname').classList.remove('err');

// ND 20221222 <<<<<<<<<-------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ND 20221220 santrauka anksteniu užduočių <<<<<<<<<--------------------------------------------


// ND 20221220 santrauka anksteniu užduočių  <<<<<<<<<-------------------------------------------
// ----------------------------------------------------------------------------------------------