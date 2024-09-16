import * as fs from "fs";

class FileReader {
  readFile(filePath: string): string | null {
    try {
      return fs.readFileSync(filePath, "utf8");
    } catch (error) {
      console.error(`Error:`, error);
      return null;
    }
  }
}

class FileWriter {
  writeFile(filePath: string, content: string): boolean {
    try {
      fs.writeFileSync(filePath, content, "utf8");
      return true;
    } catch (error) {
      console.error(`Error:`, error);
      return false;
    }
  }
}

class FileDeleter {
  deleteFile(filePath: string): boolean {
    try {
      fs.unlinkSync(filePath);
      return true;
    } catch (error) {
      console.error(`Error:`, error);
      return false;
    }
  }
}

export { FileReader, FileWriter, FileDeleter };
