import { NicknameChecker } from "@/components/features/NicknameChecker";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <NicknameChecker />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
