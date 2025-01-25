import React from 'react';
import PostList from '../components/Social/PostList';
import CreatePost from '../components/Social/CreatePost';

const SocialPage: React.FC = () => {
    return (
        <div>
            <h1>Social Hub</h1>
            <CreatePost />
            <PostList />
        </div>
    );
};

export default SocialPage;
