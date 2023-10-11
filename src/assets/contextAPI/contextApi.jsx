import {
    createContext,
    useContext,
    useEffect,
    useState,
    Children,
  } from "react";
    
  import { auth, db } from "./firebasejsx";
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    getAuth, getRedirectResult
  } from "firebase/auth";
  import { doc, setDoc } from "firebase/firestore";


  export const AuthContext = createContext();
  
  // this is function is wrap around a context api to allow easy props handling
  function Autcontextprovider(props) {
    const [user, setUser] = useState({});
    //  get th user that is sign in as object
  
    function signUp(email, password) {
       setDoc(doc(db, "users", email), {
         //addingnd users and his email in firebase
         savedShows: [],
       });
      return createUserWithEmailAndPassword(auth, email, password);
      // firebase function to  create a email and password by using an abstraction as baas
    }
  
    function logOut() {
      return signOut(auth);
    }
    function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }
    function authes (){ 
      const auth=getAuth();
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
    useEffect(() => {
      // Get  the current user who just create an emaiil or password
  
      const unsubcribe = onAuthStateChanged(auth, (currentuser) => {
        setUser(currentuser);
      });
      return () => {
        unsubcribe();
      };
    });
  
    // wrap all context withim an context api
  
    return (
      <AuthContext.Provider
        value={{
          signUp,
          logIn,
          logOut,
          authes,
          user,
        }}>
        {props.children}
      </AuthContext.Provider>
    );
  }
  
  export default Autcontextprovider;
  
  //userAuth is the function of firebase that perform authentication
  //this file handle authentication
  
  export function UserAuth() {
    return useContext(AuthContext);
  }
  