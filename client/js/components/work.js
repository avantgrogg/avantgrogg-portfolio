import React from 'react';
import { LargeLeft } from './jobs/largeLeft';
import { LargeRight } from './jobs/largeRight';
import { AllSame } from './jobs/allSame';
import { InfoPanel } from './infoPanel';
import { ModalOverlay } from './modalOverlay';

export const Work = ({state, selectJob, removeJob}) => (
  <div>
  <div className="columns">
    <div className="column is-offset-1 is-10">
      <LargeLeft jobs={state.jobs.slice(0,3)} selectJob={selectJob}/>
      <LargeRight jobs={state.jobs.slice(3,6)} selectJob={selectJob}/>
      <LargeLeft jobs={state.jobs.slice(6,9)} selectJob={selectJob}/>
      <LargeRight jobs={state.jobs.slice(9,12)} selectJob={selectJob}/>
      <AllSame jobs={state.jobs.slice(12,15)} selectJob={selectJob}/>
    </div>
  </div>
  <ModalOverlay selectedJob={state.selectedJob} removeJob={removeJob} />
  <InfoPanel selectedJob={state.selectedJob} />
  </div>
)