import { useState } from "react";
import UserProfile from "./UserProfile";

function UserApp() {

  const [userId, setUserId] = useState(1);

  return (
    <div>
      <h1>Lab 3.2 - useEffect with Dependencies</h1>

      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>

      <UserProfile userId={userId} />
    </div>
  );
}

export default UserApp;
