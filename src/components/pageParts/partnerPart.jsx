import BigTitle from "../bigTitle";
import {
  personalQuestions,
  jobQuestions,
  otherQuestions,
} from "../../../texts/questions";
import {
  partnerHaveUnder18Options,
  partnerIsBoughtHouseOptions,
  partnerIsMarriedOptions,
} from "../../../texts/options";
import Input from "../input";
import DateInput from "../date";
import SelectInput from "../select";
import { useContext } from "react";
import { UserContext } from "@/contexts/userContext";

const PartnerPart = () => {
  const {
    setPartnerPersonNummer,
    setPartnerName,
    setPartnerLastname,
    setPartnerEmail,
    setPartnerPhoneNumber,
    setPartnerJobName,
    setPartnerWhenJoinedJob,
    setPartnerSalary,
    setPartnerIsBoughtHouse,
    setPartnerHaveUnder18Kid,
    setPartnerIsMarried,
    partnerIsMarriedValue,
    setPartnerIsMarriedValue,
    partnerHaveunder18kidValue,
    setPartnerHaveunder18kidValue,
    partnerIsBoughtHouseValue,
    setPartnerIsBoughtHouseValue,
  } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center mt-[50px]">
      <BigTitle text={"Хамтран зээлдэгчийн мэдээлэл"} />
      <div className="flex flex-wrap justify-center w-full">
        {personalQuestions.map((question, index) => {
          return (
            <Input
              title={question.text}
              className={"m-[15px] w-full"}
              placeholder={question.placeholder}
              key={index}
              type={
                question.id === "personnummer" || question.id === "phonenumber"
                  ? "number"
                  : "text"
              }
              onChange={(e) => {
                if (question.id === "personnummer") {
                  setPartnerPersonNummer(e.target.value);
                } else if (question.id === "name") {
                  setPartnerName(e.target.value);
                } else if (question.id === "lastname") {
                  setPartnerLastname(e.target.value);
                } else if (question.id === "email") {
                  setPartnerEmail(e.target.value);
                } else {
                  setPartnerPhoneNumber(e.target.value);
                }
              }}
            />
          );
        })}
      </div>
      <BigTitle
        text={"Хамтрагчийн ажлын газрын мэдээлэл"}
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
                  setPartnerWhenJoinedJob({ startDate: e.target.value });
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
                    setPartnerJobName(e.target.value);
                  } else {
                    setPartnerSalary(e.target.value);
                  }
                }}
              />
            );
          }
        })}
      </div>
      <BigTitle text={"Хамтрагчийн бусад мэдээлэл"} className={"mt-[30px]"} />
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
                    ? partnerIsMarriedOptions
                    : question.id === "haveunder18kid"
                    ? partnerHaveUnder18Options
                    : partnerIsBoughtHouseOptions
                }
                defaultValue={
                  question.id === "ismarried"
                    ? partnerIsMarriedValue
                    : question.id === "haveunder18kid"
                    ? partnerHaveunder18kidValue
                    : partnerIsBoughtHouseValue
                }
                placeholder={question.placeholder}
                onChange={(choice) => {
                  question.id === "ismarried"
                    ? (setPartnerIsMarriedValue(choice.value),
                      setPartnerIsMarried(choice.value))
                    : question.id === "haveunder18kid"
                    ? (setPartnerHaveunder18kidValue(choice.value),
                      setPartnerHaveUnder18Kid(choice.value))
                    : setPartnerIsBoughtHouseValue(choice.value),
                    setPartnerIsBoughtHouse(choice.value);
                }}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default PartnerPart;
