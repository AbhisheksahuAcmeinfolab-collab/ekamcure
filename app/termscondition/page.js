import Image from "next/image";
import img from "../../assets/newimage/team-bg-bg.webp";



export default function termscondition() {
  return (
    <>
      <div className="bg-white relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="terms"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Terms & Condition
          </h1>
        </div>
      </div>
    </>
  );
}
