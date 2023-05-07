
/**
 * Esta función devuelve el valor de la carta
 * @param {Array<String>} carta 
 * @returns {Number} Valor carta
 */
export const valorCarta = (carta)=> {
    if( !carta ) 
    throw new Error ('carta es oblogatorio como un arreglo de string')
    const valor = carta.substring(0, carta.length - 1 );
    return ( isNaN( valor )) ? 
            ( valor === 'A') ? 11 : 10
            : valor * 1 
}