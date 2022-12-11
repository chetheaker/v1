import { writable } from 'svelte/store';

export const inputCommands = writable<string[]>([]);
