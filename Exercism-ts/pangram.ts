export function isPangram(str: string) {
    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const regex = /[a-zA-Z]/g
    const modifiedStr: string[] | null = str.toLowerCase().match(regex)
    if(modifiedStr == null){
        return false
    }
    console.log(modifiedStr)
    const verifyLetters: boolean = alphabet.every(item => modifiedStr.includes(item))
    return verifyLetters
}
