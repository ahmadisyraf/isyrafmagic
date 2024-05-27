import { useMediaQuery } from "@chakra-ui/react";

const useBreakPoints = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: true,
  });

  const [isTablet] = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)",
    {
      ssr: true,
      fallback: true,
    }
  );

  return {
    isMobile: isMobile,
    isTablet: isTablet,
  };
};

export default useBreakPoints;
