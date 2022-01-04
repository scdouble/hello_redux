//
import { ADD_PERSON } from "../constant"

// Person
export const createAddPersonAction = (personObj) => ({
  type: ADD_PERSON, data: personObj
})
