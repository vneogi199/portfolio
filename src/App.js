import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="w-100 h-100 m-0 p-0">
                    <div className="row w-100 h-100">
                        <div className="col-3 m-0 p-0">
                            <Sidebar />
                        </div>
                        <div className="col-9 m-0 p-0 bg-secondary">
                            <MainContent />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
