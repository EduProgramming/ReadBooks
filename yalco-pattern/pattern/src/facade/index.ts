import { Thermostate, Lights, CoffeeMaker } from "./system";
import SmartHomeFacade from "./smart";
import FileSystemFacade from "./fileSystem";

function operateSmartSystem() {
  const thermostat = new Thermostate();
  const lights = new Lights();
  const coffeeMaker = new CoffeeMaker();

  const smartHome = new SmartHomeFacade(thermostat, lights, coffeeMaker);

  smartHome.wakeUp();
  smartHome.leaveHome();
}

function operateFileSystem() {
  const fs = new FileSystemFacade();
  const isWriteSuccess = fs.writeFile("test.txt", "Hello Facade Pattern");
  if (isWriteSuccess) {
    console.log("Write Success");
  } else {
    console.log("Write Fail");
  }

  const content = fs.readFile("test.txt");
  console.log("File Content:", content);

  const isWriteDelete = fs.deleteFile("test.txt");
  if (isWriteDelete) {
    console.log("Delete Success");
  } else {
    console.log("Delete Fail");
  }
}

export { operateSmartSystem, operateFileSystem };
