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


function App() {
  const [user, setUser] = useState({userName:'', id:''});
  const [openedModal, setOpenedModal] = useState('Auth');
 
  // useEffect(()=>{
  //   socket.on("connection", message => {
  //     console.log(message);
  //     // set message to state
  //   })
  // })

  const closeModal = () => {
    setOpenedModal('');
  };

  return (
    <div className="flex w-screen h-screen overflow-hidden">

      <div className="w-[20vw] p-4 border">
        <ActiveRooms />
      </div>

      <div className="w-[80vw] grid grid-rows-[5vh_75vh_20vh] border">
        <ToolBar />
        <MessagesList />
        <MessageInput />
      </div>
      
      {(openedModal === 'Auth') && <AuthModal onClose={closeModal} changeModal={setOpenedModal} setUser={setUser}/>}
      {(openedModal === 'AllRooms') && <AllRoomsModal onClose={closeModal} />}
      {(openedModal === 'CreateNewRoom') && <CreateNewRoomModal onClose={closeModal} />}
      {(openedModal === 'OnlineUsers') && <OnlineUsersModal onClose={closeModal} />}
      {(openedModal === 'Settings') && <SettingsModal onClose={closeModal} />}
      {(openedModal === 'Rules') && <RulesModal onClose={closeModal} user={user} changeModal={setOpenedModal}/>}

    </div>
  );
}

export default App;
