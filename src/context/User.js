import { createContext, useState } from "react";

const UserContext = createContext();
function Provider({ children }) {
    const [text, setText] = useState('Hello World');

    const valueToShare = (text);

    return (
        <UserContext.Provider value={valueToShare}>
            {children}
        </UserContext.Provider>
    )
}

export { Provider };
export default UserContext;