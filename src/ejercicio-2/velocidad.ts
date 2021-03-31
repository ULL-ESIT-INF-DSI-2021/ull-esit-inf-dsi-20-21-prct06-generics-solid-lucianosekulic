import {isConvertible} from './convertible'
type vel = number;

/**
 * clase velocidad que implementa isConvertible
 */
export class Velocidad implements isConvertible<vel> {

    /**
     * constructior de la clase velocidad
     * @param num1 
     */
    constructor(num1: vel) {}

    /**
     * funcion para pasar de km/h a mp/h
     * @param num1 
     * @returns num1, resultado d la conversion
     */
    conversion(num1: vel) { // pasar de kmh a mph
      const constVelocidad: number = 0.62;
      num1 = num1 * constVelocidad;
      return num1;
    }
}