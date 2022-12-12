export const initialMessage = {
  isValid: true,
  isInput: false,
  content:
    "Hi there 👋! I'm Che Theaker, a full stack developer. Welcome to my website, type a command to get started... for a list of commands, type: 'help'"
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
  new HelpCommand('ls - list web pages', 300, true),
  new HelpCommand('start - show start message', 600, true),
  new HelpCommand('clear - clear terminal', 900, true),
  new HelpCommand('github - show github profile', 1200, true),
  new HelpCommand('linkedin - show linkedin profile', 1500, true),
  new HelpCommand('leetcode - show leetcode profile', 1800, true),
  new HelpCommand('Control + ` brings up the terminal', 2100, false),
  new HelpCommand(
    '––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––',
    2100,
    false
  )
];

const lsCommands = [
  new HelpCommand('about', 0, true),
  new HelpCommand('experience', 100, true),
  new HelpCommand('contact', 200, true)
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
    case 'ls':
      return lsCommands;
    case 'code about':
      window.location.hash = 'about';
      return;
    case 'code experience':
      window.location.hash = 'experience';
      return;
    case 'code contact':
      window.location.hash = 'contact';
      return;
    default:
      if (
        command.includes('about') ||
        command.includes('experience') ||
        command.includes('contact')
      ) {
        return {
          isValid: false,
          isInput: false,
          content: command + ` ~ Did you mean: code ${command}`
        };
      }
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

export const verifyTab = (input: string) => {
  const res = [];
  if (!input) return res;
  if (verifyWord('clear', input)) res.push('clear');
  if (verifyWord('code about', input)) res.push('code about');
  if (verifyWord('code experience', input)) res.push('code experience');
  if (verifyWord('code contact', input)) res.push('code contact');
  if (verifyWord('github', input)) res.push('github');
  if (verifyWord('help', input)) res.push('help');
  if (verifyWord('leetcode', input)) res.push('leetcode');
  if (verifyWord('linkedin', input)) res.push('linkedin');
  if (verifyWord('ls', input)) res.push('ls');
  if (verifyWord('start', input)) res.push('start');
  return res;
};

const verifyWord = (command: string, input: string) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== command[i]) return false;
  }
  return true;
};
