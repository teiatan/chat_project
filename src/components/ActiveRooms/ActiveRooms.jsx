import { activeRoom } from "samples/activeRoom"
import { OneActiveRoom } from "./OneActiveRoom"
import { SearchForm } from "components/Common/SearchForm";
import { FilterRooms } from "./FilterRooms";

export const ActiveRooms = ({rooms=[activeRoom], areActiveRoomsOpen, setAreActiveRoomsOpen, setOpenedModal}) => {

    return (
        <div className="flex flex-col justify-between h-full">

                <div className="relative">
                    {areActiveRoomsOpen && <h2 className="text-center">Активні кімнати</h2>}

                    {areActiveRoomsOpen && <SearchForm placeholder={'Пошук кімнат...'}/>}

                    {areActiveRoomsOpen && <FilterRooms />}

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
                                areActiveRoomsOpen={areActiveRoomsOpen}
                            />
                        )
                    })}
                </div>

            <button onClick={()=>setOpenedModal('CreateNewRoom')}>
                {areActiveRoomsOpen ?'add new room +':'+'}
            </button>

        </div>
    )
}