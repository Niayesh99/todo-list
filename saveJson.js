import fs from "fs";
export default function saveJson(content, fileName) {
  const jsonString = JSON.stringify(content, null, 2);

  fs.writeFile(fileName, jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("File saved successfully as "+ fileName);
    }
  });
}
