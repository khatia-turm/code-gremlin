import { useState } from "react";
import type { PetMood } from "../../entities/pet/pet.types";

export function usePetMood(initialMood: PetMood = "idle") {
  const [mood, setMood] = useState<PetMood>(initialMood);

  const changeMood = (nextMood: PetMood) => {
    setMood(nextMood);
  };

  return {
    mood,
    changeMood,
  };
}