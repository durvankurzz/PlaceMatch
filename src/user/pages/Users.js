import React from "react";
import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Durvankur kadam",
      image: "https://st.focusedcollection.com/18590116/i/650/focused_309926376-stock-photo-front-view-young-caucasian-man.jpg",
      places: 3,
    }
  ];
  return <UserList items={USERS} />;
};

export default Users;
