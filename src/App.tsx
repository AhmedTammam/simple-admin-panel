import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes } from "routes";
import { checkAuthStatus } from "store/slices/auth-slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthStatus());
  }, []);
  return <Routes />;
}

export default App;
