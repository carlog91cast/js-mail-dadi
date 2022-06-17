

// // 1 CREO UN ARRAY PER CREARE UN ELENCO DI MAIL

// let mailList = ["gigimario@gmail.com", "gianforbio@gmail.com", "amicoimmaginario@gmail.com", "luomocheuscivalagente@herbertballerina.com", "batman@gothamcity.com"];
// console.log(mailList);

// // 2 CHIEDO ALL'UTENTE DI INSERIRE IL SUO INDIRIZZO MAIL

// const userMail = prompt('enter your email address');

// // 3 FURI DAL FOR, PONGO L CONDIZIONE FALSE PER SELEZIONARE LE MAIL CHE L'UTENTE ANDRà AD INSERIRE PER TROVARLA NELL'ELENCO

// let mailChoosen = false;

// // creo un ciclo for per implementare la ricerca della mail inserita dall'utente all'interno dell'array creato usando la logica di Boole

// for (let index = 0; index < mailList.length; index++) {
//     console.log(mailList[index]);


//     const singleMail = mailList[index];
//     console.log(singleMail)

//     // ora stabilisco un'identità fra l'elemento cercato dall'utente e l'elemento presente nell'array

//     if (userMail === singleMail) {
//         mailChoosen = true;
//     }

// }

// console.log(mailChoosen);

// DADI

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//assegno il numero ai due giocatori

const pcNum = Math.floor( (Math.random() * (7 - 1) ) +1);
    console.log(pcNum)
const userNum = Math.floor( (Math.random() * (7 - 1) ) +1);
    console.log(userNum)
// pongo la condizione in base alla quale metto in relazione i due num per stabilire chi sia il maggiore

if (pcNum == userNum) {
    console.log('pareggio');}
  else if (pcNum < userNum) { 
    console.log('ho vinto');
  } else {
    console.log('vai a casa');}

