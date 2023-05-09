import { createContext, useState, useEffect } from "react";
import { setDoc, doc } from "firebase/firestore/lite";
import { db } from "@/hooks/firebase";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [personNumber, setPersonNumber] = useState();
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [jobName, setJobName] = useState();
  const [whenJoinedJob, setWhenJoinedJob] = useState();
  const [salary, setSalary] = useState();
  const [boughtHouse, setBoughtHouse] = useState();
  const [haveUnderEighteenKid, setHaveUnderEighteenKid] = useState();
  const [isMarried, setIsMarried] = useState();
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
      !personNumber ||
      !name ||
      !lastname ||
      !email ||
      !phoneNumber ||
      !jobName ||
      !whenJoinedJob ||
      !salary ||
      !boughtHouse ||
      !haveUnderEighteenKid ||
      !isMarried
    ) {
      console.log("burtgel amjiltgui");
      return 0;
    }

    await setDoc(doc(db, path, RandomString(20)), {
      personNumber: personNumber,
      name: name,
      lastname: lastname,
      email: email,
      phoneNumber: phoneNumber,
      jobName: jobName,
      whenJoinedJob: whenJoinedJob,
      salary: salary,
      boughtHouse: boughtHouse,
      haveUnderEighteenKid: haveUnderEighteenKid,
      isMarried: isMarried,
    });
    console.log("amjilttai burtguullee");
    return 0;
  };

  return (
    <UserContext.Provider
      value={{
        personNumber,
        setPersonNumber,
        name,
        setName,
        lastname,
        setLastname,
        email,
        setEmail,
        boughtHouse,
        setBoughtHouse,
        whenJoinedJob,
        setWhenJoinedJob,
        salary,
        setSalary,
        haveUnderEighteenKid,
        setHaveUnderEighteenKid,
        phoneNumber,
        setPhoneNumber,
        jobName,
        setJobName,
        isMarried,
        setIsMarried,
        AddUser,
        isSubmitted,
        setIsSubmitted,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};