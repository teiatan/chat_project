import { activeRoom } from "samples/activeRoom"
import { OneActiveRoom } from "./OneActiveRoom"
import { SearchForm } from "components/Common/SearchForm";
import { FilterRooms } from "./FilterRooms";

export const ActiveRooms = ({rooms=[activeRoom], areActiveRoomsOpen, setAreActiveRoomsOpen}) => {

    return (
        <div className="flex flex-col justify-between h-full">

            <div className="flex flex-col justify-between h-full">

                <div className="relative">
                    <h2 className="text-center">Active Rooms</h2>

                    <SearchForm placeholder={'Пошук кімнат...'}/>

                    <FilterRooms />

                    <button className="w-full">🡹</button>

                    {areActiveRoomsOpen ?
                        <button className="absolute -right-6" onClick={()=>setAreActiveRoomsOpen(false)}>🢀</button>
                        :
                        <button className="absolute -right-6" onClick={()=>setAreActiveRoomsOpen(true)}>🢂</button>
                    }

                    {rooms.map(room => {
                        const {id, name, activeUsers, messages} = room;
                        return(
                            <OneActiveRoom 
                                key={id}
                                id={id}
                                name={name}
                                amountOfActiveUsers={activeUsers.length}
                                lastMessage={messages[messages.length - 1].content}
                            />
                        )
                    })}
                </div>

                <button>🡻</button>

            </div>

            <button>add new room +</button>

        </div>
    )
}