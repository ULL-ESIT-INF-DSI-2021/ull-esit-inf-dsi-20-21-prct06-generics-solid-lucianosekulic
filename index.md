# Práctica 6: Clases e interfaces génericas. Principios Solid

## Introducción
En esta práctica nos centraremos en trabajar las clases e interfaces génericas usando los principios SOLID, dados por el profesor en los apuntes de la asignatura, trabajando los ejercicios que comentaremos más adelante.

[link a los apuntes](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/)


## Configuración del proyecto, Mocha, Chai y Typedoc

Una vez configurada la ***estructura básica del proyecto***, nos propondemos a instalar y configurar ***mocha, chai y typedoc***. Para llevar un desarrollo dirigido por pruebas (TDD), debemos de configurar los archivos ***.spec.ts*** y hacer un ***npm run test*** para ver que en primer instancia, "no funciona". Posteriormente, al realizar nuestros programas, volvemos a ejecutar nuestros ***tests*** para comprobar la robustez de nuestro código.

En las siguientes imagenes podemos ver la correcta ejecución de nuestros test:

![image1](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lucianosekulic/blob/gh-pages/1.png)

![image2](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lucianosekulic/blob/gh-pages/2.png)

Ahora les mostraré el código de los archivos ***.spec.ts***

**Código ejercicio-1.spec.ts**
``` 
import "mocha";
import { expect } from "chai";
import { Fighter } from "../src/ejercicio-1/fighter";
import { Combat } from "../src/ejercicio-1/combat";
import { Marvel } from "../src/ejercicio-1/marvel";
import { Pokemon } from "../src/ejercicio-1/pokemon";
import { Starwars } from "../src/ejercicio-1/starwars";

describe("Definitive combat tests", () => {
  /*
    Ejemplo:
    let test = new Marvel(name, weigth, size, type, universe, [attack, deffense, speed, hp]);
  */
  let testMarvel = new Marvel("thor", 120, 180, "I'm Odin's son!", "marvel", [10, 10, 12, 100]);
  let testPokemon = new Pokemon("treeko", 120, 180, "Treeeeekooooo treeee!", "pokemon", [6, 8, 10, 100]);
  let testStarwars = new Starwars("luke", 120, 180, "The force is poweful in me", "starwars", [12, 10, 14, 100]);
  
  it("thor vs treeko", () => {
    let startCombat =  new Combat(testMarvel, testPokemon);
    expect(startCombat.start(testMarvel, testPokemon)).to.be.deep.equal('treeko');
  });

  it("thor vs luke", () => {
    let startCombat =  new Combat(testMarvel, testStarwars);
    expect(startCombat.start(testMarvel, testStarwars)).to.be.deep.equal('thor');
  });

  it("luke vs treeko", () => {
    let startCombat =  new Combat(testStarwars, testPokemon);
    expect(startCombat.start(testStarwars, testPokemon)).to.be.deep.equal('luke');
  });
});
```

**Código ejercicio-2.spec.ts**
```
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
```

En cuanto al ***Typedoc***, después de configurar lo necesario según lo establecido por el profesor, realizamos un ***npm run doc*** para generar la documentación.

![image3](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lucianosekulic/blob/gh-pages/3.png)

## Ejercicio-1: El combate definitivo

A continuación, le dejo el link del guión de la práctica donde están las pautas que hay que seguir para el ejercicio 1.

[guión de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct06-generics-solid/)

**Código combat.ts**
```
import {Fighter} from './fighter';

export class Combat {
  constructor(public fighter1: Fighter, fighter2: Fighter) {}

  public combatFighter(fighter1: Fighter, fighter2: Fighter) {

    let effectiveness: number = 0;
    let resultAttack: number = 0;
     
    if(fighter1.getUniverse() == fighter2.getUniverse()) {
      effectiveness = 1;
    }
    else {
      effectiveness = fighter1.damageFighter(fighter2);
    }
    resultAttack = 50 * (fighter1.getAttack() / fighter2.getDefense() * effectiveness);
    return resultAttack;
  }

  public start(fighter1: Fighter, fighter2: Fighter) {
    console.log(`An epic battle is comming... YEHA!!`);
    console.log(`${fighter1} vs ${fighter1}`);
    console.log(`${fighter1.type}`); //type es el string caracteristicos de cada personsaje 
    console.log(`${fighter2.type}`);
    console.log(`GOOOOO!!!`);
    let lifeFighter1 = fighter1.getHP(); 
    let lifeFighter2 = fighter2.getHP(); 
    let result: number = 0;
    let winner: string;

    while ((lifeFighter1 > 0) && (lifeFighter2 > 0)){
      if(fighter1.getSpeed() > fighter2.getSpeed()) { //el que tiene mas speed ataca primero
        fighter1.setSpeed(1); //ponemos los speed igualados 
        fighter2.setSpeed(1);
        console.log(`${fighter1} attack ${fighter2}`);
        result = this.combatFighter(fighter1, fighter2);
        lifeFighter2 -= result;
        console.log(`${fighter1} hp: ${lifeFighter1}\n`);
        console.log(`${fighter2} hp: ${lifeFighter2}\n`);
      }
      else if(fighter1.getSpeed() < fighter2.getSpeed()) {
        fighter1.setSpeed(1); //ponemos los speed igualados 
        fighter2.setSpeed(1);
        console.log(`${fighter2} attack ${fighter1}`);
        result = this.combatFighter(fighter1, fighter2);
        lifeFighter1 -= result;
        console.log(`${fighter1} hp: ${lifeFighter1}\n`);
        console.log(`${fighter2} hp: ${lifeFighter2}\n`);
      }

      //empieza la batalla despues del bonus del speed
        console.log(`${fighter1} attack ${fighter2}`);
        result = this.combatFighter(fighter1, fighter2);
        lifeFighter2 -= result;
        console.log(`${fighter1} hp: ${lifeFighter1}\n`);
        console.log(`${fighter2} hp: ${lifeFighter2}\n`);

        console.log(`${fighter2} attack ${fighter1}`);
        result = this.combatFighter(fighter1, fighter2);
        lifeFighter1 -= result;
        console.log(`${fighter1} hp: ${lifeFighter1}\n`);
        console.log(`${fighter2} hp: ${lifeFighter2}\n`);

        if(lifeFighter1 <= 0) {
          console.log(`${fighter1} is the winner!`);
          winner = fighter1.name;
        }
        else {
          console.log(`${fighter2} is the winner!`);
          winner = fighter2.name; 
        }
    }
    return winner;
  }
}
```

En esta clase llamada ***Combat***, tenemos dos funciones:

* combatFighter: donde le pasamos dos luchadores de tipo **Fighter** y calculamos dependiendo de la efectividad que tenga el luchador, cuanto daño hace.
* start: Le pasamos dos luchadores de tipo **Fighter** y esta funcion es la encargada de iniciar la batalla entre dos luchadores de distintos universos, retornando el nombre del ganador de la contienda. Además el combate empieza por el luchador que más velocidad tiene en sus estadisticas, para así dar un bonus al comienzo del combate sobre quien asesta el primer golpe.



Código fighter.ts
```
export abstract class Fighter {

    private basicData = {
      attack: 0,
      defense: 0,
      speed: 0,
      hp: 0,
    }
    
    constructor(public name: string, public weigth: number, public size: number, public type: string, public universe, basicData: number[]) {
      this.basicData.attack = basicData[0];
      this.basicData.defense = basicData[1];
      this.basicData.speed = basicData[2];
      this.basicData.hp = basicData[3];
    }
  
    //getters
    public getName() {
      return this.name;
    }
  
    public getWeigth() {
      return this.weigth;
    }
  
    public getSize() {
      return this.size;
    }
  
    public getType() {
      return this.type;
    }
  
    public getBasicData() {
      return this.basicData;
    }

    public getAttack() {
      return this.basicData.attack;
    }

    public getDefense() {
      return this.basicData.defense;
    }

    public getHP() {
      return this.basicData.hp;
    }

    public getSpeed() {
      return this.basicData.speed;
    }

    public getUniverse(){
      return this.universe;
    }

    //setters
    public setName(name: string) {
      this.name = name; 
    }
  
    public setWeigth(weigth: number) {
      this.weigth = weigth;
    }
  
    public setSize(size: number) {
      this.size = size;
    }
  
    public setType(type: string) {
      this.type = type;
    }
  
    public setHp(life: number) {
      this.basicData.hp = life;
    }

    public setSpeed(speed: number) {
      this.basicData.speed = speed;
    }

    //funciones
    abstract damageFighter(fighter: Fighter);
  
  }
  
``` 

En esta clase abstracta, creamos al luchador con sus distintas caracteristicas, haciendolo la clase padre de las clases marvel, pokemon y starwars. Donde todas las clases hijas deberan de tener obligatoriamente una funcion ***damageFIghter*** en la cual pondremos las pautas de que personajes son más fueres que otros en el combate.


Código marvel.ts
```
import { Fighter } from './fighter';

export class Marvel extends Fighter {

  constructor(public name: string, public weigth: number, public size: number, public type: string, public universe, basicData: number[]){

  
  super(name, weigth, size, type, universe, basicData);
  }

  public getUniverse(){
    return this.universe;
  }

  damageFighter(fighter: Fighter){
    let effectiveness: number = 0;
    if (fighter.getUniverse() == 'starwars') {
      effectiveness = 2;
    }
    else if(fighter.getUniverse() == 'pokemon') {
      effectiveness = 0.5;
    }
    else {
      effectiveness = 1;
    }
    return effectiveness;
  }

 
}

```

Código Pokemon.ts
```
import {Fighter} from './fighter';

export class Pokemon extends Fighter {

  constructor(public name: string, public weigth: number, public size: number, public type: string, public universe, basicData: number[]) {
    super(name, weigth, size, type, universe, basicData);
  }

  public getUniverse(){
    return this.universe;
  }

  damageFighter(fighter: Fighter){
    let effectiveness: number = 0;
    if (fighter.getUniverse() == 'marvel') {
      effectiveness = 2;
    }
    else if(fighter.getUniverse() == 'starwars') {
      effectiveness = 0.5;
    }
    else {
      effectiveness = 1;
    }
    return effectiveness;
  }
  
}
```

Código starwars.ts
```
import {Fighter} from './fighter';

export class Starwars extends Fighter {

  constructor(public name: string, public weigth: number, public size: number, public type: string, public universe, basicData: number[]) {
    super(name, weigth, size, type, universe, basicData);
  }

  public getUniverse(){
    return this.universe;
  }

  damageFighter(fighter: Fighter){
    let effectiveness: number = 0;
    if (fighter.getUniverse() == 'pokemon') {
      effectiveness = 2;
    }
    else if(fighter.getUniverse() == 'marvel') {
      effectiveness = 0.5;
    }
    else {
      effectiveness = 1;
    }
    return effectiveness;
  }
  
}
```

Estas tres clases, son las clases hijas de ***fighter.ts*** y en ellas nos disponemos a poner las direcctrices en la función ***damageFighter*** sobre la efectividad de un personaje de ese universo sobre los personajes de los demás universos.

Código pokedex.ts
```
import {Pokemon} from './pokemon';
import {Marvel} from './marvel';
import {Starwars} from './starwars';
import {Fighter} from './fighter';

export class Container {
  constructor(private arrayContainer: Fighter[]) {}

  public getContainer(){ /// devolvemos los pokemons de la pokedex
    return this.arrayContainer;
  }

  public setPokemon(pokemon: Pokemon) { ///añadimos pokemons
    this.arrayContainer.push(pokemon)
  }

  public setMarvel(marvel: Marvel) { ///añadimos marvel
    this.arrayContainer.push(marvel)
  }

  public setStarWars(starwars: Starwars) { ///añadimos starwars
    this.arrayContainer.push(starwars)
  }

  public showContainer() {
    console.table(this.arrayContainer, ["name", "weight", "size", "type", "universe"]);
  }

  
}
```

En esta clase nos dispondremos a guardar los luchadores de los distintos universos en una tabla.


## Ejercicio-2: Conversor de unidades

Código convertible.ts
```
export interface isConvertible<T> {
    conversion(num1: T): void;
  }
```

En esta clase, he decidido crear una interfaz llamada isConvertible con un tipo de dato generico <t>, donde nada más tendrá una función llamada ***conversion*** donde posteriormente, se harán las distintas conversiones que se nos pide en el siguiente guión.
  
[guión de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct06-generics-solid/)

Código fuerza.ts
```
import {isConvertible} from './convertible'
type fuerza = number;
export class Fuerza implements isConvertible<fuerza> {
    constructor(num1: fuerza) {}
  
    conversion(num1: fuerza) {
      const constFuerza: number = 9.8;
      num1 = num1 * constFuerza; //pasar de kg a newton
      return num1;
    }
  
  }
```

Creamos un tipo de dato propio, por si en algún momento es necesario cambiar los tipos de datos con los que se opera, sea más sencillo. Luego, tenemos una clase llamada ***Fuerza*** con una única función para hacer, en este caso, la conversión de kilogramos a newtons.

Este es el esqueleto fundamentar de las demás clases implementadas para las distintas conversiones, simplemente cambia el nombre del tipo de dato, los datos y calculos necesarios para realizar la respectiva conversión. Sin embargo aqui le dejo el link en el github del código completo de este ejercicio 2.

[link al github ejercicio2](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-lucianosekulic/tree/master/src/ejercicio-2)














