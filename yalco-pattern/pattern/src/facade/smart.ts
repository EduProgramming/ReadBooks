import { Thermostate, Lights, CoffeeMaker } from "./system";

class SmartHomeFacade {
  private thermostat: Thermostate;
  private lights: Lights;
  private coffeeMaker: CoffeeMaker;

  constructor(
    thermostat: Thermostate,
    lights: Lights,
    coffeeMaker: CoffeeMaker
  ) {
    this.thermostat = thermostat;
    this.lights = lights;
    this.coffeeMaker = coffeeMaker;
  }

  wakeUp() {
    console.log("Waking up...");
    this.thermostat.setTemperature(22);
    this.lights.on();
    this.coffeeMaker.brewCoffee();
  }

  leaveHome() {
    console.log("Leaving home...");
    this.thermostat.setTemperature(18);
    this.lights.off();
  }
}

export default SmartHomeFacade;
