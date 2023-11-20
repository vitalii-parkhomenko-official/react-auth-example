import { createContext, useState, useContext, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from "../auth";

const AuthContext = createContext({});

// HOC High Order Component
export function withAuth(Component) {
  function WithAuth(props) {
    const auth = useContext(AuthContext);

    return <Component auth={auth} {...props} />
  }

  WithAuth.displayName = `withAuth(${Component.displayName || Component.name})`;

  WithAuth.WrappedComponent = Component;

  return WithAuth;
}

// Custom Hooks
export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthData() {
  const ctx = useContext(AuthContext);

  return ctx.user;
}

export function useAuthIsLoggedIn() {
  const ctx = useContext(AuthContext);

  return ctx.isLoggedIn;
}

function getInitialState() {
  return {
    user: null,
    isLoggedIn: false
  };
}

// Provider
export function Provider(props) {
  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged({}, (data) => {
      setState({ user: data, isLoggedIn: true });
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithPopup()
      .then(data => setState({ user: data, isLoggedIn: true }));
  };
  const handleLogout = () => {
    signOut()
      .then(() => setState(getInitialState()));
  };

  const value = {
    ...state,
    onLogin: handleLogin,
    onLogout: handleLogout
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}
