import Terminal__SvelteComponent_ from '../../components/Terminal/Terminal.svelte';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/svelte';

const beforeEach = async (inputStr: string) => {
  const { container, getByRole, getByText } = render(
    Terminal__SvelteComponent_
  );
  const input = getByRole('textbox') as HTMLInputElement;
  await fireEvent.input(input, { target: { value: inputStr } });
  await fireEvent.submit(input);

  return { container, getByRole, input, getByText };
};

describe('Terminal', () => {
  it('should reset input on enter', async () => {
    const { input } = await beforeEach('test input');

    expect(input).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  it('should add inputs to commands container', async () => {
    const { getByText } = await beforeEach('testing');

    const command = getByText('testing');

    expect(command).toBeInTheDocument();
  });

  it('should add a chevron to input commands', async () => {
    const { container } = await beforeEach('testing');
    const chevrons = container.getElementsByClassName('fa-chevron-right');

    expect(chevrons.length).toBe(4);
  });

  it('should not add an empty input to the dom', async () => {
    const { container } = await beforeEach('');
    const chevrons = container.getElementsByClassName('fa-chevron-right');

    expect(chevrons.length).toBe(4);
  });
});
