import React from 'react';
import { isEmpty, get } from 'lodash';
export const InfoPanel = ({selectedJob, removeJob}) => (
            <div className={`info-panel card ${isEmpty(selectedJob) ? 'hide' : ''}`}>
                <div className="card-image">
                    <a onClick={e => removeJob(e)} className="delete"></a>
                    <figure className="image">
                        <img src={`/images/${selectedJob.image}`}></img>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p className="selected-job-name title">{selectedJob.name}</p>
                        <span className="subtitle" dangerouslySetInnerHTML={{__html: selectedJob.long}}></span>
                    </div>
                </div>
            </div>
)