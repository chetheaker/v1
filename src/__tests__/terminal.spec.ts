import Terminal__SvelteComponent_ from '../components/Terminal/Terminal.svelte';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/svelte';
import { commandList } from '../stores/commandList';

const beforeEach = async (inputStr: string) => {
  const { container, getByRole, findAllByText } = render(
    Terminal__SvelteComponent_
  );
  const input = getByRole('textbox') as HTMLInputElement;
  await fireEvent.input(input, { target: { value: inputStr } });
  await fireEvent.submit(input);

  return { container, getByRole, input, findAllByText };
};

describe('Terminal', () => {
  it('should reset input on enter', async () => {
    const { input } = await beforeEach('test input');

    expect(input).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  it('should add inputs to commands container', async () => {
    const { findAllByText } = await beforeEach('testing');

    const commands = await findAllByText('testing');

    expect(commands[0]).toBeInTheDocument();
  });

  it('should add a chevron to input commands', async () => {
    const { container } = await beforeEach('chevron test');
    const chevrons = container.getElementsByClassName('fa-chevron-right');

    expect(chevrons.length).toBe(4);
  });

  it('should not add an empty input to the dom', async () => {
    const { container } = await beforeEach('');
    const chevrons = container.getElementsByClassName('fa-chevron-right');

    expect(chevrons.length).toBe(4);
  });

  it('should produce 2 command list items for each input (input and response)', async () => {
    const { container } = await beforeEach('commandline');
    const commandItems = container.getElementsByClassName('command');
    expect(commandItems.length).toBe(9);
  });

  it('should respond with an error if an unknown command is entered', async () => {
    const { container } = await beforeEach('unknown command');

    const errors = container.getElementsByClassName('error');
    const errorStyle = window.getComputedStyle(errors[0]);

    expect(errors.length).toBe(5);
    expect(errorStyle.color).toBe('rgb(246, 65, 65)');
  });

  it('should not show an error if the command is found', async () => {
    const { container } = await beforeEach('help');

    const errors = container.getElementsByClassName('error');
    expect(errors.length).toBe(5);
  });

  it('should clear the terminal with the command: clear', async () => {
    const { container } = await beforeEach('clear');
    const commands = container.getElementsByClassName('command');

    expect(commands.length).toBe(0);
  });

  it('should show the start message with the command: start', async () => {
    const { container } = await beforeEach('start');

    const commands = container.getElementsByClassName('command');
    expect(commands.length).toBe(2);
    let commandsStore;
    commandList.subscribe((value) => (commandsStore = value));

    // testing that start command has been successfully added to store
    expect(commandsStore[1].content).toBe(
      "welcome to the terminal, type a command to get started... for a list of commands type 'help'"
    );
  });

  it('should show the help options with the command: help', async () => {
    const { container, getByRole } = await beforeEach('help');
    const commands = container.getElementsByClassName('command');
    expect(commands.length).toBeGreaterThan(8); // change this to exact number when finished

    let commandsStore;
    commandList.subscribe((value) => (commandsStore = value));

    // verifying first help command
    expect(commandsStore[2].content).toBe('help');
    expect(commandsStore[3].content).toBe('here are some commands to run:');
    expect(commandsStore[4].content).toBe('start - show start message');
    expect(commandsStore[5].content).toBe('clear - clear terminal');
    expect(commandsStore[6].content).toBe('github - show github profile');
    expect(commandsStore[7].content).toBe('linkedin - show linkedin profile');
    expect(commandsStore[8].content).toBe('leetcode - show leetcode profile');
    const input = getByRole('textbox') as HTMLInputElement;
    await fireEvent.input(input, { target: { value: 'clear' } });
    await fireEvent.submit(input);
  });

  it('should indent the list of commands with the command: help', async () => {
    await beforeEach('help');

    let commandsStore;
    commandList.subscribe((value) => (commandsStore = value));

    expect(commandsStore[0].isIndent).toBeUndefined();
    expect(commandsStore[1].isIndent).toBe(false);
    expect(commandsStore[2].isIndent).toBe(true);
    expect(commandsStore[3].isIndent).toBe(true);
    expect(commandsStore[4].isIndent).toBe(true);
    expect(commandsStore[5].isIndent).toBe(true);
    expect(commandsStore[6].isIndent).toBe(true);
  });
});
