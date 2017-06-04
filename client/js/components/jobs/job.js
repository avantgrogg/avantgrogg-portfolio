import React from 'react';
export const Job = ({job, selectJob}) => (
    <div className="tile is-child box">
        <figure className="image">
            <img onClick={e => selectJob(e, job)} src={`/images/${job.image}`}></img>
        </figure>
        <div className="job-name">{job.name}</div>
    </div>
);