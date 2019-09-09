import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    card: {
        minWidth: 50,
        margin: 50,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function PortfolioCard(props) {
    const classes = useStyles();
    const { avatar, title, subheader } = props;
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="avatar" className={classes.avatar}>
                        {avatar}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={subheader}
            />
            <CardContent>
                <ul>
                    <li>BACHELOR OF ENGINEERING IN INFORMATION TECHNOLOGY</li>
                    <li>CGPA: 8.66</li>
                </ul>
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

PortfolioCard.propTypes = {
    avatar: PropTypes.string,
    title: PropTypes.string,
    subheader: PropTypes.string,
};

export default PortfolioCard;
