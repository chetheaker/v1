import { writable } from 'svelte/store';
import type { Command } from '../types/command';

export const commandList = writable<Command[]>([]);
