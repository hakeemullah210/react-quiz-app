import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const action = (
  <Button color="secondary" size="medium">
    lorem ipsum dolorem
  </Button>
);

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
});

function LongTextSnackbar(props) {
  const { classes,correctQue, timer } = this.props;

  

  return (
    <div>
      <SnackbarContent className={classes.snackbar} message="QUIZ RESULT" action={'action'} />
      <SnackbarContent
        className={classes.snackbar}
        message={
          'Time taken'
        }
        action={{timer}}
      />
      <SnackbarContent
        className={classes.snackbar}
        message="Correct Answer"
        action={{correctQue}}
      />
      <SnackbarContent
        className={classes.snackbar}
        message={
          'Grade'
        }
        action={'ll'}
      />
    </div>
  );
}

LongTextSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LongTextSnackbar);
