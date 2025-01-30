"use client";

import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { useProfessional } from "../hooks/useProfessional";

export const ProfessionalCard = () => {
  const { data: professional, isLoading, isError } = useProfessional();

  if (isLoading) return <div>Carregando...</div>;

  if (isError) return <div>Erro</div>;

  return (
    <div className="flex gap-4 overflow-x-auto">
      {professional?.map((professional) => (
        <div
          key={professional.id}
          className="flex gap-4 cursor-pointer h-full min-h-[545px] max-h-[545px]"
        >
          <div className="flex flex-col gap-6 bg-white px-6 py-4 rounded-lg w-full max-w-[284px] min-w-[284px] overflow-hidden">
            <div className="flex justify-center">
              <Image
                className="rounded-lg w-full"
                src={professional.image || ""}
                alt="profissional"
                width={240}
                height={160}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center flex-wrap">
                <p className="text-2xl font-semibold w-full truncate">
                  {professional.name}
                </p>
                <div className="flex gap-1 items-center">
                  <span className="font-semibold">{professional.rating}</span>
                  <MdStarRate className="text-yellow-400" />

                  <span className="text-sm text-gray-600">
                    ({professional.reviews} avaliações)
                  </span>
                </div>
              </div>
              <span className="text-gray-600 text-sm">
                {professional.specialization}
              </span>
              <span className="text-gray-600 text-sm">
                R$ {professional.price} | {professional.distance} Km
              </span>
            </div>
            <div className="flex gap-4 flex-wrap">
              {professional.preferablyServices.map((service) => (
                <div
                  key={service.id}
                  className="border border-blue-600 p-1 rounded-full text-sm"
                >
                  {service.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
