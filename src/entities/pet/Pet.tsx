import type { PetMood } from "./pet.types";

type PetProps = {
  mood: PetMood;
};

const petImages: Record<PetMood, string> = {
  idle: "/pets/idle_2.png",
  happy: "/pets/happy_1.png",
  angry: "/pets/angry_3.png",
};

export function Pet({ mood }: PetProps) {
  return (
    <img
      src={petImages[mood]}
      alt={`Pet is ${mood}`}
      className="pet"
    />
  );
}