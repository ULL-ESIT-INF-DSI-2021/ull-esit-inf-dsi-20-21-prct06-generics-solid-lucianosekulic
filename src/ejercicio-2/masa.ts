import {isConvertible} from './convertible'
type masaT = number;

  /**
   * clase masa que implementa isConvertible
   */
  export class Masa implements isConvertible<masaT> {
      /**
       * constructor de la clase masa
       * @param num1 
       */
      constructor(num1: masaT) {}
    
      /**
       * funcion para pasar de kg a gramos
       * @param num1 
       * @returns num1, resultado de la conversion
       */
      conversion(num1: masaT) {
        const constMasa: number = 1000;
        num1 = num1 * constMasa;
        return num1;
      }
  }