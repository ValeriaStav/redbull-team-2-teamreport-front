export const upperLetters = (name) =>{
    let firstLetters = '';
    for(let i = 65; i < 91; i++){
        for(let letter of name){
            if(letter === String.fromCodePoint(i))
                firstLetters += letter
        }
    }
    return firstLetters;
}