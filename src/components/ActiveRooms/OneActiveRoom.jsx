export const OneActiveRoom = ({name, amountOfActiveUsers, lastMessage, areActiveRoomsOpen}) => {
    return (
        <div className="relative border w-full p-4 flex gap-2">

            <div className="border flex justify-center items-center p-4">
                {name.slice(0,2).toUpperCase()}
            </div>

            {areActiveRoomsOpen &&
                <div className="w-full flex flex-col justify-between">

                    <p className="absolute bottom-0 right-1">
                        {amountOfActiveUsers}
                    </p>

                    <button className="absolute top-0 right-1">
                        ...
                    </button>
                    
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-xs">{lastMessage}</p>

                </div>
            }
        </div>
    );
};