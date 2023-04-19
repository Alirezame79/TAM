import { useContext } from 'react';
import UserContext from './User';

function ContextHooks() {
    const text = useContext(UserContext);
    return text;
}

export default ContextHooks;