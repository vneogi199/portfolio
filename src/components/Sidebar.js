import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    bigAvatar: {
        margin: 10,
        width: 250,
        height: 250,
    },
});

const SampleFab = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center" alignItems="center" className="py-5">
            <Avatar alt="Vinit Neogi" src="images/photo2.jpg" className={classes.bigAvatar} />
        </Grid>
    );
};

class Sidebar extends React.Component {
    render() {
        return (
            <div className="text-white bg-dark h-100 m-0 shadow position-relative" style={{ zIndex: 100 }}>
                <SampleFab />
                <h1 className="d-flex justify-content-center my-4">Vinit Neogi</h1>
                <div className="d-flex justify-content-center my-4">
                    <Icon className="d-flex align-self-center">mail_outline</Icon>
                    <u>
                        <a href="mailto:vneogi199@gmail.com" className="my-0 mx-2 text-white">
                            vneogi199@gmail.com
                        </a>
                    </u>
                </div>
                <div className="my-3 d-flex justify-content-center text-center">
                    <ul className="list-unstyled ">
                        <li className="my-4">
                            <h4>
                                <span className="d-flex justify-content-center">
                                    <NavLink to="/" className="text-white" activeClassName="is-active">
                                        <Icon className="mx-3">person</Icon>
                                        INTRODUCTION
                                    </NavLink>
                                </span>
                            </h4>
                        </li>
                        <li className="my-4">
                            <h4>
                                <span className="d-flex justify-content-center">
                                    <NavLink to="/projects" className="text-white" activeClassName="is-active">
                                        <Icon className="mx-3">computer</Icon>
                                        PROJECTS
                                    </NavLink>
                                </span>
                            </h4>
                        </li>
                        <li className="my-4">
                            <h4>
                                <span className="d-flex justify-content-center align-items-center">
                                    <NavLink to="/experience" className="text-white" activeClassName="is-active">
                                        <Icon className="mx-3">trending_up</Icon>
                                        <span>EXPERIENCE</span>
                                    </NavLink>
                                </span>
                            </h4>
                        </li>
                        <li className="my-4">
                            <h4>
                                <span className="d-flex justify-content-center">
                                    <NavLink to="/skills" className="text-white" activeClassName="is-active">
                                        <Icon className="mx-3">bar_chart</Icon>
                                        SKILLS
                                    </NavLink>
                                </span>
                            </h4>
                        </li>
                        <li className="my-4">
                            <h4>
                                <span className="d-flex justify-content-center">
                                    <NavLink to="/education" className="text-white" activeClassName="is-active">
                                        <Icon className="mx-3">school</Icon>
                                        EDUCATION
                                    </NavLink>
                                </span>
                            </h4>
                        </li>
                        <li className="my-4">
                            <h4>
                                <span className="d-flex justify-content-center">
                                    <a
                                        href="https://docs.google.com/file/d/1qeere0qy6E1fKrPHsr5siGCYr2r9xdOs/view"
                                        className="text-white"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon className="mx-3">description</Icon>
                                        RESUME
                                    </a>
                                </span>
                            </h4>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
