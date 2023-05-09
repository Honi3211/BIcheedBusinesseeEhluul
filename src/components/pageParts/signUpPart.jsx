import { useContext, useEffect, useState } from "react";
import Button from "../button";
import Input from "../input";
import Select from "react-select";
import { UserContext } from "@/contexts/userContext";
import { Slider } from "@mui/material";

const questions = [
  { text: "Personnummer", id: "personnummer" },
  { text: "Нэр", id: "name" },
  { text: "Овог", id: "lastname" },
  { text: "Майл Хаяг", id: "email" },
  { text: "Утасны дугаар", id: "phonenumber" },
  {
    text: "Зээлийн хүсэх хэмжээ (Sek)",
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
  { text: "Зээлийн шалтгаан", id: "lendcause" },
  { text: "Хамтран зээлдэгч", id: "lendpartner" },
  { text: "Ажлын газрын нэр", id: "jobname" },
  { text: "Хэзээнээс ажилд орсон", id: "whenjoinedjob" },
  { text: "Цалин (Före skatt)", id: "salary" },
  { text: "Худалдаж авсан байртай эсэх", id: "isboughthouse" },
  { text: "18 наснаас доош хүүхэдтэй эсэх", id: "haveunder18kid" },
  { text: "Гэрлэсэн эсэх", id: "ismarried" },
];

const isMarriedOptions = [
  { label: "Гэрлэсэн", value: "Gerlesen", id: 1 },
  { label: "Хамтран амьдрагчтай", value: "Hamtran amidragchtai", id: 2 },
  { label: "Ганц бие", value: "Gants biy", id: 3 },
];

const lendCauseOptions = [
  { label: "Машин", value: "Mashin", id: 1 },
  { label: "Байрны засвар", value: "Bairnii zasvar", id: 2 },
  {
    label: "Одоо байгаа зээлээ нэгтгэх",
    value: "Odoo baigaa zeelee negtgeh",
    id: 3,
  },
  { label: "Бэлэн мөнгөний зээл", value: "Belen mungunii zeel", id: 4 },
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
    haveUnderEighteenKid,
    setHaveUnderEighteenKid,
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
      <div className="w-[1000px] md:h-[1000px] bg-gradient-to-t from-[#8f91f1] to-[#a2a3f8] shadow-2xl rounded-[8px] relative flex flex-col items-center justify-center box-border p-[30px]">
        <h1 className="font-bold  text-[40px] md:text-[50px] text-secondary-color uppercase">
          Хүсэлт
        </h1>
        <div className="mb-[30px] md:mb-[50px]"></div>

        {isSubmitted === false ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center">
              {questions.map((question, index) => {
                if (question.id === "ismarried") {
                  return (
                    <div
                      className="flex flex-col justify-center m-[15px]"
                      key={index}
                    >
                      <p className="text-white">{question.text}</p>
                      <Select
                        className="min-w-[169px] md:w-[300px] box-border"
                        options={isMarriedOptions}
                        defaultValue={marriedValue}
                        onChange={(choice) => {
                          setMarriedValue(choice.value);
                          setIsMarried(choice.value);
                        }}
                      />
                    </div>
                  );
                } else if (question.id === "whenjoinedjob") {
                  return (
                    <div
                      className="flex flex-col justify-center m-[15px]"
                      key={index}
                    >
                      <p className="text-white">{question.text}</p>
                      <input
                        type={"date"}
                        className="md:w-[300px] px-[10px] box-border py-[5px] rounded-[10px]"
                        onChange={(e) => {
                          setWhenJoinedJob({ startDate: e.target.value });
                        }}
                      />
                    </div>
                  );
                } else if (
                  question.id === "lendsize" ||
                  question.id === "lendduration"
                ) {
                  return (
                    <div
                      className="flex flex-col justify-center m-[15px] md:w-[300px]"
                      key={index}
                    >
                      <p className="text-white">{question.text}</p>
                      <Slider
                        size={"medium"}
                        min={question.min}
                        max={question.max}
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
                        className="md:w-[300px] text-white"
                      />
                    </div>
                  );
                } else if (question.id === "lendcause") {
                  return (
                    <div
                      className="flex flex-col justify-center m-[15px] md:w-[300px]"
                      key={index}
                    >
                      <p className="text-white">{question.text}</p>
                      <Select
                        className="md:w-[300px] box-border"
                        options={lendCauseOptions}
                        defaultValue={lendCauseValue}
                        onChange={(choice) => {
                          setLendCauseValue(choice.value);
                          setLendCause(choice.value);
                        }}
                      />
                    </div>
                  );
                } else {
                  return (
                    <Input
                      title={question.text}
                      className={"m-[15px] md:w-[300px]"}
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
                        } else if (question.id === "phonenumber") {
                          setPhoneNumber(e.target.value);
                        } else if (question.id === "lendpartner") {
                          setLendPartner(e.target.value);
                        } else if (question.id === "jobname") {
                          setJobName(e.target.value);
                        } else if (question.id === "salary") {
                          setSalary(e.target.value);
                        } else if (question.id === "isboughthouse") {
                          setBoughtHouse(e.target.value);
                        } else {
                          setHaveUnderEighteenKid(e.target.value);
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
