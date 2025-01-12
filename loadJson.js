import fs from "fs/promises";
export default async function loadJson(fileName) {
  try {
    const data = await fs.readFile(fileName, "utf8");
    const parsedData = JSON.parse(data);
    console.log(`successfull load ${parsedData} from ${fileName}`);

    return parsedData;
  } catch (err) {
    console.log("Error reading file:", err);
    return;
  }
}
