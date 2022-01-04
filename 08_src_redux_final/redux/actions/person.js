//
import { ADD_PERSON } from "../constant"

// Person
export const addPerson = (personObj) => ({
  type: ADD_PERSON, data: personObj
})
