import { Pet } from "./entities/pet/Pet";
import { MoodControls } from "./features/pet-mood/MoodControls";
import { usePetMood } from "./features/pet-mood/usePetMood";

export default function App() {
  const { mood, changeMood } = usePetMood();

  return (
    <main className="app">
      <Pet mood={mood} />

      <MoodControls onMoodChange={changeMood} />
    </main>
  );
}