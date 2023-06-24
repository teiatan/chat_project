import { ActiveRooms } from "./ActiveRooms/ActiveRooms";
import { MessagesList } from "./MessagesList/MessagesList";
import { AllRoomsModal } from "./Modals/AllRoomsModal";
import { AuthModal } from "./Modals/AuthModal";
import { CreateNewRoomModal } from "./Modals/CreateNewRoomModal";
import { OnlineUsersModal } from "./Modals/OnlineUsersModal";
import { SettingsModal } from "./Modals/SettingsModal";
import { MessageInput } from "./MessageInput/MessageInput";
import { ToolBar } from "./ToolBar/Toolbar";
import { useState } from "react";
import { RulesModal } from "./Modals/RulesModal";
import { Header } from "./Header/Header";
import { openAvtiveRoomsWidth, closedAvtiveRoomsWidth } from "utils/variables";


function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) ?? {userName:'', id:''});
  const [messages, setMessages] = useState([]);
  const [openedModal, setOpenedModal] = useState(() => JSON.parse(localStorage.getItem('user')) ?? 'Auth');
  const [areActiveRoomsOpen, setAreActiveRoomsOpen] = useState(true);
  // приймання нових повідомлень з бекенду
  // useEffect(()=>{
  //   socket.on("message", message => {
  //     setMessages(prevMessages => [...prevMessages, message])
  //   })
  // }, []);

  const closeModal = () => {
    setOpenedModal('');
  };

  return (
    <>
      <Header userName={user.userName}/>
    
      <div className="flex w-screen h-screen overflow-hidden pt-[80px]">

        <div className={`
          p-4 border
          ${areActiveRoomsOpen ? `w-[${openAvtiveRoomsWidth}]` : `w-[${closedAvtiveRoomsWidth}]`}
        `}>
          <ActiveRooms 
            setAreActiveRoomsOpen={setAreActiveRoomsOpen}
            areActiveRoomsOpen={areActiveRoomsOpen}
          />
        </div>

        <div className={`
          grid grid-rows-[80px_calc(100vh-80px-80px-160px)_160px] border
          ${areActiveRoomsOpen ? `w-[calc(100vw-${openAvtiveRoomsWidth})]` : `w-[calc(100vw-${closedAvtiveRoomsWidth})]`}
        `}>
          <ToolBar />
          <MessagesList messages={messages}/>
          <MessageInput setMessages={setMessages}/>
        </div>
        
        {(openedModal === 'Auth') && <AuthModal onClose={closeModal} changeModal={setOpenedModal} setUser={setUser}/>}
        {(openedModal === 'AllRooms') && <AllRoomsModal onClose={closeModal} />}
        {(openedModal === 'CreateNewRoom') && <CreateNewRoomModal onClose={closeModal} />}
        {(openedModal === 'OnlineUsers') && <OnlineUsersModal onClose={closeModal} />}
        {(openedModal === 'Settings') && <SettingsModal onClose={closeModal} />}
        {(openedModal === 'Rules') && <RulesModal onClose={closeModal} user={user} changeModal={setOpenedModal}/>}

      </div>
    </>
  );
}

export default App;
