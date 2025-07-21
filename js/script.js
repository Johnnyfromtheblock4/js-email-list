//recupero gli elementi del dom che mi servono
const mailList = document.getElementById(`mail-list`);

//definisco un array in cui inserire le mail
const mails = [];

//chiamata AJAX
//ciclo per 10 per generare 10 mail
for (let i = 0; i < 10; i++) {
  //recupero il risultato della chiamata ajax
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((resp) => {
      //recupero la mail in risposta alla chiamata
      const email = resp.data.response;

      //inserisco la mail recuperata all'interno dell'array
      mails.push(email);

      //inserisco tramite HTML degli li all'interno della ul
      mailList.innerHTML += `<li>${email}</li>`;

      //quando l'array ha 10 elementi, allora tolgo la classe d-none dall'ul
      if (mails.length === 10) {
        mailList.classList.remove("d-none");
      }
    });
}
