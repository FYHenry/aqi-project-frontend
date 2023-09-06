export interface User{
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    role?: string;
    addressId?: number;
    userStatusIds? : [],
    bookmarkIds? : [],
    topicIds? : [],
    threadIds? : [],
    messageIds? : [],
    reactionIds? : []
}