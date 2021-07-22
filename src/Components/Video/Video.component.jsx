import React from 'react';
import { VideoCSS } from './Video.css';

export const Video = props => (

        <div className="single-video-item">
            <div className="single-video-thumbnail">
                    <img src={props.video.thumbnail} alt="" />
                    </div>
                    <div className="video-title">
                        <img src={props.video.channel_logo} alt="" />
                        <h3>{props.video.title}</h3>
                    </div>
                    <p className="channel-name">{ props.video.metas.channel_name }
                    {props.video.metas.varified
                        ? <i className="fa fa-check"></i>
                        : ""
                    }
                    </p>
                <p className="chdesc"><span className="viewcount">{ props.video.metas.views }</span> Views . <span className="agotm">{ props.video.metas.months }</span> Months Ago</p>
        </div>
        
        
)
 
