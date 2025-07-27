export type Course = {
  slug: string;
  title: string;
  price?: String;
  discountedPrice?: String;
  description: string;
  longDescription: string;
  image: string;
  targetExam: string;
  programType?: string;
  board?: string;
  classLevel?: string;
};
