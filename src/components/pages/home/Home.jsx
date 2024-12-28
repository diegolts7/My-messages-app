import { DivBtnOpenModalCreateMessage, DivHome } from "./styles-home";
import CreateMessage from "../../layout/createMessage/CreateMessage";
import ConteinerMessages from "../../layout/conteinerMessages/ConteinerMessages";
import ModalCreateMessage from "../../layout/modalCreateMessage/ModalCreateMessage";
import { IoMdAdd } from "react-icons/io";
import { useHome } from "./use-home";

const Home = () => {
  const {
    divHomeRef,
    divCreateMessageRef,
    pegarMessages,
    listMessages,
    loadingMessagesFeed,
    isIconOpenCreateMessage,
    setOpenModalCreateMessage,
    openModalCreateMessage,
  } = useHome();

  return (
    <>
      <DivHome ref={divHomeRef}>
        <div ref={divCreateMessageRef}>
          <CreateMessage pegarMessages={pegarMessages} isModal={false} />
        </div>

        <ConteinerMessages list={listMessages} loading={loadingMessagesFeed} />

        {isIconOpenCreateMessage && (
          <DivBtnOpenModalCreateMessage>
            <button onClick={() => setOpenModalCreateMessage(true)}>
              <IoMdAdd />
            </button>
          </DivBtnOpenModalCreateMessage>
        )}
      </DivHome>
      <ModalCreateMessage
        pegarMessages={pegarMessages}
        open={openModalCreateMessage}
        handleClose={() => setOpenModalCreateMessage(false)}
      />
    </>
  );
};

export default Home;
