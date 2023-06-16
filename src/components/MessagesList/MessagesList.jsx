import { OneMessage } from "./OneMessage";

export function MessagesList() {
    const messagesSampleArray = [
        {
            id: 'fvf234dr4',
            owner: {
                id: 'qqqqwww13',
                userName: 'Павло'
            },
            content: 'Привіт всім!',
            createdAt: '2023-06-16T20:46:40.382Z', // new Date().toISOString(),
        },{
            id: 'sdfer45dhg3',
            owner: {
                id: 'eeerrr14',
                userName: 'Олена'
            },
            content: 'Привіт, Павло',
            createdAt: '2023-06-16T20:47:40.382Z',
        },{
            id: 'dg56ghj33g',
            owner: {
                id: 'qqqqwww13',
                userName: 'Павло'
            },
            content: 'Як справи?',
            createdAt: '2023-06-16T20:47:40.382Z',
        }
    ];
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