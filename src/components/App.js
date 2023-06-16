import { ActiveRooms } from "./ActiveRooms/ActiveRooms";
import { MessagesList } from "./MessagesList/MessagesList";
import { AllRoomsModal } from "./Modals/AllRoomsModal";
import { AuthModal } from "./Modals/AuthModal";
import { CreateNewRoomModal } from "./Modals/CreateNewRoomModal";
import { OnlineUsersModal } from "./Modals/OnlineUsersModal";
import { SettingsModal } from "./Modals/SettingsModal";
import { MessageInput } from "./TextInput/MessageInput";
import { ToolBar } from "./ToolBar/Toolbar";

function App() {
  return (
    <div>

      <div>
        <ActiveRooms />
      </div>

      <div>
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
