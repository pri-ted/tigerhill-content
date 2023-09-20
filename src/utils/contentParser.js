import extractHostFromURL from './extractHost'
import injectSubstring from './injectSubString'
const createImageUrl = (url, imageWidth) => {
  return injectSubstring(url, extractHostFromURL(url), `/resize/${imageWidth}x`);
}

const contentParser = (rawContent, type, imageRes = { height: 720, width: 1280 }) => {
  let parContent = {
    title: "",
    subTitle: "",
    imageObj: { alt: "", url: "", id: "" },
    expertNames: [],
    experts: "",
    shareText: "",
    totalContentTime: "0m",
    contentCompleted: "10%",
    categories: [],
    id: rawContent.id,
    type: rawContent.type
  };

  switch (type) {
    case "PODCAST":
    case "EBOOK":
      let imUrl = createImageUrl(rawContent?.image?.uri, imageRes.width);
      parContent.title = rawContent?.contentSegments?.header || rawContent?.name;
      parContent.subTitle = rawContent?.preamble || rawContent?.contentSegments?.paragraph;
      parContent.imageObj = {
        ...rawContent?.image,
        url: imUrl
      };
      parContent.experts = rawContent?.experts.map(expert => {
        return { name: `${expert.firstName} ${expert.lastName}`, company: expert.company }
      })
      parContent.expertCompanies = rawContent?.experts.map(expert => expert.company);
      parContent.totalContentTime = `${Math.floor(rawContent?.length / 60)}m ${rawContent?.length % 60}s`;
      parContent.contentCompleted = `${Math.floor(rawContent.timeSpentOnByUsers / rawContent?.length) * 100}%`;
      parContent.categories = rawContent?.categories.map(category => category.name)
      break;

    default:
      break;

  }

  return parContent;
}

export default contentParser;