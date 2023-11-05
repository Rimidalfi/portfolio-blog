import ImpressumText from "./ImpressumText";

const ImpressumPost = ({ impressumJSON }) => {
  return (
    <>
      <ImpressumText impressumJSON={impressumJSON} />
    </>
  );
};
export default ImpressumPost;
