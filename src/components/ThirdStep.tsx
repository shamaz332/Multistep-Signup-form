import React from 'react';
import { Formik, Form, Field } from 'formik';
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import * as Yup from 'yup';


interface FormThirdStep {
    password: String | null;
    confirmPass: String | null;

}

const initialValues: FormThirdStep = {
    password: "",
    confirmPass: "",

}

interface Props {
    handleNext: () => void;
}
const validateSchema = Yup.object({
    password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  
    confirmPass: Yup.string()
     .oneOf([Yup.ref('password')], 'Passwords must match')
});
export const ThirdStep: React.FC<Props> = ({ handleNext }) => {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    console.log(values)
                    handleNext()
                }}
            >
                {({ errors, touched, isValid }) => (
                    <Form>
                        <Grid container>
                            <Grid item xs={12} sm={6}>


                                <Field
                                    as={TextField}
                                    variant="filled"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    error={errors.password && touched.password}
                                    helperText={touched.password && errors.password}


                                />
                            </Grid>
                            <br /><br /><br /><br />
                            <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    variant="filled"
                                    label="ConfirmPass"
                                    name="confirmPass"
                                    type="password"
                                    error={errors.confirmPass && touched.confirmPass}
                                    helperText={touched.confirmPass && errors.confirmPass}

                                />
                            </Grid>

                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={ !isValid}
                        >
                            Next
          </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};