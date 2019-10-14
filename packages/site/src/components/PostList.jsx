import React from 'react';
import { motion } from 'framer-motion';
import { Heading } from '@chakra-ui/core';

import { Post } from './Post';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const PostList = ({ posts }) => (
    <motion.div variants={container} initial='hidden' animate='show'>
        {posts.length > 0 ? (
            posts.map((f) => <Post key={f.guid} post={f}></Post>)
        ) : (
            <Heading size='s'>Search for a Medium username or publication to see their posts.</Heading>
        )}
    </motion.div>
);
