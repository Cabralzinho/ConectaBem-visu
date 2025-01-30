import { Button } from "@mui/material";
import { ProfessionalCard } from "./ProfessionalCard";

type ProfessionalSectionProps = {
  Specialization: string;
}

export const ProfessionalSection = ({Specialization}: ProfessionalSectionProps) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">{Specialization}</p>
        <Button className="text-button" variant="contained">
          Ver Mais
        </Button>
      </div>
      <ProfessionalCard />
    </section>
  );
};
