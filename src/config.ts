import { BasicTypeMethods } from "./converter";
import fs from "node:fs";
import path from "node:path";

export interface IConfig {
  inputDir: string;
  outputDir: string;
  reserved_methods: BasicTypeMethods;
  use_ts_basic_methods: Boolean;
}

class Config {
  public static config(): IConfig {
    try{
   return JSON.parse(fs.readFileSync(path.join(process.cwd(),'./config.json')).toString('utf-8'))
    }catch(e){
        throw new Error('Error loading config file:', e as Error)
    }
  } 
}

export default Config.config();