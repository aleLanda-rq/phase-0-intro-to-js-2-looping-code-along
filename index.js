
function writeCards(names, event) {

  const messages = [];
   for (let i = 0; i < names.length; i++) {
     const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
     messages.push(message);
   }
   return messages;
 
 }
 console.log(writeCards(['Bob', 'Sue'], 'wedding'));

function countDown(){
    for(let num=0; num <11;num++){
      console.log(num)
    }
}