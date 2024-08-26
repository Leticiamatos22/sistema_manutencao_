import MachineForm from "@/app/components/MachineForm";
import { Aside } from "../components/aside";
import { Footer } from "../components/footer";

export default function MachinePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-1 overflow-hidden">
        <Aside />
        <main className="flex-1 flex flex-col p-6 overflow-y-auto">
          <MachineForm />
        </main>
      </div>
      <Footer className="bg-gray-800 text-white" />
    </div>
  );
}
