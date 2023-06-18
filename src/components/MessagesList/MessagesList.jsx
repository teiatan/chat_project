import { messagesArray } from "samples/messagesArray";
import { OneMessage } from "./OneMessage";

export function MessagesList() {
    const messagesSampleArray = messagesArray;
    return(
    <div className="">
        {messagesSampleArray.map(message => {
            const {id, owner, content, createdAt} = message;
            return(
                <OneMessage 
                    key={id}
                    id={id}
                    content={content}
                    ownerId={owner.id}
                    ownerName={owner.userName}
                    createdAt={createdAt}
                />
            )
        })}
    </div>
    );
}