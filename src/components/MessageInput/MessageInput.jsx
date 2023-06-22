import { memo, useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { BsSend } from "react-icons/bs";

export const MessageInput = memo(() => {
    const [message, setMessage] = useState('');

    const onChangeHandler = (event) => {
        setMessage(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setMessage('');
        }
        if (event.key === 'Enter') {
            onChangeHandler(event);
            setMessage('');
        }
    };

    return (
        <div className="border flex items-center">
            <input
                type="text"
                onChange={onChangeHandler}
                value={message}
                onKeyDown={handleKeyDown}
                className="w-full px-4 py-2 border rounded"
                placeholder="Type text ..."
                autoFocus
            />
            <div className="flex flex-col ml-2 items-center">
                <div className="flex items-center space-x-2">
                    <button
                        className="px-4 py-2 rounded text-xl"
                    // onClick={() => console.log('smile')}
                    >
                        <BiSmile />
                    </button>
                    <button
                        className="px-4 py-2 rounded text-xl"
                    // onClick={() => console.log('add file')}
                    >
                        <AiOutlinePaperClip />
                    </button>
                </div>
                <button
                    className="px-4 py-2 rounded mt-2 border bg-white flex items-center"
                // onClick={() => console.log('send')}
                >
                    <BsSend className="text-xl" />
                </button>
            </div>
        </div>
    )
});
