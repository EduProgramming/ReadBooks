import { FileReader, FileWriter, FileDeleter } from "./file";

class FileSystemFacade {
  private fileReader: FileReader;
  private fileWriter: FileWriter;
  private fileDeleter: FileDeleter;

  constructor() {
    this.fileReader = new FileReader();
    this.fileWriter = new FileWriter();
    this.fileDeleter = new FileDeleter();
  }

  readFile(filePath: string): string | null {
    return this.fileReader.readFile(filePath);
  }

  writeFile(filePath: string, content: string): boolean {
    return this.fileWriter.writeFile(filePath, content);
  }

  deleteFile(filePath: string): boolean {
    return this.fileDeleter.deleteFile(filePath);
  }
}

export default FileSystemFacade;
