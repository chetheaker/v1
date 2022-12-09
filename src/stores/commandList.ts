import { writable } from 'svelte/store';
import type { Command } from '../types/command';
import { initialMessage } from '../utils/terminal';

const initial = [initialMessage];

export const commandList = writable<Command[]>(initial);
