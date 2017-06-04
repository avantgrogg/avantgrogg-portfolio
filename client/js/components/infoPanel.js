import React from 'react';
import { isEmpty, get } from 'lodash';
export const InfoPanel = ({selectedJob}) => (
            <div className={`info-panel ${isEmpty(selectedJob) ? 'hide' : ''}`}>
                <figure className="image">
                    <img src={`/images/${selectedJob.image}`}></img>
                </figure>
                <h1>{selectedJob.name}</h1>
                {get(selectedJob, 'tags', []).map((tag, idx) => <span className="tag" key={idx}>{tag}</span>)}
                <p>{selectedJob.long}</p>
            </div>
)