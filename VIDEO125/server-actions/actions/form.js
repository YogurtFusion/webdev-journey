import fs from "fs/promises"

 export const SubmitAction = async (e) => {
    "use server"
    console.log(e.get("name"), e.get("add"));
    let a = await fs.writeFile("chapple.txt", `name is ${e.get("name")} and address is ${e.get("add")}`)
    
    
  }