import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
  // BLOCKS & INLINES
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="blogParagraph">{children}</p>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="blogH2">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="blogH3">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4 className="blogH4">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h5 className="blogH5">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <h6 className="blogH6">{children}</h6>;
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol className="blogOrderedList">{children}</ol>;
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="blogUnorderedList">{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <li className="blogListItem">{children}</li>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      console.log(node);
      return (
        <a className="blogHyperlink" href={node.data.uri}>
          {children}
        </a>
      );
    },
  },
  // MARKS
  renderMark: {
    [MARKS.CODE]: (children) => {
      return <code className="blogCodeBlock">{children}</code>;
    },
    [MARKS.BOLD]: (children) => {
      return <b className="blogBoldText">{children}</b>;
    },
    [MARKS.ITALIC]: (children) => {
      return <i className="blogItalicText">{children}</i>;
    },
    [MARKS.UNDERLINE]: (children) => {
      return <u className="blogUnderlinedText">{children}</u>;
    },
  },
};

const BlogCardRT = ({ intro }) => {
  return (
    <div className="blogCardIntro">
      {documentToReactComponents(intro, RICHTEXT_OPTIONS)}
    </div>
  );
};

export default BlogCardRT;
