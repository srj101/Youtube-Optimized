import React from 'react';
import {VideoListCSS} from './VideoList.css';
import {Video} from '../Video/Video.component';

export const VideoList = props => (
    <div className="video-container">
        {props.videos.map(video => (
            <Video key={video.id} video={video}/>
        ))}
    </div>
)