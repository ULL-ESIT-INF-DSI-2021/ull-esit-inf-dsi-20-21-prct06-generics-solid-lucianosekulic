import {isConvertible} from './convertible'
type time = number;

/**
 * clase tiempo que implementa isConvertible
 */
export class Tiempo implements isConvertible<time> {

    /**
     * constructir de la clase tiempo
     * @param num1 
     */
    constructor(num1: time) {}
    
    /**
     * funcion para convertir minutos a segundos
     * @param num1 
     * @returns num1, resultado de la conversion
     */
    conversion(num1: time) { // pasar de min a seg
      const constTiempo: number = 60;
      num1 = num1 * constTiempo;
      return num1;
    }
}