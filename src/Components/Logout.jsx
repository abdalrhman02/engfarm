import { auth } from '../firebaseconfig';
import { signOut } from 'firebase/auth';

function Logout() {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out successfully");
        } catch (err) {
            console.error("Error logging out:", err);
        }
    };

    return (
        <div className='logout'>
            <button onClick={handleLogout}>
                تسجيل الخروج
            </button>
        </div>
    );
}

export default Logout;