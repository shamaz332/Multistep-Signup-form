import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import {FirstStep} from './FirstStep';
import {SecondStep} from './SecondStep';
import {ThirdStep} from './ThirdStep';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }),
);

function getSteps() {
    return ['First Step', 'Second Step', 'Third Step'];
}

function getStepContent(step: number,handleNext: () => void) {
    switch (step) {
        case 0:
            return <FirstStep handleNext={handleNext} />;
        case 1:
            return <SecondStep handleNext={handleNext} />;
        case 2:
            return <ThirdStep handleNext={handleNext} />;
        default:
            return 'Unknown step';
    }
}
export const Formm = () => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (

      
                <Card >
<CardContent>

                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button variant="contained" color="primary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, handleNext)}
            </Typography>
          </div>
        )}
      </div>
      </CardContent>
    </Card>


    )
}
