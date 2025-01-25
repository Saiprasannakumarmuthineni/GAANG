import React, { useState } from 'react';
import axios from 'axios';

const CreatePost: React.FC = () => {
    const [content, setContent] = useState<string>('');
    const [mediaUrl, setMediaUrl] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('/api/social/posts', { content, mediaUrl })
            .then(response => console.log('Post created:', response.data))
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="What's on your mind?"
            />
            <input
                type="text"
                value={mediaUrl}
                onChange={e => setMediaUrl(e.target.value)}
                placeholder="Image/Video URL"
            />
            <button type="submit">Post</button>
        </form>
    );
};

export default CreatePost;
