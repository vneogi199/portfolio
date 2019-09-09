import React from 'react';
import PortfolioCard from '../../shared/PortfolioCard';
import SectionTitle from '../../shared/SectionTitle';

class Education extends React.Component {
    render() {
        return (
            <div>
                <SectionTitle title="Education" />
                <PortfolioCard avatar="U" title="UNIVERSITY OF MUMBAI" subheader="2018" />
                <PortfolioCard avatar="C" title="H.S.C" subheader="2016" />
                <PortfolioCard avatar="S" title="S.S.C" subheader="2014" />
            </div>
        );
    }
}

export default Education;
