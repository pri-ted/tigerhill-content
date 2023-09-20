const extractHostFromURL = (url) => {
  // Remove the protocol part of the URL
  let withoutProtocol = url.replace(/.*?:\/\//, '');

  // Find the index of the first slash (/) to isolate the host
  const slashIndex = withoutProtocol.indexOf('/');

  // If a slash is found, extract the host, otherwise, the URL is already the host
  const host = slashIndex !== -1 ? withoutProtocol.slice(0, slashIndex) : withoutProtocol;

  return host;
}

export default extractHostFromURL;