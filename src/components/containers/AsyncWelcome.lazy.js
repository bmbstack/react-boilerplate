import React, { PropTypes } from 'react';

const AsyncWelcome = () =>
    <div>
        Welcome Nix
    </div>;

AsyncWelcome.propTypes = {
    location: PropTypes.object,
};

export default AsyncWelcome;

