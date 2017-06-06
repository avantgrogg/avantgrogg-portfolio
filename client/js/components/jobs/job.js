import React from 'react';
import { getRandomBackground } from '../../utils/cssUtils';

export const Job = ({job, selectJob}) => (
    <div className="tile is-child is-3by2 job">
        <figure onClick={e => selectJob(e, job)} className="image">
            <img src={`/images/${job.image}`}></img>
        </figure>
        <div className={`job-name-panel ${getRandomBackground()}`} onClick={e => selectJob(e, job)}><h2 className="job-name title is-3">{job.name}</h2></div>
    </div>
);