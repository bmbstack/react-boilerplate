import React from 'react';

export default ({ params: { content }, location: { query } }) =>
    <div>Yes { content } { JSON.stringify(query) }</div>;
