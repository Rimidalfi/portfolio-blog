import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Blogarticle = ({ blogJSON }) => {
  return <div>{documentToReactComponents(blogJSON)}</div>;
};

export default Blogarticle;
