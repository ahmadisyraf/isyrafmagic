import { useMediaQuery } from "@chakra-ui/react";

const useBreakPoints = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: true, // return false on the server, and re-evaluate on the client side
  });

  return {
    isMobile: isMobile,
  }
};

export default useBreakPoints;
