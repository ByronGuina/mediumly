import React from 'react';
import { Flex, Heading, Text, Link } from '@chakra-ui/core';
import { motion } from 'framer-motion';

const item = {
    hidden: { y: -15, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const Post = ({ post }) => (
    <motion.div variants={item}>
        <Flex flexDirection='column' mb={10} mt={5}>
            <Link href={post.link} isExternal>
                <Heading as='h2' size='md'>
                    {post.title}
                </Heading>
                <Text>{new Date(post.pubDate).toLocaleDateString()}</Text>
                <Text mb={5}>{post.author}</Text>
                <Text dangerouslySetInnerHTML={{ __html: post.description }}></Text>
            </Link>
        </Flex>
    </motion.div>
);
