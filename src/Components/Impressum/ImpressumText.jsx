import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
  // BLOCKS & INLINES
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="impressumParagraph">{children}</p>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="impressumH2">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="impressumH3">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4 className="impressumH4">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h5 className="impressumH5">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <h6 className="impressumH6">{children}</h6>;
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol className="impressumOrderedList">{children}</ol>;
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="impressumUnorderedList">{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <li className="impressumListItem">{children}</li>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a className="impressumHyperlink" href={node.data.uri}>
          {children}
        </a>
      );
    },
  },
  // MARKS
  renderMark: {
    [MARKS.CODE]: (children) => {
      return <code className="impressumCodeBlock">{children}</code>;
    },
    [MARKS.BOLD]: (children) => {
      return <b className="impressumBoldText">{children}</b>;
    },
    [MARKS.ITALIC]: (children) => {
      return <i className="impressumItalicText">{children}</i>;
    },
    [MARKS.UNDERLINE]: (children) => {
      return <u className="impressumUnderlinedText">{children}</u>;
    },
  },
};

const ImpressumText = ({ impressumJSON }) => {
  return (
    <div className="impressumBody">
      {documentToReactComponents(impressumJSON, RICHTEXT_OPTIONS)}
    </div>
  );
};

export default ImpressumText;
