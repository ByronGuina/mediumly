import React from 'react';
import { Flex } from '@chakra-ui/core';

export const Layout = ({ children }) => (
    <Flex as='main' flexDirection='column' maxW='38rem' m='3rem auto'>
        {children}
    </Flex>
);
