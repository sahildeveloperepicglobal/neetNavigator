import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "600",
      "700",
      "800",
      "900",
    ],
    subsets: ["latin", "devanagari", "latin-ext"],
  });

  export default poppins