import React from 'react';
import { createDevTools } from 'redux-devtools';
import DiffMonitor from 'redux-devtools-diff-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q' >
    <DiffMonitor theme='tomorrow' />
  </DockMonitor>
);

export default DevTools;
