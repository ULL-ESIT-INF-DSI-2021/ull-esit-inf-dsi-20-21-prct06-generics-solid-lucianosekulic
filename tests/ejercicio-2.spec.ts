import { expect } from "chai";
import { isConvertible } from "../src/ejercicio-2/convertible";
import { Fuerza } from "../src/ejercicio-2/fuerza";
import { Longitud } from "../src/ejercicio-2/longitud";
import { Masa } from "../src/ejercicio-2/masa";
import { Temperatura } from "../src/ejercicio-2/temperatura";
import { Tiempo } from "../src/ejercicio-2/tiempo";
import { Velocidad } from "../src/ejercicio-2/velocidad";
import { Volumen } from "../src/ejercicio-2/volumen";

describe("prueba sobre conversiones", () => {
  /*
    Ejemplo:
    let fuerza = new Fuerza(numero);
  */
  
  it("pasar de kg a newtons", () => {
    const constFuerza: number = 10;
    let fuerza = new Fuerza(constFuerza);
    
    expect(fuerza.conversion(constFuerza)).to.be.deep.equal(98);
  });

  it("pasar de km a metros", () => {
    const constLongitud: number = 10;
    let longitud = new Longitud(constLongitud);
    expect(longitud.conversion(constLongitud)).to.be.deep.equal(10000);
  });
  
  it("pasar de kg a gramos", () => {
    const constMasa: number = 5;
    let masa = new Masa(constMasa);
    expect(masa.conversion(constMasa)).to.be.deep.equal(5000);
  });

  it("pasar de ºC a ºK", () => {
    const constTemp: number = 1;
    let temperatura = new Temperatura(constTemp);
    expect(temperatura.conversion(constTemp)).to.be.deep.equal(274.15);
  });

  it("pasar de minutos a segundos", () => {
    const constTiempo: number = 1;
    let tiempo = new Tiempo(constTiempo);
    expect(tiempo.conversion(constTiempo)).to.be.deep.equal(60);
  });

  it("pasar de km/h a mph", () => {
    const constVelocidad: number = 5;
    let velocidad = new Velocidad(constVelocidad);
    expect(velocidad.conversion(constVelocidad)).to.be.deep.equal(3.1);
  });

  it("pasar de km3 a m3", () => {
    const constVolumen: number = 1;
    let volumen = new Volumen(constVolumen);
    expect(volumen.conversion(constVolumen)).to.be.deep.equal(1000000000);
  });
});