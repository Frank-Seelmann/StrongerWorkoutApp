import { api } from "./myFetch";

export function GetFeed(handle) {
    return api('Task/feed/' + handle);
}

export function GetAll() {
    return api('Task');
}

export function Add(Task) {
    return api('Task', Task);
}