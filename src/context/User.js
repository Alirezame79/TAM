import { createContext, useState } from "react";

const UserContext = createContext();
function UserProvider({ children }) {
    const [text, setText] = useState('Hello World');

    const valueToShare = (text);

    return (
        <UserContext.Provider value={valueToShare}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider };
export default UserContext;