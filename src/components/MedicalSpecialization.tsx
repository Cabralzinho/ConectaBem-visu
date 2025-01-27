const specialization = [
  {
    id: 1,
    name: "Cardiologia",
  },
  {
    id: 2,
    name: "Reki",
  },
  {
    id: 3,
    name: "Endocrinologia",
  },
  {
    id: 4,
    name: "Gastroenterologia",
  },
  {
    id: 5,
    name: "Nefrologia",
  },
  {
    id: 6,
    name: "Neurologia",
  },
];

export const MedicalSpecialization = () => {
  return (
    <div className="flex gap-2 overflow-x-auto invisible-scroll lg:justify-center cursor-pointer">
      {specialization.map((item) => (
        <div className="border border-blue-600 p-2 rounded-t-lg rounded-br-lg" key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
