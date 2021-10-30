import { useEffect, useState } from "react"
import initaializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initaializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)


    }

    // google log out

    const logoutUsingGoogle = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })

    };
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [auth]);

    return {
        signInUsingGoogle,
        user,
        error,
        logoutUsingGoogle,
    }
}
export default useFirebase;
