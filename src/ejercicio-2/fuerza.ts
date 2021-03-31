import {isConvertible} from './convertible'
type fuerza = number;

/**
 * clase fuerza que implementa isConvertible
 */
export class Fuerza implements isConvertible<fuerza> {

    /**
     * constructor de la clase fuerza
     * @param num1 
     */
    constructor(num1: fuerza) {}
  
    /**
     * funcion para pasar de kg a newton
     * @param num1 
     * @returns num1 el valor resultante de la conversion
     */
    conversion(num1: fuerza) {
      const constFuerza: number = 9.8;
      num1 = num1 * constFuerza;
      return num1;
    }
  
  }