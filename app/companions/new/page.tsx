import CompanionsForm from "@/components/CompanionsForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return (
    <main className=" items-center min-lg:1/3 min-md:2/3  justify-center ">
      <article className="w-full g-4 flex flex-col ">
        <h1>Companion Builder</h1>

        <CompanionsForm />
      </article>
    </main>
  );
};

export default NewCompanion;
