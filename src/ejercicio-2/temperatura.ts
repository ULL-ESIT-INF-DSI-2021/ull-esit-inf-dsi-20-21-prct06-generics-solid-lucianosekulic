import {isConvertible} from './convertible'
type temp = number;

/**
 * clase temperatura que implementa isConvertible
 */
export class Temperatura implements isConvertible<temp> {
    
    /**
     * constructor de la clase temperatura
     * @param num1 
     */
    constructor(num1: temp) {}

    /**
     * funcion para comvertir de ºc a ºk
     * @param num1 
     * @returns num1, resultado d la conversion
     */
    conversion(num1: temp) {
      const constTemp: number = 273.15;
      num1 = num1 + constTemp;
      return num1;
    }
}