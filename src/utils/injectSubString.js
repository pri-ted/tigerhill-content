const injectSubstring = (originalString, targetSubstring, substringToInject) => {
  // Find the index of the target substring within the original string
  const targetIndex = originalString.indexOf(targetSubstring);

  // If the target substring is not found, return the original string as is
  if (targetIndex === -1) {
    return originalString;
  }

  // Split the original string into two parts: before and after the target substring
  const beforeTarget = originalString.slice(0, targetIndex + targetSubstring.length);
  const afterTarget = originalString.slice(targetIndex + targetSubstring.length);

  // Combine the parts with the substring to inject in between
  const injectedString = beforeTarget + substringToInject + afterTarget;

  return injectedString;
}

export default injectSubstring;