import { ActiveRooms } from "./ActiveRooms/ActiveRooms";
import { MessagesList } from "./MessagesList/MessagesList";
import { AllRoomsModal } from "./Modals/AllRoomsModal";
import { AuthModal } from "./Modals/AuthModal";
import { CreateNewRoomModal } from "./Modals/CreateNewRoomModal";
import { OnlineUsersModal } from "./Modals/OnlineUsersModal";
import { SettingsModal } from "./Modals/SettingsModal";
import { MessageInput } from "./MessageInput/MessageInput";
import { ToolBar } from "./ToolBar/Toolbar";

function App() {
  return (
    <div className="flex w-screen h-screen">

      <div className="w-[20vw] p-4 border">
        <ActiveRooms />
      </div>

      <div className="w-[80vw] grid grid-rows-[5vh_75vh_20vh] border">
        <ToolBar />
        <MessagesList />
        <MessageInput />
      </div>

      {false && <AuthModal />}
      {false && <AllRoomsModal />}
      {false && <CreateNewRoomModal />}
      {false && <OnlineUsersModal />}
      {false && <SettingsModal />}

    </div>
  );
}

export default App;
