import Image from "next/image";
import { MdStarRate } from "react-icons/md";

export const ProfessionalCard = ({
  numberLength,
}: {
  numberLength: number;
}) => {
  return (
    <div className="flex gap-4 overflow-x-auto lg:flex-wrap">
      {Array.from({ length: numberLength }).map((_, index) => (
        <div key={index} className="flex gap-4 cursor-pointer">
          <div className="flex flex-col gap-6 bg-white px-6 py-4 rounded-lg max-w-[300px] w-full">
            <Image
              src="/images/image-profissional.png"
              alt="profissional"
              width={240}
              height={160}
            />
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center flex-wrap">
                <p className="text-2xl font-semibold w-full break-words">
                  Jéssicaaaaaaaaaaaaaaaaaa
                </p>
                <div className="flex gap-1 items-center">
                  <span className="font-semibold">5.0 </span>
                  <MdStarRate className="text-yellow-400" />

                  <span className="text-sm text-gray-600">(20 avaliações)</span>
                </div>
              </div>
              <span className="text-gray-600 text-sm">Fisioterapeuta</span>
              <span className="text-gray-600 text-sm">$$$ | 0.25 Km</span>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div className="border border-blue-600 p-2 rounded-full">
                Libras
              </div>
              <div className="border border-blue-600 p-2 rounded-full">
                LGBTQIA+ Friendly
              </div>

              <div className="border border-blue-600 p-2 rounded-full">
                Pet Friendly
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
