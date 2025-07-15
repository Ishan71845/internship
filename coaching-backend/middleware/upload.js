import multer from "multer";

const storage = multer.memoryStorage(); // stores file in memory buffer
export const upload = multer({ storage });
