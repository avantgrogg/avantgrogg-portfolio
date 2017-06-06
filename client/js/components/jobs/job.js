import React from 'react';
import { getRandomBackground } from '../../utils/cssUtils';

export const Job = ({job, selectJob}) => (
    <div className="tile is-child is-3by2 job">
        <figure onClick={e => selectJob(e, job)} className="image">
            <picture>
                <source media="(min-width: 500px)" srcSet={`/images/${job.image}`}></source>
                <source media="(min-width: 0px)" srcSet={`/images/${job.imageSmall}`}></source>
                <img src={`/images/${job.image}`} alt={job.name}></img>
            </picture>
        </figure>
        <div className={`job-name-panel ${getRandomBackground()}`} onClick={e => selectJob(e, job)}><h2 className="job-name title is-3">{job.name}</h2></div>
    </div>
);