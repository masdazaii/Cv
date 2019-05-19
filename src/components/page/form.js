import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import { Grid,Image } from 'semantic-ui-react'

class form extends React.Component{
    render(){
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                    <Form>
                        <Form.Group widths='equal'>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input}
                                    label='First name'
                                    placeholder='First name'
                                />
                                <Form.Field
                                    id='form-input-control-last-name'
                                    control={Input}
                                    label='Last name'
                                    placeholder='Last name'
                                />
                                </Form.Group>
                                <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Opinion'
                                placeholder='Opinion'
                                />
                                <Form.Field
                                id='form-button-control-public'
                                control={Button}
                                content='Confirm'
                                label='Label with htmlFor'
                                />
                            </Form>    
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default form