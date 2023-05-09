import { useContext, useEffect } from "react";
import Button from "../button";
import Input from "../input";
import { UserContext } from "@/contexts/userContext";

const questions = [
  { text: "Гишүүн номер (Personnumber)" },
  { text: "Нэр" },
  { text: "Овог" },
  { text: "Майл Хаяг" },
  { text: "Утасны дугаар" },
  { text: "Ажлын газрын нэр" },
  { text: "Хэзээнээс ажилд орсон" },
  { text: "Цалин" },
  { text: "Худалдаж авсан байртай эсэх" },
  { text: "Гэрлэсэн эсэх" },
  { text: "18 наснаас доош хүүхэдтэй эсэх" },
];

const SignUpPart = () => {
  const { isSubmitted, setIsSubmitted } = useContext(UserContext);

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
          Бүртгүүлэх
        </h1>
        <div className="mb-[30px] md:mb-[50px]"></div>

        {isSubmitted === false ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center">
              {questions.map((question, index) => {
                return (
                  <Input
                    title={question.text}
                    className={"m-[15px] "}
                    key={index}
                  />
                );
              })}
            </div>
            <div className="mt-[50px]"></div>
            <Button
              text={"Илгээх"}
              func={() => {
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
