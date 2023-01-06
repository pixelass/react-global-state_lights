import { atom } from "jotai";

// Create an array with all lights
const lights = [
  {id: 1, name: "Living Room", isOn: false},
  {id: 2, name: "Kitchen", isOn: false},
  {id: 3, name: "Bedroom", isOn: false},
  {id: 4, name: "Bathroom", isOn: false},
  {id: 5, name: "Garage", isOn: false},
  {id: 6, name: "Porch", isOn: false},
  {id: 7, name: "Garden", isOn: false},
  {id: 8, name: "Office", isOn: false},
]

// Create an atom for the array
export const lightsAtom = atom(lights)
