export function score(x: number, y: number): number{
    const distanciaEuclidiana = Math.sqrt((x ** 2 - 0) + (y ** 2 - 0)) 
    if(distanciaEuclidiana > 10){
        return 0
    }
    else if(distanciaEuclidiana > 5 && distanciaEuclidiana <= 10){
        return 1
    }
    else if(distanciaEuclidiana > 1 && distanciaEuclidiana <= 5){
        return 5
    }
    else if(distanciaEuclidiana <= 1){
        return 10
    }
    else{
        return 0
    }
}
