Dette er en Quotes App laget med Node.js, Express og ren JavaScript. Applikasjonen fungerer som en enkel fullstack løsning der brukeren kan hente tilfeldige quotes, se alle quotes som ligger lagret, og legge til nye quotes. Dataene lagres i en JSON-fil på serveren, og frontend blir servert direkte fra Express ved hjelp av express.static.

Prosjektet bruker Node.js som runtime og Express som backend-rammeverk for å håndtere HTTP-forespørsler. I serveren er det satt opp tre hovedendepunkter. GET /quotes returnerer alle quotes som er lagret. GET /quotes/random returnerer én tilfeldig quote fra listen. POST /quotes brukes til å legge til en ny quote, der teksten sendes i request body som JSON.

Når serveren starter, leses eksisterende quotes fra filen quotes.json og lagres i minnet. Når en ny quote legges til, oppdateres både minnet og JSON-filen slik at dataene blir lagret permanent.

Frontend er laget med HTML, CSS og JavaScript. Den bruker fetch-API for å kommunisere med backend. Funksjonen getQuote sender en GET-request til /quotes/random og viser teksten på nettsiden. Funksjonen addQuote sender en POST-request til /quotes med en ny tekst som brukeren skriver inn, og tømmer input-feltet etterpå.

Applikasjonen kjøres lokalt på port 3000, og serveren er tilgjengelig via IP-adresse slik at andre enheter på samme nettverk kan bruke den. Frontend blir servert direkte fra backend, slik at brukeren får opp nettsiden ved å gå til serverens IP-adresse i nettleseren.
Dette prosjektet viser hvordan frontend og backend kan jobbe sammen gjennom et enkelt REST API, og hvordan data kan lagres og oppdateres uten en ekstern database ved hjelp av JSON-fil.# provemuntlig

