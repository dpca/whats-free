import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App
      calendarEvents={[]}
      auth={{
        requesting: false,
        success: true,
        error: null,
      }}
      onBookRoom={() => {}}
      onAuthorizeClick={() => {}}
      selectedGroup={'all'}
      onSelectGroup={() => {}}
      showSidebar
      onToggleSidebar={() => {}}
    />,
    div,
  );
});
