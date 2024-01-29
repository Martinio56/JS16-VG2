//Tekstfil
// fetch('./textFile.txt')
//     .then(response => response.json())
//     .then(array => array.forEach(element => {
//         console.log(element);
//         console.log('Tekst Fil Oppgave 1');
//         console.log(array[2].address.street);
//         console.log(array[2].address.suite);
//         console.log('Tekst Fil Oppgave 2');
//         console.log(array[0].phone);
//         array[0].phone = "1-880-846-9042 x67553"
//         console.log(array[0].phone);
//         console.log('Tekst Fil Oppgave 3');
//         console.log(array[7].name);
//         console.log(array[7].username);
//    })); //se svarene under første person. På resten er ikke tlf riktig


//JSON
fetch('./fotograf.json')
    .then(response => response.json())
    .then(result => {
        result.forEach(element => {
            console.log(element);
            
        //Koden er nok feil er veldig usikker på hvordan jeg skal telle antall bilder og er bilder thumbnailUrl??
            // var antall = 0;
            // for (let i = 0; i < result.length; i++) {
            //     if (result[i].thumbnailUrl === true) 
            //     antall++
            // }
            // console.log(antall);

            //Det er 100 album i fotograf.json (Vet ikke hvordan jeg skal telle dette)
            
            //Oppgave 3 json fil
            // console.log(result[237].title);

            //Oppgave 4 json fil
            visBilde = () => {
                const div = document.getElementById("bildeDiv");

                    const img = document.createElement('img');
                    img.src = result[554].thumbnailUrl;
                    img.style.width = "200px"
                    div.appendChild(img);
                
            }
        });
        visBilde();
    })