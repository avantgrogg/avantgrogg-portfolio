import React from 'react';
import { isEmpty } from 'lodash';
export const ModalOverlay = ({selectedJob, removeJob}) => (
            <div onClick={e => removeJob(e)}className={`modal-overlay ${isEmpty(selectedJob) ? 'hide' : ''}`}></div>
)