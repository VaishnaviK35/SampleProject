import { useDispatch } from 'react-redux';
import { logout } from '../slices/loginSlice';


export const Dashboard = () => {
    const dispatch = useDispatch();

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            Dashboard
            <button onClick={() => dispatch(logout())}> Logout</button>
            
        </div>
    )
}