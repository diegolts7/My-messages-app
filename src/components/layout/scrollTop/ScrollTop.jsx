import { FaArrowUp } from "react-icons/fa";
import { DivButtonScroll } from "./styles-scroll-top";

const ScrollTop = () => {
  return (
    <DivButtonScroll
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp />
    </DivButtonScroll>
  );
};

export default ScrollTop;
