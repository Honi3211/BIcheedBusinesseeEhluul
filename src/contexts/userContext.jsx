import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "@/hooks/firebase";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [boughtHouse, setBoughtHouse] = useState();
  const [joinedJob, setJoinedJob] = useState();
  const [salary, setSalary] = useState();
  const [haveUnderEighteenKid, setHaveUnderEighteenKid] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const RandomString = (length) => {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const AddUser = async (path) => {
    if (
      !name ||
      !lastname ||
      !email ||
      !boughtHouse ||
      !joinedJob ||
      !salary ||
      !haveUnderEighteenKid
    ) {
      console.log("burtgel amjiltgui");
      return 0;
    }
    await setDoc(doc(db, path, RandomString(20)), {
      name: name,
      lastname: lastname,
      email: email,
      boughtHouse: boughtHouse,
      whenJoinedJob: joinedJob,
      salary: salary,
      haveUnderEighteenKid: haveUnderEighteenKid,
    });
    console.log("amjilttai burtguullee");
    return 0;
  };

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        lastname,
        setLastname,
        email,
        setEmail,
        boughtHouse,
        setBoughtHouse,
        joinedJob,
        setJoinedJob,
        salary,
        setSalary,
        haveUnderEighteenKid,
        setHaveUnderEighteenKid,
        AddUser,
        isSubmitted,
        setIsSubmitted,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
