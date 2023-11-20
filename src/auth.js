const db = {
  email: "vitalii.parkhomenko@gmail.com",
  firstName: "Vitalii",
  lastName: "Parkhomenko",
  photoURL: "https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
};

export function onAuthStateChanged(auth, callback) {
  const data = load();

  if (data) {
    callback(data);
  }

  return () => {

  };
}

export function signInWithPopup(auth, provider) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Login with Google?")) {
      setTimeout(() => {
        save(db);
        resolve(db);
      }, 1000)
    } else {
      reject();
    }
  });
}

export function signOut() {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure logout?")) {
      setTimeout(() => {
        remove(null);
        resolve();
      }, 1000);
    } else {
      reject();
    }
  });
}

function load() {
  const raw = localStorage.getItem("__AUTH__DATA__");

  return raw ? JSON.parse(raw) : null;
}

function save(data) {
  localStorage.setItem("__AUTH__DATA__", JSON.stringify(data));
}

function remove() {
  localStorage.removeItem("__AUTH__DATA__");
}
