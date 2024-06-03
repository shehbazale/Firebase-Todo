import { useState, useEffect } from "react";
import { getData } from "../../config/firebasemathod";
import BaGrid from "../BaGrid";
const Task = () => {
  const [userList, setUserList] = useState([]);

  const get = async () => {
    getData("users")
      .then((res) => {
        console.log(res);
        setUserList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <BaGrid datasource={userList} />
    </>
  );
};

export default Task;
