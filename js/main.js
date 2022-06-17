

// 1 CREO UN ARRAY PER CREARE UN ELENCO DI MAIL

let mailList = ["gigimario@gmail.com", "gianforbio@gmail.com", "amicoimmaginario@gmail.com", "luomocheuscivalagente@herbertballerina.com", "batman@gothamcity.com"];
  console.log(mailList);

// 2 CHIEDO ALL'UTENTE DI INSERIRE IL SUO INDIRIZZO MAIL

const userMail = prompt('enter your email address');

// 3 FURI DAL FOR, PONGO L CONDIZIONE FALSE PER SELEZIONARE LE MAIL CHE L'UTENTE ANDRà AD INSERIRE PER TROVARLA NELL'ELENCO

let mailChoosen = false;

// creo un ciclo for per implementare la ricerca della mail inserita dall'utente all'interno dell'array creato usando la logica di Boole

 for (let index = 0; index < mailList.length; index++) {
    console.log(index);

    // ora stabilisco un'identità fra l'elemento cercato dall'utente e l'elemento presente nell'array

    if( userMail === mailList ){
        mailChoosen = true;
    }

}

console.log(mailChoosen);

