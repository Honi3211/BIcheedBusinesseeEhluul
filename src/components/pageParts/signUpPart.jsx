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
} from "../../../texts/options";
import {
  personalQuestions,
  jobQuestions,
  otherQuestions,
  lendQuestions,
} from "../../../texts/questions";
import BigTitle from "../bigTitle";
import PartnerPart from "./partnerPart";
import { texts } from "../../../texts";

const SignUpPart = () => {
  const {
    personNummer,
    setPersonNummer,
    setName,
    setLastname,
    email,
    setEmail,
    setIsBoughtHouse,
    setWhenJoinedJob,
    setSalary,
    setHaveUnder18Kid,
    setPhoneNumber,
    setJobName,
    setIsMarried,
    setLendSize,
    setLendDuration,
    setLendCause,
    setHaveLendPartner,
    isSubmitted,
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

    partnerEmail,
    partnerPersonNummer,

    setStartDate,
    setEndDate,
    users,
    setUsers,

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

  let foundMainFromMain = users.find(
    (user) => user.personNummer === personNummer
  );
  let foundMainFromPartner = users.find(
    (user) => user.personNummer === partnerPersonNummer
  );

  let foundPartnerFromMain = users.find((user) => {
    if (user.haveLendPartner === "Үгүй") {
      return undefined;
    }
    if (user.haveLendPartner[0].partnerPersonNummer === personNummer) {
      return user.haveLendPartner[0];
    }
  });
  let foundPartnerFromPartner = users.find((user) => {
    if (user.haveLendPartner === "Үгүй") {
      return undefined;
    }
    if (user.haveLendPartner[0].partnerPersonNummer === partnerPersonNummer) {
      return user.haveLendPartner[0];
    }
  });

  const CheckPersonnummerUsed = async () => {
    if (!foundMainFromMain) {
      if (!foundMainFromPartner) {
        if (!foundPartnerFromMain) {
          if (!foundPartnerFromPartner) {
            return await AddUser("users"), AddPersonNummer("personNummers");
          }
          if (
            foundPartnerFromPartner &&
            foundPartnerFromPartner.endDate.seconds > date.getTime() / 1000
          ) {
            return alert(
              "Хамтран зээлдэгчийн Personnummer 30 хоногийн Ban-тай байна."
            );
          }
          return await AddUser("users"), AddPersonNummer("personNummers");
        }
        if (
          foundPartnerFromMain &&
          foundPartnerFromMain.endDate.seconds > date.getTime() / 1000
        ) {
          return alert("Таны Personnummer ашиглагдсан байна.");
        }
        return await AddUser("users"), AddPersonNummer("personNummers");
      }
      if (
        foundMainFromPartner &&
        foundMainFromPartner.endDate.seconds > date.getTime() / 1000
      ) {
        return alert("Хамтран зээлдэгчийн Personnummer ашиглагдсан байна.");
      }
      return await AddUser("users"), AddPersonNummer("personNummers");
    }
    if (
      foundMainFromMain &&
      foundMainFromMain.endDate.seconds > date.getTime() / 1000
    ) {
      return alert("Таны Personnummer 30 хоногийн Ban-тай байна.");
    }
    return await AddUser("users"), AddPersonNummer("personNummers");
  };

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
          {texts.signupPage.signupPart.title}
        </h1>
        <div className="mb-[30px] md:mb-[50px]"></div>
        {!isSubmitted ? (
          <div className="flex flex-col items-center">
            <BigTitle text={texts.signupPage.signupPart.personInfoTitle} />
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
            <BigTitle
              text={texts.signupPage.signupPart.jobInfoTitle}
              className={"mt-[30px]"}
            />
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
            <BigTitle
              text={texts.signupPage.signupPart.otherInfoTitle}
              className={"mt-[30px]"}
            />
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
            <BigTitle
              text={texts.signupPage.signupPart.lendInfoTitle}
              className={"mt-[30px]"}
            />
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
                            setHaveLendPartner(choice.value))
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
                  return alert("Таны майл хаяг буруу байна.");
                if (!IsValidateEmail(partnerEmail))
                  return alert("Хамтран зээлдэгчийн майл хаяг буруу байна.");

                CheckPersonnummerUsed();
              }}
            />
          </div>
        ) : (
          <h2 className="md:w-[400px] text-white text-center">
            {texts.signupPage.requestcompletedText}
          </h2>
        )}
      </div>
    </div>
  );
};

export default SignUpPart;
