import React from "react";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import { ContactDetails } from "../../assets/data";

const ContactPlatforms = () => {
  return (
    <Flex
      gap={3}
      m={"auto"}
      mt={8}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {ContactDetails.map((contact) => {
        const { id, link, icon, colorScheme } = contact;
        return (
          <Link key={id} href={link} isExternal bg="transparent">
            <IconButton
              colorScheme={colorScheme}
              variant="outline"
              aria-label="contact-button"
              size="lg"
              icon={icon}
            />
          </Link>
        );
      })}
    </Flex>
  );
};

export default ContactPlatforms;
