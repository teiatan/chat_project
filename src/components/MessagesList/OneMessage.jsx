import { memo } from "react";

export const OneMessage = memo(({ content, ownerName, createdAt }) => {
    const time = new Date(createdAt).toLocaleTimeString([], { timeStyle: 'short' });

    return (
        <li className="border border-gray-300 rounded bg-gray-100 p-2 block w-max relative">
            <span className="font-bold"> {ownerName} </span>
            <p> {content} </p>
            <span className="absolute bottom-0 right-0 right-[-3rem]"> {time} </span>
        </li>
    );
})