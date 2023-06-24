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


function App() {
  const [user, setUser] = useState({userName:'', id:''});
  const [openedModal, setOpenedModal] = useState('Auth');
  const [messages, setMessages] = useState([]);
 
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
      <Header />
    
      <div className="flex w-screen h-screen overflow-hidden pt-[80px]">

        <div className="w-[345px] p-4 border">
          <ActiveRooms />
        </div>

        <div className="w-[calc(100vw-345px)] grid grid-rows-[80px_calc(100vh-80px-80px-160px)_160px] border">
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
