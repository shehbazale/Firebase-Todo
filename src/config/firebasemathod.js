import app from "./firebaseconfig";
import { getDatabase, ref, push, onValue } from "firebase/database";

const db = getDatabase(app);
export const sendData = (nodeName, obj) => {
  const reference = ref(db, `${nodeName}/`);
  return push(reference, obj);
};

export const getData = (nodeName) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, nodeName);
    onValue(reference, (data) => {
      if (data.exists()) {
        let arr = Object.values(data.val());
        resolve(arr);
      } else {
        reject("No data found");
      }
    });
  });
};
