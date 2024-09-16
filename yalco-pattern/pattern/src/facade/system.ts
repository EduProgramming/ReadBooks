class Thermostate {
  setTemperature(temperature: number) {
    console.log("Setting thermostat to " + temperature + " degrees.");
  }
}

class Lights {
  on() {
    console.log("Lights are on.");
  }

  off() {
    console.log("Lights are off.");
  }
}

class CoffeeMaker {
  brewCoffee() {
    console.log("Brewing coffee.");
  }
}

export { Thermostate, Lights, CoffeeMaker };
