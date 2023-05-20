import { useContext, useEffect, useState } from "react";
import Button from "../button";
import Input from "../input";
import Select from "react-select";
import SelectInput from "../select";
import { UserContext } from "@/contexts/userContext";
import { Slider } from "@mui/material";
import DateInput from "../date";

const personalQuestions = [
  {
    text: "Personnummer",
    id: "personnummer",
    placeholder: "ÅÅÅÅMMDD-XXXX",
  },
  { text: "Нэр", id: "name", placeholder: "Нэр" },
  { text: "Овог", id: "lastname", placeholder: "Овог" },
  { text: "Майл Хаяг", id: "email", placeholder: "Майл хаяг" },
  {
    text: "Утасны дугаар",
    id: "phonenumber",
    placeholder: "Утасны дугаар",
  },
];
const jobQuestions = [
  {
    text: "Ажлын газрын нэр",
    id: "jobname",
    placeholder: "Ажлын газрын нэр",
  },
  { text: "Хэзээнээс ажилд орсон", id: "whenjoinedjob" },
  {
    text: "Цалин (Före skatt)",
    id: "salary",
    placeholder: "Цалингийн дүн",
  },
];
const otherQuestions = [
  {
    text: "Худалдаж авсан байртай эсэх",
    id: "isboughthouse",
    placeholder: "Сонгоно уу",
  },
  {
    text: "18 наснаас доош хүүхэдтэй эсэх",
    id: "haveunder18kid",
    placeholder: "Сонгоно уу",
  },
  { text: "Гэрлэсэн эсэх", id: "ismarried", placeholder: "Сонгоно уу" },
];
const lendQuestions = [
  {
    text: "Зээлийн хүсэх хэмжээ (Sek)",
    placeholder: "Сонгоно уу",
    id: "lendsize",
    min: 0,
    max: 600000,
    defaultValue: 50000,
    marks: [
      { value: 0 },
      { value: 50000 },
      { value: 100000 },
      { value: 150000 },
      { value: 200000 },
      { value: 250000 },
      { value: 300000 },
      { value: 350000 },
      { value: 400000 },
      { value: 450000 },
      { value: 500000 },
      { value: 550000 },
      { value: 600000 },
    ],
    step: null,
  },
  {
    text: "Зээлийн хугацаа (Жил)",
    id: "lendduration",
    min: 1,
    max: 15,
    defaultValue: 2,
    marks: false,
    step: 1,
  },
  {
    text: "Зээлийн шалтгаан",
    id: "lendcause",
    placeholder: "Сонгоно уу",
  },
  {
    text: "Хамтран зээлдэгч байгаа эсэх",
    id: "havelendpartner",
    placeholder: "Сонгоно уу",
  },
];

const isMarriedOptions = [
  { label: "Гэрлэсэн", value: "Гэрлэсэн", id: 1 },
  { label: "Хамтран амьдрагчтай", value: "Хамтран амьдрагчтай", id: 2 },
  { label: "Ганц бие", value: "Ганц бие", id: 3 },
];
const lendCauseOptions = [
  { label: "Машин", value: "Машин", id: 1 },
  { label: "Байрны засвар", value: "Байрны засвар", id: 2 },
  {
    label: "Одоо байгаа зээлээ нэгтгэх",
    value: "Одоо байгаа зээлээ нэгтгэх",
    id: 3,
  },
  { label: "Бэлэн мөнгөний зээл", value: "Бэлэн мөнгөний зээл", id: 4 },
];
const haveUnder18Options = [
  { label: "Тийм", value: "Тийм", id: 1 },
  { label: "Үгүй", value: "Үгүй", id: 2 },
];
const isBoughtHouseOptions = [
  { label: "Тийм", value: "Тийм", id: 1 },
  { label: "Үгүй", value: "Үгүй", id: 2 },
];
const haveLendPartnerOptions = [
  { label: "Тийм", value: "Тийм", id: 1 },
  { label: "Үгүй", value: "Үгүй", id: 2 },
];

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
    boughtHouse,
    setBoughtHouse,
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
    lendPartner,
    setLendPartner,
    AddUser,
    isSubmitted,
    setIsSubmitted,
  } = useContext(UserContext);

  const [marriedValue, setMarriedValue] = useState("");
  const [lendCauseValue, setLendCauseValue] = useState("");
  const [haveunder18kidValue, setHaveunder18kidValue] = useState("");
  const [isBoughtHouseValue, setIsBoughtHouseValue] = useState("");
  const [haveLendPartnerValue, setHaveLendPartnerValue] = useState("");

  const IsValidateEmail = (mail) => {
    let re = /\S+@\S+\.\S+/;
    if (!re.test(mail)) return false;
    return true;
  };

  useEffect(() => {
    setIsSubmitted(false);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1000px] bg-gradient-to-t from-[#8f91f1] to-[#a2a3f8] shadow-2xl rounded-[8px] relative flex flex-col items-center justify-center box-border px-[30px] md:px-[170px] py-[30px]">
        <h1 className="font-bold  text-[40px] md:text-[50px] text-secondary-color uppercase">
          Хүсэлт
        </h1>
        <div className="mb-[30px] md:mb-[50px]"></div>
        {isSubmitted === false ? (
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-secondary-color flex flex-start md:w-full px-[15px] underline underline-offset-4">
              Хувийн мэдээлэл
            </h2>
            <div className=" flex flex-wrap justify-center">
              {personalQuestions.map((question, index) => {
                return (
                  <Input
                    title={question.text}
                    className={"m-[15px] md:w-full"}
                    placeholder={question.placeholder}
                    key={index}
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

            <h2 className="font-bold text-secondary-color flex flex-start md:w-full px-[15px] underline underline-offset-4 mt-[30px]">
              Ажлын газрын мэдээлэл
            </h2>
            <div className=" flex flex-wrap justify-center">
              {jobQuestions.map((question, index) => {
                if (question.id === "whenjoinedjob") {
                  return (
                    <DateInput
                      text={question.text}
                      key={index}
                      className={"md:w-full"}
                      onChange={(e) => {
                        setWhenJoinedJob({ startDate: e.target.value });
                      }}
                    />
                  );
                } else {
                  return (
                    <Input
                      title={question.text}
                      className={"m-[15px] md:w-full"}
                      placeholder={question.placeholder}
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

            <h2 className="font-bold text-secondary-color flex flex-start md:w-full px-[15px] underline underline-offset-4 mt-[30px]">
              Бусад мэдээлэл
            </h2>
            <div className=" flex flex-wrap justify-center">
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
                      className={"md:w-full"}
                      options={
                        question.id === "ismarried"
                          ? isMarriedOptions
                          : question.id === "haveunder18kid"
                          ? haveUnder18Options
                          : isBoughtHouseOptions
                      }
                      defaultValue={
                        question.id === "ismarried"
                          ? marriedValue
                          : question.id === "haveunder18kid"
                          ? haveunder18kidValue
                          : isBoughtHouseValue
                      }
                      placeholder={question.placeholder}
                      onChange={(choice) => {
                        question.id === "ismarried"
                          ? (setMarriedValue(choice.value),
                            setIsMarried(choice.value))
                          : question.id === "haveunder18kid"
                          ? (setHaveunder18kidValue(choice.value),
                            setHaveUnder18Kid(choice.value))
                          : setIsBoughtHouseValue(choice.value),
                          setBoughtHouse(choice.value);
                      }}
                    />
                  );
                }
              })}
            </div>

            <h2 className="font-bold text-secondary-color flex flex-start md:w-full px-[15px] underline underline-offset-4 mt-[30px]">
              Зээлийн мэдээлэл
            </h2>
            <div className="flex flex-wrap justify-center">
              {lendQuestions.map((question, index) => {
                if (
                  question.id === "lendsize" ||
                  question.id === "lendduration"
                ) {
                  return (
                    <div className="flex flex-col justify-center m-[15px] md:w-[300px]">
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
                        className=" md:w-full text-white"
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
                      className={"md:w-full"}
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
                            setLendPartner(choice.value))
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
            <div className="mt-[50px]"></div>
            <Button
              text={"Илгээх"}
              func={async () => {
                if (!IsValidateEmail(email))
                  return alert("Майл хаягаа зөв оруулна уу.");
                await AddUser("users");
                setIsSubmitted(true);
              }}
            />
          </div>
        ) : (
          <h2 className="md:w-[400px] text-white text-center">
            Амжилттай бүртгүүллээ! Бид таны мэдээлэлтэй танилцсанаас 24 цагийн
            дараа эргээд холбогдох болно.
          </h2>
        )}
      </div>
    </div>
  );
};

export default SignUpPart;
