import { Heading } from "@chakra-ui/react";

const About = () => {
      return (
            <section className="space-y-8">
                  <Heading as="h2" size="lg">
                        About Me
                  </Heading>
                  <p className="text-gray-700">
                        Hi there! I'm Arka, a passionate full-stack developer with a background in
                        computer science and a knack for problem-solving. I'm driven by a desire to
                        build amazing software that brings value to people's lives. I specialize in
                        JavaScript, with expertise in React, Node.js, and Next.js. I'm also
                        proficient in microservices architecture and enjoy exploring the latest
                        technologies to stay up-to-date with the latest trends in the industry.
                  </p>
                  <p className="text-gray-700">
                        When I'm not coding, I enjoy hiking, trying out new recipes in the kitchen,
                        and reading books. I'm always eager to learn and grow, and I'm excited to
                        work with you to create something amazing.
                  </p>
            </section>
      );
};

export default About;
