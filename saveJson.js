import fs from "fs";
export default async function saveJson(content, fileName) {
  try {
    const jsonString = JSON.stringify(content, null, 2);

    await fs.writeFileSync(fileName, jsonString);

    console.log("File saved successfully as " + fileName);
  } catch (err) {
    console.log("Error writing file", err);
  }
}
