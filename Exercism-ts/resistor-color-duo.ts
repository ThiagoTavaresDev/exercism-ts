export function decodedValue(color: string[]): any {
    const colors: string[] = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']
    let storage: number[] = [] 
    for(let i = 0; i < colors.length; i++){
      let colorIndex = (colors.indexOf(color[i]))
      if(colorIndex !== -1){
         storage.push(colorIndex)
      }
    }
    return storage[0] * 10 + storage[1]
          
    }
    