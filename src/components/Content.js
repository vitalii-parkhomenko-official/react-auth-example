import { useAuth } from "../context/AuthContext";

function Content() {
  const auth = useAuth();

  if (auth.isLoggedIn) {
    return (
      <div>
        <p>
          Content for authed users
        </p>
      </div>
    );
  }

  return (
    <div>
      <p>
        Please, login first
      </p>
    </div>
  );
}

export default Content;
