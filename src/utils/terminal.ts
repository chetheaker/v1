const commandDict = {
  help: true,
  clear: true,
  github: () => window.open('https://github.com/chetheaker', '_blank'),
  linkedin: true
};

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
