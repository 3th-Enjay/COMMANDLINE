const readline= require('readline');
const rl = readline.createInterface(
    process.stdin,process.stdout
 );


 rl.question('what is your name', function (answer){
    console.log(answer)
 })
 
 rl.on('SIGINT',()=>{
    console.log('terminated')
    rl.close()
 })