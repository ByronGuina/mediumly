import React from 'react';
import { Post } from './Post';

import { motion } from 'framer-motion';

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
        {posts.map((f) => (
            <Post key={f.guid} post={f}></Post>
        ))}
    </motion.div>
);
