export const personalQuestions = [
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
export const jobQuestions = [
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
export const otherQuestions = [
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
export const lendQuestions = [
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
