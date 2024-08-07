import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        navigate("/home", { replace: true });
      } else {
        setAuthUser(null);
        navigate("/login", { replace: true });
      }
    });
    return () => {
      listen();
    };
  }, []);
};

export default AuthDetails;
