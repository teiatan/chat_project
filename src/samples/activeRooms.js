import { user1, user2, user3, user4 } from "./users"

export const activeRooms = [
    {
        id: '1408',
        name: 'головна',
        activeUsers: [
            user1,
            user2
        ]
    },
    {
        id: '111',
        name: 'погода',
        activeUsers: [
            user1,
            user3,
            user4
        ]
    }
];