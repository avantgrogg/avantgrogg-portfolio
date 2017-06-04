import React from 'react';
import { Job } from './job';
export const AllSame = ({jobs, selectJob}) => (
    <div className="tile is-ancestor">
        <div className="tile is-parent">
            <Job job={jobs[0]} selectJob={selectJob}/>
            <Job job={jobs[1]} selectJob={selectJob}/>
            <Job job={jobs[2]} selectJob={selectJob}/>
        </div>
    </div>
)