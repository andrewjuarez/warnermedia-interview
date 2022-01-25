import React from 'react';
import './YouTubeFrame.css';

// Pulled this from online: https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
export default ({ embedId }) => (
    <div className='video-responsive'>
        <iframe
            width='853'
            height='480'
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
        />
    </div>
);
