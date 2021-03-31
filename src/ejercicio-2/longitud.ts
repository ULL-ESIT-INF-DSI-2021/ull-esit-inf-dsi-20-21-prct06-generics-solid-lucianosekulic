import {isConvertible} from './convertible'
type long = number;

/**
 * clase longitud que implementa isConvertible
 */
export class Longitud implements isConvertible<long> {

    /**
     * constructor de la calse longitud
     * @param num1 
     */
    constructor(num1: long) {}

    /**
     * funcion para convertir de km a metros
     * @param num1 
     * @returns num1, resultado de la conversion
     */
    conversion(num1: long) {
      const constMetros: number = 1000;
      num1 = num1 * constMetros;
      return num1;
    }
}