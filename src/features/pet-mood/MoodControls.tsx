import type { PetMood } from "../../entities/pet/pet.types";

type MoodControlsProps = {
  onMoodChange: (mood: PetMood) => void;
};

const moods: PetMood[] = [
  "idle",
  "happy",
  "angry",
  "judging",
  "sleeping",
];

export function MoodControls({
  onMoodChange,
}: MoodControlsProps) {
  return (
    <div className="mood-controls">
      {moods.map((mood) => (
        <button
          key={mood}
          type="button"
          onClick={() => onMoodChange(mood)}
        >
          {mood}
        </button>
      ))}
    </div>
  );
}