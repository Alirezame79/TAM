import { useContext } from 'react';
import UserContext from './User';

function UserContextHooks() {
    const text = useContext(UserContext);
    return text;
}

export default UserContextHooks;