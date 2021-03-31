import {isConvertible} from './convertible'
type vol = number;

/**
 * clase volumen que implementa isConvertible
 */
export class Volumen implements isConvertible<vol> {

    /**
     * constructor de la clase volumen
     * @param num1 
     */
    constructor(num1: vol) {}

    /**
     * funcion para convertir unidades de kilometros a metros
     * @param num1 
     * @returns num1, resultado de la conversion
     */
    conversion(num1: vol) {
      const constVolumen: number = 1000000000;
      num1 = num1 * constVolumen;
      return num1;
    }
}