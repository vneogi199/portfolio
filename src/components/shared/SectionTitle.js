import React from 'react';
import PropTypes from 'prop-types';

class SectionTitle extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <div className="bg-info shadow d-flex align-items-center px-5" style={{ height: `${75}px` }}>
                {title}
            </div>
        );
    }
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionTitle;
