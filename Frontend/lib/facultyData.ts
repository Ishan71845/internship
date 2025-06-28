export type Faculty = {
  id: string;
  name: string;
  subject: string;
  experience: string;
  image: string;
};

export const facultyData: Faculty[] = [
  {
    id: "1",
    name: "Dr. Arjun Mehta",
    subject: "Physics",
    experience: "12 years",
    image: "/faculty/faculty1.png",
  },
  {
    id: "2",
    name: "Prof. Kavita Sharma",
    subject: "Chemistry",
    experience: "10 years",
    image: "/faculty/faculty2.png",
  },
  {
    id: "3",
    name: "Mr. Rakesh Jain",
    subject: "Mathematics",
    experience: "15 years",
    image: "/faculty/faculty1.png",
  },
  {
    id: "4",
    name: "Dr. Priya Singh",
    subject: "Biology",
    experience: "9 years",
    image: "/faculty/faculty2.png",
  },
  {
    id: "5",
    name: "Ms. Sunita Nair",
    subject: "Social Studies",
    experience: "8 years",
    image: "/faculty/faculty2.png",
  },
  {
    id: "6",
    name: "Mr. Aditya Verma",
    subject: "English",
    experience: "7 years",
    image: "/faculty/faculty1.png",
  },
];
