import Header from "@/components/header";
import Footer from "@/components/footer";
import SignUpPart from "@/components/pageParts/signUpPart";

export default function SignUp() {
  return (
    <div className="h-screen bg-primary-color relative">
      <Header />

      <div className="bg-white">
        <div className="px-[20px] md:px-[40px] pt-[110px] md:pt-[160px] pb-[60px]">
          <SignUpPart />
        </div>
      </div>

      <Footer />
    </div>
  );
}
