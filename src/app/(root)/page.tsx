import Achievements from "@/components/Achievements";
import Hero from "../../components/Hero";
import { ChakraProvider } from "@chakra-ui/react";
import About from "@/components/About";
export default function Home() {
      return (
            <ChakraProvider>
                  <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#F8F4EC]">
                        <Hero />
                        <About />
                        <Achievements />
                        {/* Projects */}
                        {/* Email */}
                  </main>
            </ChakraProvider>
      );
}
