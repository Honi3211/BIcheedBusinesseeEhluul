import { useContext, useEffect, useState } from "react";
import Button from "../button";
import Input from "../input";
import SelectInput from "../select";
import { UserContext } from "@/contexts/userContext";
import { Slider } from "@mui/material";
import DateInput from "../date";
import {
  isMarriedOptions,
  lendCauseOptions,
  haveUnder18Options,
  isBoughtHouseOptions,
  haveLendPartnerOptions,
} from "@/contexts/options";
import {
  personalQuestions,
  jobQuestions,
  otherQuestions,
  lendQuestions,
} from "@/contexts/questions";
import BigTitle from "../bigTitle";
import PartnerPart from "./partnerPart";
import { Check } from "@mui/icons-material";

const SignUpPart = () => {
  const {
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
    checkLendPartner,
    setCheckLendPartner,
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
    AddUser,
    GetData,
  } = useContext(UserContext);

  const date = new Date();
  const endingDate = new Date();
  endingDate.setDate(date.getDate() + 30);

  const IsValidateEmail = (mail) => {
    let re = /\S+@\S+\.\S+/;
    if (!re.test(mail)) return false;
    return true;
  };

  let foundUser = users.find(
    (user) =>
      user.personNummer === personNummer ||
      user.personNummer === partnerPersonNummer
  );
  let foundPartner = users.find(
    (user) =>
      user.haveLendPartner[0].partnerPersonNummer === personNummer ||
      user.haveLendPartner[0].partnerPersonNummer === partnerPersonNummer
  );

  useEffect(() => {
    setStartDate(date);
    setEndDate(endingDate);
    GetData("personNummers", setUsers);
    setCheckLendPartner(false);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1000px] bg-gradient-to-t from-[#8f91f1] to-[#a2a3f8] shadow-2xl rounded-[8px] relative flex flex-col items-center justify-center box-border px-[10px] md:px-[100px] py-[30px]">
        <h1 className="font-bold text-[40px] md:text-[50px] text-secondary-color uppercase">
          Хүсэлт
        </h1>
        <div className="mb-[30px] md:mb-[50px]"></div>
        {!isSubmitted ? (
          <div className="flex flex-col items-center">
            <BigTitle text={"Хувийн мэдээлэл"} />
            <div className="flex flex-wrap justify-center w-full">
              {personalQuestions.map((question, index) => {
                return (
                  <Input
                    title={question.text}
                    className={"m-[15px] w-full"}
                    placeholder={question.placeholder}
                    key={index}
                    type={
                      question.id === "personnummer" ||
                      question.id === "phonenumber"
                        ? "number"
                        : "text"
                    }
                    onChange={(e) => {
                      if (question.id === "personnummer") {
                        setPersonNummer(e.target.value);
                      } else if (question.id === "name") {
                        setName(e.target.value);
                      } else if (question.id === "lastname") {
                        setLastname(e.target.value);
                      } else if (question.id === "email") {
                        setEmail(e.target.value);
                      } else {
                        setPhoneNumber(e.target.value);
                      }
                    }}
                  />
                );
              })}
            </div>
            <BigTitle text={"Ажлын газрын мэдээлэл"} className={"mt-[30px]"} />
            <div className=" flex flex-wrap justify-center w-full">
              {jobQuestions.map((question, index) => {
                if (question.id === "whenjoinedjob") {
                  return (
                    <DateInput
                      text={question.text}
                      key={index}
                      className={"w-full"}
                      onChange={(e) => {
                        setWhenJoinedJob({ startDate: e.target.value });
                      }}
                    />
                  );
                } else {
                  return (
                    <Input
                      title={question.text}
                      className={"m-[15px] w-full"}
                      placeholder={question.placeholder}
                      type={question.id === "salary" ? "number" : "text"}
                      key={index}
                      onChange={(e) => {
                        if (question.id === "jobname") {
                          setJobName(e.target.value);
                        } else {
                          setSalary(e.target.value);
                        }
                      }}
                    />
                  );
                }
              })}
            </div>
            <BigTitle text={"Бусад мэдээлэл"} className={"mt-[30px]"} />
            <div className=" flex flex-wrap justify-center w-full">
              {otherQuestions.map((question, index) => {
                if (
                  question.id === "ismarried" ||
                  question.id === "haveunder18kid" ||
                  question.id === "isboughthouse"
                ) {
                  return (
                    <SelectInput
                      text={question.text}
                      index={index}
                      key={index}
                      className={"w-full"}
                      options={
                        question.id === "ismarried"
                          ? isMarriedOptions
                          : question.id === "haveunder18kid"
                          ? haveUnder18Options
                          : isBoughtHouseOptions
                      }
                      defaultValue={
                        question.id === "ismarried"
                          ? isMarriedValue
                          : question.id === "haveunder18kid"
                          ? haveunder18kidValue
                          : isBoughtHouseValue
                      }
                      placeholder={question.placeholder}
                      onChange={(choice) => {
                        question.id === "ismarried"
                          ? (setIsMarriedValue(choice.value),
                            setIsMarried(choice.value))
                          : question.id === "haveunder18kid"
                          ? (setHaveunder18kidValue(choice.value),
                            setHaveUnder18Kid(choice.value))
                          : setIsBoughtHouseValue(choice.value),
                          setIsBoughtHouse(choice.value);
                      }}
                    />
                  );
                }
              })}
            </div>
            <BigTitle text={"Зээлийн мэдээлэл"} className={"mt-[30px]"} />
            <div className="flex flex-wrap justify-center w-full">
              {lendQuestions.map((question, index) => {
                if (
                  question.id === "lendsize" ||
                  question.id === "lendduration"
                ) {
                  return (
                    <div className="flex flex-col justify-center m-[15px] w-full">
                      <p className="text-white">{question.text}</p>
                      <Slider
                        size={"medium"}
                        min={question.min}
                        max={question.max}
                        key={index}
                        onChange={(e) => {
                          question.id === "lendsize"
                            ? setLendSize(e.target.value)
                            : setLendDuration(e.target.value);
                        }}
                        marks={question.marks}
                        step={question.step}
                        defaultValue={question.defaultValue}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        className="w-full text-white"
                      />
                    </div>
                  );
                } else if (
                  question.id === "havelendpartner" ||
                  question.id === "lendcause"
                ) {
                  return (
                    <SelectInput
                      text={question.text}
                      key={index}
                      className={"w-full"}
                      options={
                        question.id === "havelendpartner"
                          ? haveLendPartnerOptions
                          : lendCauseOptions
                      }
                      defaultValue={
                        question.id === "havelendpartner"
                          ? haveLendPartnerValue
                          : lendCauseValue
                      }
                      placeholder={question.placeholder}
                      onChange={(choice) => {
                        question.id === "havelendpartner"
                          ? (setHaveLendPartnerValue(choice.value),
                            setCheckLendPartner(
                              choice.value === "Тийм" ? true : false
                            ),
                            setHaveLendPartner(choice.value),
                            console.log(checkLendPartner),
                            console.log(haveLendPartner))
                          : setLendCauseValue(choice.value),
                          setLendCause(choice.value);
                      }}
                    />
                  );
                } else {
                  return (
                    <Input
                      title={question.text}
                      className={"m-[15px] w-full"}
                      placeholder={question.placeholder}
                      key={index}
                      onChange={(e) => {
                        if (question.id === "lendcause") {
                          setLendCause(e.target.value);
                        }
                      }}
                    />
                  );
                }
              })}
            </div>

            {!checkLendPartner ? "" : <PartnerPart />}

            <div className="mt-[50px]"></div>
            <Button
              text={"Илгээх"}
              func={async () => {
                if (!IsValidateEmail(email))
                  return alert("Майл хаягаа зөв оруулна уу.");

                if (!foundUser) {
                  if (!foundPartner) {
                    return (
                      await AddUser("users"), AddPersonNummer("personNummers")
                    );
                  } else if (
                    foundPartner.endDate.seconds >
                    date.getTime() / 1000
                  ) {
                    return alert(
                      "Таны хамтран зээлдэгчийн Personnummer 30 хоногийн Ban-тай байна!"
                    );
                  } else {
                    await AddUser("users"), AddPersonNummer("personNummers");
                  }
                } else if (foundUser.endDate.seconds > date.getTime() / 1000) {
                  return alert("Таны Personnummer 30 хоногийн Ban-тай байна!");
                } else {
                  return (
                    await AddUser("users"), AddPersonNummer("personNummers")
                  );
                }
              }}
            />
          </div>
        ) : (
          <h2 className="md:w-[400px] text-white text-center">
            Хүсэлт амжилттай илгээгдлээ! Бид таны мэдээлэлтэй танилцсанаас 24
            цагийн дараа эргэн холбогдох болно.
          </h2>
        )}
      </div>
    </div>
  );
};

export default SignUpPart;
