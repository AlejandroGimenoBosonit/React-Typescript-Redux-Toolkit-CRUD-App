import { User } from "../models";

// export function that checks and sets local storage content
export const setLocalStorage = (key: string, value: any): void => localStorage.setItem(key, JSON.stringify(value));

// export function that checks and gets local storage content
export const getLocalStorage = (key: string): User[] => JSON.parse(localStorage.getItem(key)!);