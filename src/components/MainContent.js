import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Projects = lazy(() => import('./routes/projects/Projects'));
const Education = lazy(() => import('./routes/education/Education'));
const Todo = lazy(() => import('./routes/projects/routes/Todo'));

class MainContent extends React.Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" render={() => <div>Home</div>} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/education" component={Education} />
                </Switch>
            </Suspense>
        );
    }
}

export default MainContent;
