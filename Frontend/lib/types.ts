export type Course = {
  id: string;
  title: string;
  slug: string;
  description: string;
  targetExam: "JEE" | "NEET" | "NDA" | "CET" | "Foundation";
  programType?: "One Year" | "Two Year" | "Dropper";
  board?: "CBSE" | "ICSE" | "MH Board";
  classLevel?: "8" | "9" | "10" | "11" | "12";
};
