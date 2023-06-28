import { activeRooms } from 'samples/activeRooms';
import { OneActiveRoom } from './OneActiveRoom';
import { SearchForm } from 'components/Common/SearchForm';
import { FilterRooms } from './FilterRooms';

export const ActiveRooms = ({
    rooms = activeRooms,
    areActiveRoomsOpen,
    setAreActiveRoomsOpen,
    setOpenedModal,
    messages,
    currentRoom,
    setCurrentRoom,
}) => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="relative">
                {areActiveRoomsOpen && (
                    <h2 className="text-center">Активні кімнати</h2>
                )}

                {areActiveRoomsOpen && (
                    <SearchForm placeholder={'Пошук кімнат...'} />
                )}

                {areActiveRoomsOpen && <FilterRooms />}

                {areActiveRoomsOpen ? (
                    <button
                        className="absolute -right-6"
                        onClick={() => setAreActiveRoomsOpen(false)}
                    >
                        🢀
                    </button>
                ) : (
                    <button
                        className="absolute -right-6"
                        onClick={() => setAreActiveRoomsOpen(true)}
                    >
                        🢂
                    </button>
                )}

                {rooms.map(room => {
                    const { id, name, activeUsers } = room;
                    const thisRoomMessages = messages.filter(
                        message => message.roomId === id
                    );
                    const lastMessage =
                        thisRoomMessages[thisRoomMessages.length - 1]?.content;
                    return (
                        <div
                            key={id}
                            onClick={() => setCurrentRoom({ name, id })}
                            className={
                                currentRoom.id === id ? 'bg-[#D9D9D9]' : ''
                            }
                        >
                            <OneActiveRoom
                                id={id}
                                name={name}
                                amountOfActiveUsers={activeUsers.length}
                                lastMessage={lastMessage}
                                areActiveRoomsOpen={areActiveRoomsOpen}
                            />
                        </div>
                    );
                })}
            </div>

            <button onClick={() => setOpenedModal('CreateNewRoom')}>
                {areActiveRoomsOpen ? 'add new room +' : '+'}
            </button>
        </div>
    );
};
