export const initialMessage = {
  isValid: true,
  isInput: false,
  content:
    "welcome to the terminal, type a command to get started... for a list of commands type 'help'"
};

class HelpCommand {
  isValid = true;
  isInput = false;
  content: string;
  delay: number;
  isIndent: boolean;

  constructor(content: string, delay: number, isIndent: boolean) {
    this.content = content;
    this.delay = delay;
    this.isIndent = isIndent;
  }
}

const helpCommands = [
  new HelpCommand('here are some commands to run:', 0, false),
  new HelpCommand('start - show start message', 300, true),
  new HelpCommand('clear - clear terminal', 600, true),
  new HelpCommand('github - show github profile', 900, true),
  new HelpCommand('linkedin - show linkedin profile', 1200, true),
  new HelpCommand('leetcode - show leetcode profile', 1500, true),
  new HelpCommand(
    '––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––',
    1800,
    false
  )
];

export const verifyCommand = (command: string) => {
  let link: string;
  switch (command) {
    case 'github':
      link = 'https://github.com/chetheaker';
      break;
    case 'linkedin':
      link = 'https://linkedin.com/in/chetheaker';
      break;
    case 'leetcode':
      link = 'https://leetcode.com/chetheaker';
      break;
    case 'help':
      return helpCommands;
    case 'start':
      return initialMessage;
    default:
      return { isValid: false, isInput: false, content: command };
  }

  if (link) {
    window.open(link, '_blank');
    return {
      isValid: true,
      isInput: false,
      content: `check out my ${command} at`,
      link
    };
  }
};
