import Terminal__SvelteComponent_ from '../components/Terminal/Terminal.svelte';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/svelte';

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

    expect(commandItems.length).toBe(8);
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

  it('should display a link to github with the command github', async () => {
    const { container } = await beforeEach('github');
    const links = container.getElementsByTagName('a');

    expect(links.length).toBe(1);
    expect(links[0].textContent).toBe('https://github.com/chetheaker');
  });

  it('should display a link to github with the command github', async () => {
    const { container } = await beforeEach('linkedin');
    const links = container.getElementsByTagName('a');

    expect(links.length).toBe(2);
    expect(links[1].textContent).toBe('https://linkedin.com/in/chetheaker');
  });
  it('should display a link to github with the command github', async () => {
    const { container } = await beforeEach('leetcode');
    const links = container.getElementsByTagName('a');

    expect(links.length).toBe(3);
    expect(links[2].textContent).toBe('https://leetcode.com/chetheaker');
  });
});
