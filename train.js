console.log("TRAIN AREA!");
/*
G-TASK
Shunday function tuzingki
unga integerlardan iborat array pass bolsin va
function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini
*/
function getHighestIndex(a) {
  if (a.some((ele) => typeof ele !== "number")) {
    return "ERROR, elements of array must be number";
  }

  let highestIndex = 0;
  for (let i = 1; i < a.length; i++) {
    if (a[i] > a[highestIndex]) {
      highestIndex = i;
    }
  }
  return highestIndex;
}
a = [1, 5, 8, 9, 2];
result1 = getHighestIndex(a);
console.log(result1);

b = [5, 7, 25, 7, 25];
result2 = getHighestIndex(b);
console.log(result2);

c = [5, 7, 25, 7, "b"];
result3 = getHighestIndex(c);
console.log(result3);

/* F-TASK
Shunday findDoublers function tuzing,
unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi.
*/
/*
function findDoublers(a) {
    if (typeof a !== "string") {
        return "ERROR, write only string";
    }

    let word = "";
    for (i = 0; i < a.length; i++) {
        if (word.includes(a[i])) {
            return true;
        }
        word += a[i];
    }
    return false;
}

const IsSameLetter1 = findDoublers("hello");
console.log(IsSameLetter1)

const IsSameLetter2 = findDoublers("mit");
console.log(IsSameLetter2)
*/

/* E-TASK
Shunday function tuzing,
u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh".
*/
/*
function getReverse(a) {
    let b = a.split(""); //convert string to array
    return b.reverse().join(""); //reverse in array and convert it to string
}

const getReverse1 = getReverse("hello");
console.log(getReverse1);

const getReverse2 = getReverse("goodbye")
console.log(getReverse2);
*/

/* D-TASK
Shunday class tuzing tuzing nomi Shop,     
va uni constructoriga 3 hil mahsulot pass bolsin,
hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/
/*
const moment = require("moment");
const time = moment().format("HH:mm");
class Shop {
  //state
  non;
  lagmon;
  cola;
  //constructor
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }
  //method
  qoldiq() {
    console.log(
      `Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`,
    );
  }

  sotish(product, quantity) {
    this[product] -= quantity;
  }

  qabul(product, quantity) {
    this[product] += quantity;
  }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();
*/

/* C-TASK
Shunday function tuzing, u 2ta string parametr ega bolsin.
hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true.
*/
/*
function checkContent(a, b) {
  if (a.length !== b.length)
    return false;

  for (i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      return false;
    }
  }
  return true;
}
const c_task1 = checkContent("day", "yad");
const c_task2 = checkContent("money", "yeno");
const c_task3 = checkContent("qwerty", "qwertt");
console.log(c_task1);
console.log(c_task2);
console.log(c_task3);
*/

/* B-TASK
Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/
/*
function countDigits(a) {
    let count = 0
    for(i = 0; i < a.length; i++) {
        if(a[i] >= 0 && a[i] <= 9) {
            count++
        } 
    }
    return count
}
const b_task = countDigits("asd213qw5e056jkl7");
console.log(b_task);
*/

/* A-TASK
Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/
/*
// a => letter
// b => word
function count_letter(a,b) {
    let count = 0
    for (i = 0; i < b.length; i++) {
        if (a===b[i]) {
            count++
        }
    }
    return count
}
const a_task = count_letter("a", "ashgabat");
console.log(a_task);
*/

/*
console.log('Jack Ma maslahatlari');
const list = [
    "yahshi talaba boling", // 0-20
    "togri boshliq tanlang va koproq hato qiling", // 20-30
    "uzingizga ishlashingizni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi dam oling, foydasi yoq endi", //60 
];
*/

// Event loop vs Callback function
/*
function maslahatBering(a, callback) { //callbackni birinchi kismi hatolikga tegishli-ERROR, 2nci kismi qaytormokchi bolgan resultga tegishli -DATA
    if (typeof a !== 'number') callback("insert number", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 & a <= 30) callback(null, list[1]);
    else if(a > 30 & a <= 40) callback(null, list[2]);
    else if(a > 40 & a <= 50) callback(null, list[3]);
    else if(a > 50 & a <= 60) callback(null, list[4]);
    else {
        setTimeout(function() {
            callback(null, list[5]);
        }, 5000);
        //callback(null, list[5]);
    }
}
*/

/*
maslahatBering(10, (err, data) => { //bu yerda callback ->function sifatida
    if(err) console.log("ERROR:", err);
    console.log("javob:", data)
});
*/

/*
maslahatBering(55, (err, data) => {
    if(err) console.log("ERROR:", err);
    console.log("javob:", data);
});
*/

/*
maslahatBering("", (err, data) => {
    if(err) console.log("ERROR:", err);
    console.log("javob:", data);
});
*/

/*
maslahatBering("salom", (err, data) => {
    if(err) console.log("ERROR:", err);
    else {
        console.log("javob:", data);
    } 
});
*/

/*
console.log('passed here 0');
maslahatBering(65, (err, data) => {
    if(err) console.log("ERROR:", err);
    else {
        console.log("javob:", data);
    } 
});
console.log('passed here 1');
*/

// ASYNCHRONOUS function
/*
async function maslahatBering(a) {
    if (typeof a !== 'number') throw new Error("insert a number");
    else if (a <= 20) return list[0];
    else if (a > 20 & a <= 30) return list[1];
    else if (a > 30 & a <= 40) return list[2];
    else if (a > 40 & a <= 50) return list[3];
    else if (a > 50 & a <= 60) return list[4];
    else {
        return list[5];
        // setTimeout(function() {
        //     callback(null, list[5]);
        // }, 5000);
        // //callback(null, list[5]);
    }
}
*/

// Call via THEN / CATCH
/*
console.log('passed here 0');
maslahatBering(25)
    .then((data) => {
        console.log("javob:", data);
    })
    .catch((err) => {
        console.log("ERROR:", err);
    });
console.log('passed here 1');
*/

// CALLBACK HELL yoki PROMISE HELL hosil bolyapti => juda naqulay
/*
console.log('passed here 0');
maslahatBering(25)
    .then((data) => {
        maslahatBering(35) // 
            .then((data) => {
                maslahatBering(45)
                    .then((data) => {
                        console.log("javob:", data);
                    })
                    .catch((err) => {
                        console.log("ERROR:", err);
                    });
                console.log('passed here 1');
                console.log("javob:", data);
            })
            .catch((err) => {
                console.log("ERROR:", err);
            });
        console.log('passed here 1');
        console.log("javob:", data);
    })
    .catch((err) => {
        console.log("ERROR:", err);
    });
console.log('passed here 1');
*/

// Call via ASYNCH / AWAIT
/*
async function run() {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(31);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
}
run();
*/

// PROMISE function --> bizga SetTimeout ishlashga yordam beradi
/*
async function maslahatBering(a) {
    if (typeof a !== 'number') throw new Error("insert a number");
    else if (a <= 20) return list[0];
    else if (a > 20 & a <= 30) return list[1];
    else if (a > 30 & a <= 40) return list[2];
    else if (a > 40 & a <= 50) return list[3];
    else if (a > 50 & a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000)
            // setInterval(() => {
            //     resolve(list[5]);
            // }, 1000)
        });
    }
}

async function run() {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(65);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
}
run();
*/
