//recupero gli elementi del dom che mi servono
const mailList = document.getElementById(`mail-list`);

//chiamata AJAX
const emailGenerator = () => {
  //ciclo per 10 per generare 10 mail
  for (let i = 0; i < 10; i++) {
    //recupero il risultato della chiamata ajax
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((resp) => {
        const email = resp.data.response;
        mailList.innerHTML += `<li>${email}</li>`;
      });
  }
};

//richiamo la funzione
emailGenerator();
