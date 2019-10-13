import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/core';

export const Post = ({ post }) => (
    <Flex flexDirection='column' mb={10} mt={5}>
        <Heading as='h2' size='md'>
            <a href={post.link} target='_blank' rel='noopener noreferrer'>
                {post.title}
            </a>
        </Heading>
        <Text>{new Date(post.pubDate).toLocaleDateString()}</Text>
        <Text>{post.author}</Text>
        {/* <article dangerouslySetInnerHTML={{ __html: post.description }}></article> */}
    </Flex>
);
