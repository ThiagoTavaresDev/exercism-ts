export function age(planet: string, seconds: number): number{
    
    let earthAge: number = seconds / 31557600;
    let MercuryAge: number = earthAge / 0.2408467;
    let VenusAge: number = earthAge / 0.61519726;
    let MarsAge: number = earthAge / 1.8808158;
    let JupiterAge: number = earthAge / 11.862615;
    let SaturnAge: number = earthAge / 29.447498;
    let UranusAge: number = earthAge / 84.016846;
    let NeptuneAge: number = earthAge / 164.79132;
    let result: number = 0;
    switch (planet) {
        case 'mercury':
            result = Number(MercuryAge.toFixed(2));
            return result
        case 'venus':
            result = Number(VenusAge.toFixed(2));
            return result
        case 'earth':
            result = Number(earthAge.toFixed(2));
            return result
        case 'mars':
            result = Number(MarsAge.toFixed(2));
            return result
        case 'jupiter':
            result = Number(JupiterAge.toFixed(2));
            return result
        case 'saturn':
            result = Number(SaturnAge.toFixed(2));
            return result
        case 'uranus':
            result = Number(UranusAge.toFixed(2));
            return result
        case 'neptune':
            result = Number(NeptuneAge.toFixed(2));
            return result
        default: {
            throw new Error('planeta inválido')
        }
    }
    return result
}
