import { api } from "./myFetch";

export function GetAll() {
    return api('Task');
}

export function Add(Task) {
    return api('Task', Task);
}