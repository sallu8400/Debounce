import React, { useMemo } from "react";

interface User {
  name: string;
}

interface AppProps {
  user: User[];
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
}

const App: React.FC<AppProps> = ({ user, handleEdit, handleDelete }) => {
  // 👇 memoized user list
  const renderList = useMemo(() => {
    console.log("Rendering user list..."); // to check memo effect

    return user.map((item, index) => (
      <div className="display-data" key={index}>
        <h3>{item.name}</h3>
        <div className="button-group">
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      </div>
    ));
  }, [user]); // re-run only when 'user' changes

  return <>{renderList}</>;
};

export default App;
