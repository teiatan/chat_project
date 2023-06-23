import { memo, useState, useRef } from "react";
import Picker from '@emoji-mart/react'
import { AiOutlinePaperClip } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { BsSend } from "react-icons/bs";

export const MessageInput = memo(() => {
    const [message, setMessage] = useState('');
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const inputRef = useRef(null);
    const timeoutRef = useRef(null);

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

    const handleEmojiPickerOpen = () => {
        clearTimeout(timeoutRef.current);
        setEmojiPickerVisible(true);
    };

    const handleEmojiPickerClose = () => {
        timeoutRef.current = setTimeout(() => {
            setEmojiPickerVisible(false);
            inputRef.current.focus();
        }, 200);
    };

    const addEmoji = ({ native }) => {
        setMessage((message + native).trim());
    };

    return (
        <div className="border flex items-center relative">
            <input
                ref={inputRef}
                type="text"
                onChange={onChangeHandler}
                value={message}
                onKeyDown={handleKeyDown}
                className="w-full px-4 py-2 border rounded"
                placeholder="Type text ..."
            />
            {emojiPickerVisible &&
                <div
                    className="absolute bottom-[7rem] right-3"
                    onMouseEnter={handleEmojiPickerOpen}
                    onMouseLeave={handleEmojiPickerClose}
                >
                    <Picker onEmojiSelect={emojiTag => addEmoji(emojiTag)} />
                </div>}
            <div className="flex flex-col ml-2 items-center">
                <div className="flex items-center space-x-2">
                    <button
                        className="px-4 py-2 rounded text-xl"
                        onMouseEnter={handleEmojiPickerOpen}
                        onMouseLeave={handleEmojiPickerClose}
                    >
                        <BiSmile />
                    </button>
                    <button
                        className="px-4 py-2 rounded text-xl"
                    >
                        <AiOutlinePaperClip />
                    </button>
                </div>
                <button
                    className="px-4 py-2 rounded mt-2 border bg-white flex items-center"
                >
                    <BsSend className="text-xl" />
                </button>
            </div>
        </div>
    )
});
