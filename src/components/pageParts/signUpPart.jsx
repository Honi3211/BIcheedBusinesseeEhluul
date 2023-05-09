import { useContext, useEffect, useState } from "react";
import Button from "../button";
import Input from "../input";
import Select from "react-select";
import { UserContext } from "@/contexts/userContext";

const questions = [
  { text: "Personnumber", id: "personnumber" },
  { text: "Нэр", id: "name" },
  { text: "Овог", id: "lastname" },
  { text: "Майл Хаяг", id: "email" },
  { text: "Утасны дугаар", id: "phonenumber" },
  { text: "Ажлын газрын нэр", id: "jobname" },
  { text: "Хэзээнээс ажилд орсон", id: "whenjoinedjob" },
  { text: "Цалин (Före skatt)", id: "salary" },
  { text: "Худалдаж авсан байртай эсэх", id: "isboughthouse" },
  { text: "18 наснаас доош хүүхэдтэй эсэх", id: "haveunder18kid" },
  { text: "Гэрлэсэн эсэх", id: "ismarried" },
];

const options = [
  { label: "Гэрлэсэн", value: "married", id: 1 },
  { label: "Хамтран амьдрагчтай", value: "liveTogether", id: 2 },
  { label: "Ганц бие", value: "single", id: 3 },
];

const SignUpPart = () => {
  const {
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
  } = useContext(UserContext);

  const [value, setValue] = useState("");

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
      <div className="w-[1000px] md:h-[800px] bg-gradient-to-t from-[#8f91f1] to-[#a2a3f8] shadow-2xl rounded-[8px] relative flex flex-col items-center justify-center box-border p-[30px]">
        <h1 className="font-bold  text-[40px] md:text-[50px] text-secondary-color uppercase">
          Хүсэлт
        </h1>
        <div className="mb-[30px] md:mb-[50px]"></div>

        {isSubmitted === false ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center">
              {questions.map((question, index) => {
                if (question.text === "Гэрлэсэн эсэх") {
                  return (
                    <div
                      className="flex flex-col justify-center m-[15px]"
                      key={index}
                    >
                      <p className="text-white">{question.text}</p>
                      <Select
                        className="min-w-[169px] md:w-[300px] box-border"
                        options={options}
                        defaultValue={value}
                        onChange={(choice) => {
                          setValue(choice.value);
                          setIsMarried(choice.value);
                          // console.log(isMarried);
                        }}
                      />
                    </div>
                  );
                } else if (question.text === "Хэзээнээс ажилд орсон") {
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
                } else {
                  return (
                    <Input
                      title={question.text}
                      className={"m-[15px]"}
                      key={index}
                      onChange={(e) => {
                        if (question.id === "personnumber") {
                          setPersonNumber(e.target.value);
                        } else if (question.id === "name") {
                          setName(e.target.value);
                        } else if (question.id === "lastname") {
                          setLastname(e.target.value);
                        } else if (question.id === "email") {
                          setEmail(e.target.value);
                        } else if (question.id === "phonenumber") {
                          setPhoneNumber(e.target.value);
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
                  return alert("mail ee zuv hiine uu");
                await AddUser("users");
                setIsSubmitted(true);
              }}
            />
          </div>
        ) : (
          <h2 className="md:w-[400px] text-white text-center">
            Амжилттай бүртгүүллээ! Бид таны мэдээлэлтэй танилцсаны дараа эргээд
            холбогдох болно.
          </h2>
        )}
      </div>
    </div>
  );
};

export default SignUpPart;
