import { activeRoom } from "samples/activeRoom"
import { OneActiveRoom } from "./OneActiveRoom"
import { SearchForm } from "components/Common/SearchForm";
import { useState } from "react";
import { FilterRooms } from "./FilterRooms";

export function ActiveRooms({rooms=[activeRoom]}) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);

    return (
        <div className="flex flex-col justify-between h-full">

            <div className="flex flex-col justify-between h-full">

                <div className="relative">
                    <h2 className="text-center">Active Rooms</h2>

                    <SearchForm placeholder={'Пошук кімнат...'}/>

                    <FilterRooms />

                    <button className="w-full">🡹</button>

                    {isSideBarOpen ?
                        <button className="absolute -right-6">🢀</button>
                        :
                        <button>🢂</button>
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