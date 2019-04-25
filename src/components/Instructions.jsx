import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
});

function LongTextSnackbar(props) {
  const { classes } = props;

  return (
    <div style={{display:'inline-block'}}>
      <SnackbarContent className={classes.snackbar} message="Quiz Instructions:" style={{fontSize:'25px'}}  />
      <SnackbarContent
        className={classes.snackbar}
        message={
          'There will be 10 multiple choice question in the test.'
        }
      />
      <SnackbarContent
        className={classes.snackbar}
        message="At the End of the Test you can see your Test score and Rating."
        // action={action}
      />
      <SnackbarContent
        className={classes.snackbar}
        message={
          'Practice this test at least 3 times if you want to secure High Marks.'
        }
        // action={action}
      />
    </div>
  );
}

LongTextSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LongTextSnackbar);
