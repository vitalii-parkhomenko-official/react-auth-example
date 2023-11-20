import {
  // useAuth,
  // useAuthData,
  // useAuthIsLoggedIn,
  withAuth,
} from "../context/AuthContext";

function Header(props) {
  // const auth = useAuth();
  // const user = useAuthData();
  // const isLoggedIn = useAuthIsLoggedIn();
  const { auth } = props;

  return (
    <header
      style={{
        height: 50,
        display: "flex",
        justifyContent: "flex-end"
    }}
    >
      {auth.isLoggedIn && <UserMenu onLogout={auth.onLogout} user={auth.user} />}
      {!auth.isLoggedIn && <LoginButton onClick={auth.onLogin} />}
    </header>
  );
}

const HeaderWithAuth = withAuth(Header);

export default HeaderWithAuth;

function LoginButton(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <button onClick={props.onClick}>
        Login
      </button>
    </div>
  );
}

function UserMenu(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <div>
        {props.user.firstName} {props.user.lastName}
      </div>
      <div
        style={{
          width: 45,
          height: 45,
          borderRadius: "50%",
          backgroundImage: `url(${props.user.photoURL})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
      }}
      />
      <button onClick={props.onLogout}>
        Logout
      </button>
    </div>
  );
}

