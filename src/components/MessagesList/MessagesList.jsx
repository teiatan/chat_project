import { memo } from "react";
import { OneMessage } from "./OneMessage";

export const MessagesList = memo(({messages}) => {
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
                />
            );
        })
    );

    return (
        <div>
            <p className="my-10 text-center">Сьогодні</p>
            <ul className="space-y-5 ml-5">
                {renderMessage()}
            </ul>
        </div>
    );
});