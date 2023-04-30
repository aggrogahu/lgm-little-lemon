import { Box, HStack, Button, Image } from "@chakra-ui/react";

const navs = [
    {label: "Home"},
    {label: "About"},
    {label: "Menu"},
    {label: "Reservations"},
    {label: "Order Online"},
    {label: "Login"}
]

function Nav(){
    return(
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#ffffff"
            >
      <Box color="black" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Image src="../img/Logo.svg" />
          <nav>
            <HStack spacing={4}>
                {navs.map(navLinks => {
                    return <Button variant="nav"> {navLinks.label}</Button>
                })}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
    );
}

export default Nav;