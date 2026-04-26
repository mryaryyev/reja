// console.log('TRAIN AREA!');

// A-TASK
/*
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


// B-TASK
/*
Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/
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
