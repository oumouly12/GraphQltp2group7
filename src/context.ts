import {GHIBLIAPI} from "./datasources/GHIBLIAPI";

export const context = async () => {
  return {
    dataSources: {
      ghibliAPI: new GHIBLIAPI(),
    }
  }
}