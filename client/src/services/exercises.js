import { api } from "./myFetch";

export function GetAll() {
    return api('exercise');
}

export function Add(exercise) {
    return api('exercise', exercise);
}