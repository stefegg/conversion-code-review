import { Converter } from "./_components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-3xl bg-accentDark w-full h-20 flex items-center justify-center text-text">
        Flexion School District
      </h1>
      <h2 className="text-xl w-full flex items-center justify-center bg-secondary h-10">
        Science Dept. Conversion Unit Worksheet Grader
      </h2>
      <div
        className={`bg-primaryDark w-full h-[calc(100vh-7.5rem)] flex justify-center pt-2`}
      >
        <Converter />
      </div>
    </main>
  );
}
