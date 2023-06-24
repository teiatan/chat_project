import { memo } from "react";
import { OneMessage } from "./OneMessage";

export const MessagesList = memo(({messages, user}) => {
    const renderMessage = () => (
        messages.map(message => {
            const { id, owner, content, createdAt } = message;
            return (
                <OneMessage
                    key={id}
                    id={id}
                    content={content}
                    ownerId={owner.id}
                    ownerName={owner.userName}
                    createdAt={createdAt}
                    myId={user.id}
                />
            );
        })
    );

    return (
        <div>
            {/* <p className="my-10 text-center">Сьогодні</p> */}
            <div className="h-[calc(100vh-80px-80px-160px)] overflow-y-scroll">
                <ul className="space-y-5 ml-5 overflow-scroll">
                    {renderMessage()}
                </ul>
            </div>
        </div>
    );
});