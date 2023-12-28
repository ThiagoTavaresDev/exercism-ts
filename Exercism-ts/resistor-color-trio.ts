export function decodedResistorValue(color:string[]) {
    const colors: string[] = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']
      let zero = '0'
      let storage: number[] = [] 
      let quantity;
      let numbersNotZero: string[] = []
      let numbersZero: string[] = []
      for(let i = 0; i < colors.length; i++){
        let colorIndex = (colors.indexOf(color[i]))
        if(colorIndex !== -1){
           storage.push(colorIndex)
        }
      }
      if(storage[2] != 0){
            quantity = storage[0] * 100 + storage[1] * 10 + zero.repeat(storage[2] - 1)
        
      }
    else{
      quantity = storage[0] * 10 + storage[1]
  
    }
      const stringArrayed: string[] = String(quantity).split('');
    console.log(stringArrayed);
     for(let i = 0; i < stringArrayed.length; i++){
        if(stringArrayed[i] !== '0'){
          numbersNotZero.push(stringArrayed[i])
        }
        else{
          numbersZero.push(stringArrayed[i])
        }
     }
    console.log(numbersNotZero)
    console.log(numbersZero)
  }