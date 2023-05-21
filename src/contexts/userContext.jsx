import { createContext, useState } from "react";
import { setDoc, doc, collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  // Form states
  const [personNummer, setPersonNummer] = useState();
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [lendSize, setLendSize] = useState(300000);
  const [lendDuration, setLendDuration] = useState(1);
  const [lendCause, setLendCause] = useState();
  const [haveLendPartner, setHaveLendPartner] = useState();
  const [jobName, setJobName] = useState();
  const [whenJoinedJob, setWhenJoinedJob] = useState();
  const [salary, setSalary] = useState();
  const [isBoughtHouse, setIsBoughtHouse] = useState();
  const [haveUnder18Kid, setHaveUnder18Kid] = useState();
  const [isMarried, setIsMarried] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [checkLendPartner, setCheckLendPartner] = useState(false);
  // Select component's value states
  const [isMarriedValue, setIsMarriedValue] = useState("");
  const [lendCauseValue, setLendCauseValue] = useState("");
  const [haveunder18kidValue, setHaveunder18kidValue] = useState("");
  const [isBoughtHouseValue, setIsBoughtHouseValue] = useState("");
  const [haveLendPartnerValue, setHaveLendPartnerValue] = useState("");

  // Partner form states
  const [partnerPersonNummer, setPartnerPersonNummer] = useState();
  const [partnerName, setPartnerName] = useState();
  const [partnerLastname, setPartnerLastname] = useState();
  const [partnerEmail, setPartnerEmail] = useState();
  const [partnerPhoneNumber, setPartnerPhoneNumber] = useState();
  const [partnerJobName, setPartnerJobName] = useState();
  const [partnerWhenJoinedJob, setPartnerWhenJoinedJob] = useState();
  const [partnerSalary, setPartnerSalary] = useState();
  const [partnerIsBoughtHouse, setPartnerIsBoughtHouse] = useState();
  const [partnerHaveUnder18Kid, setPartnerHaveUnder18Kid] = useState();
  const [partnerIsMarried, setPartnerIsMarried] = useState();
  // Partner select component's value states
  const [partnerIsMarriedValue, setPartnerIsMarriedValue] = useState("");
  const [partnerHaveunder18kidValue, setPartnerHaveunder18kidValue] =
    useState("");
  const [partnerIsBoughtHouseValue, setPartnerIsBoughtHouseValue] =
    useState("");

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [checkBanned, setCheckBanned] = useState(true);

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
      !personNummer ||
      !name ||
      !lastname ||
      !email ||
      !phoneNumber ||
      !lendSize ||
      !lendDuration ||
      !lendCause ||
      !haveLendPartner ||
      !jobName ||
      !whenJoinedJob ||
      !salary ||
      !isBoughtHouse ||
      !haveUnder18Kid ||
      !isMarried
    ) {
      alert("Хүсэлт амжилтгүй, та бүгдийг нь бөглөнө үү.");
      return 0;
    }
    if (checkLendPartner === true) {
      if (
        !partnerPersonNummer ||
        !partnerName ||
        !partnerLastname ||
        !partnerEmail ||
        !partnerPhoneNumber ||
        !partnerJobName ||
        !partnerWhenJoinedJob ||
        !partnerSalary ||
        !partnerIsBoughtHouse ||
        !partnerHaveUnder18Kid ||
        !partnerIsMarried
      ) {
        alert("Хүсэлт амжилтгүй, та бүгдийг нь бөглөнө үү.");
        return 0;
      }
    }

    await setDoc(doc(db, path, RandomString(20)), {
      personNummer: personNummer,
      name: name,
      lastname: lastname,
      email: email,
      phoneNumber: phoneNumber,
      lendSize: lendSize,
      lendDuration: lendDuration,
      lendCause: lendCause,
      jobName: jobName,
      whenJoinedJob: whenJoinedJob,
      salary: salary,
      isBoughtHouse: isBoughtHouse,
      haveUnder18Kid: haveUnder18Kid,
      isMarried: isMarried,
      haveLendPartner: !checkLendPartner
        ? haveLendPartner
        : [
            {
              partnerPersonNummer: partnerPersonNummer,
              partnerName: partnerName,
              partnerLastname: partnerLastname,
              partnerEmail: partnerEmail,
              partnerPhoneNumber: partnerPhoneNumber,
              partnerJobName: partnerJobName,
              partnerWhenJoinedJob: partnerWhenJoinedJob,
              partnerSalary: partnerSalary,
              partnerIsBoughtHouse: partnerIsBoughtHouse,
              partnerHaveUnder18Kid: partnerHaveUnder18Kid,
              partnerIsMarried: partnerIsMarried,
            },
          ],
    });
    setIsSubmitted(true);
    console.log("amjilttai burtguullee");
    return 0;
  };

  const AddPersonNummer = async (path) => {
    if (!personNummer || !name) {
      return 0;
    }
    if (checkLendPartner === true) {
      if (!partnerPersonNummer || !partnerName) {
        return 0;
      }
    }

    await setDoc(doc(db, path, RandomString(20)), {
      registeredDate: startDate,
      endDate: endDate,
      personNummer: personNummer,
      name: name,
      haveLendPartner: !checkLendPartner
        ? haveLendPartner
        : [
            {
              partnerPersonNummer: partnerPersonNummer,
              partnerName: partnerName,
            },
          ],
    });
    setIsSubmitted(true);
    console.log("amjilttai personnummer burtguullee");
    return 0;
  };

  const GetData = async (path, state) => {
    let datas = [];
    const querySnapshot = await getDocs(collection(db, path));
    querySnapshot.forEach((doc) => {
      datas.push(doc.data());
    });
    state(datas);
  };

  return (
    <UserContext.Provider
      value={{
        personNummer,
        setPersonNummer,
        name,
        setName,
        lastname,
        setLastname,
        email,
        setEmail,
        isBoughtHouse,
        setIsBoughtHouse,
        whenJoinedJob,
        setWhenJoinedJob,
        salary,
        setSalary,
        haveUnder18Kid,
        setHaveUnder18Kid,
        phoneNumber,
        setPhoneNumber,
        jobName,
        setJobName,
        isMarried,
        setIsMarried,
        lendSize,
        setLendSize,
        lendDuration,
        setLendDuration,
        lendCause,
        setLendCause,
        haveLendPartner,
        setHaveLendPartner,
        isSubmitted,
        setIsSubmitted,
        isMarriedValue,
        setIsMarriedValue,
        lendCauseValue,
        setLendCauseValue,
        haveunder18kidValue,
        setHaveunder18kidValue,
        isBoughtHouseValue,
        setIsBoughtHouseValue,
        haveLendPartnerValue,
        setHaveLendPartnerValue,
        checkLendPartner,
        setCheckLendPartner,

        partnerPersonNummer,
        setPartnerPersonNummer,
        partnerName,
        setPartnerName,
        partnerLastname,
        setPartnerLastname,
        partnerEmail,
        setPartnerEmail,
        partnerPhoneNumber,
        setPartnerPhoneNumber,
        partnerJobName,
        setPartnerJobName,
        partnerWhenJoinedJob,
        setPartnerWhenJoinedJob,
        partnerSalary,
        setPartnerSalary,
        partnerIsBoughtHouse,
        setPartnerIsBoughtHouse,
        partnerHaveUnder18Kid,
        setPartnerHaveUnder18Kid,
        partnerIsMarried,
        setPartnerIsMarried,
        partnerIsMarriedValue,
        setPartnerIsMarriedValue,
        partnerHaveunder18kidValue,
        setPartnerHaveunder18kidValue,
        partnerIsBoughtHouseValue,
        setPartnerIsBoughtHouseValue,

        startDate,
        setStartDate,
        endDate,
        setEndDate,
        users,
        setUsers,
        checkBanned,
        setCheckBanned,

        AddPersonNummer,
        GetData,
        AddUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
