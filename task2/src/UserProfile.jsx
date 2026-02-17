import { useState, useEffect } from "react";

function UserProfile({ userId }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: controller.signal
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    // userId добавлен в dependency array,
    // чтобы useEffect выполнялся каждый раз при изменении userId.
    // Cleanup функция отменяет предыдущий запрос,
    // чтобы избежать memory leak и обновления размонтированного компонента.
    return () => {
      controller.abort();
    };

  }, [userId]);

  return (
    <div style={{ border: "1px solid gray", padding: "20px", margin: "20px" }}>
      <h2>User Profile</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {user && (
        <div>
          <p>User ID: {userId}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
