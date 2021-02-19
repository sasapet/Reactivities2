import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";
function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((responst) => {
      setActivities(responst.data);
      console.log(responst);
    });
    return () => {
      //cleanup
    };
  }, []);
  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map((a: any) => (
          <List.Item key={a.id}>{a.title}</List.Item>
        ))}
      </List>
      <ul></ul>
    </div>
  );
}

export default App;
