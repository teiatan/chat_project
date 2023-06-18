export function FilterRooms() {
    const roomTypes = ['всі', 'групові', '1х1']
    return (
        <div className="flex justify-around gap-1">
            {roomTypes.map(type =>
                (<button className="border">{type}</button>)
            )}
        </div>
    )
};