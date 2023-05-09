import { UserContext } from "@/contexts/userContext";
import { useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "@/hooks/firebase";
import Header from "@/components/header";
import PromotionPart from "@/components/pageParts/promotion";
import Footer from "@/components/footer";
import SponsorsFooter from "@/components/sponsorsFooter";
import Image from "next/image";
import { sponsors } from "../../public/sponsors";

export default function Home() {
  const {
    name,
    setName,
    lastname,
    setLastname,
    email,
    setEmail,
    boughtHouse,
    setBoughtHouse,
    joinedJob,
    setJoinedJob,
    salary,
    setSalary,
    haveUnderEighteenKid,
    setHaveUnderEighteenKid,
    AddUser,
  } = useContext(UserContext);

  return (
    <div className="h-screen">
      <Header />
      <div className="px-[20px] md:px-[40px] pt-[110px] md:pt-[160px] pb-[100px]">
        <div className="absolute z-0 right-1 top-[100px]">
          <img
            src="https://img.freepik.com/free-vector/finances-management-budget-assessment-financial-literacy-accounting-idea-financier-with-cash-economist-holding-golden-coin-cartoon-character_335657-1604.jpg?w=826&t=st=1683495394~exp=1683495994~hmac=456785ea67414f28e9d9918d68fafe441eaadb06e47a9f8d6d32bb45e4167edc"
            alt=""
          />
        </div>
        <PromotionPart />
      </div>
      <SponsorsFooter />
      <Footer />
    </div>
  );
}
