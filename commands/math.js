

module.exports = {
    name: 'maths',
    description: 'basic maths',
    execute(client, message, args) {
        const symbols = ["+", "-", "*", "/"];
        
        let total = 0;
        let cSymbol = "+"
        console.log(args)
        args.forEach(index => {
          if(!isNaN(index)){
            switch(cSymbol){
              case "+":{
                console.log(Number(index));
                total += Number(index)
                break;
              }

              case "-":{
                total -= Number(index)
                break;
              }

              case "/":{
                total /= Number(index)
                break;
              }

              case "*":{
                total *= Number(index)
                break;
              }
            }
          }
          if(symbols.includes(index)) cSymbol = index;
        })
        console.log(total)
        return message.channel.send(`${total}`)
    }
}