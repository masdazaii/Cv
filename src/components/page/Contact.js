import React from 'react'
import { Button,Container, Header } from 'semantic-ui-react'
import Lembar from './form.js'
import { Grid, Segment } from 'semantic-ui-react'
import Acc from './asset/Accordionset.js'

class Contact extends React.Component{
    render(){
        return(
            <div>
            <div className="bungkusContact">
                <Container fluid>  
                    <Header as='h1'>Silahkan berikan pendapat anda mengenai saya</Header>
                    <p>
                        Saran,kritik dan masukan anda akan 
                        sangat membantu saya, Terima kasih
                    </p>
                </Container>
            </div>
                <Grid stackable columns={2} divided style={{
                    margin:'0 10em 0 1em',
                    width:'100%'
                }}>
                    <Grid.Row style={{
                        display:'inline-block'
                    }}>
                        <Grid.Column width={20} >
                            <Segment inherit style={{
                                width:'30em',
                                float:'right'
                            }}>
                            <Lembar ></Lembar>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={20}>
                            <Segment inherit style={{
                                width:'30em',
                                float:'left'
                            }}><Acc/></Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                    <Button.Group>
                        <Button icon="instagram"></Button>
                        <Button icon="twitter"></Button>
                        <Button icon="facebook"></Button>
                        <Button icon="github"></Button>
                        <Button icon="mail"></Button>
                    </Button.Group>
                    </Grid.Column>
                </Grid.Row>
            
            </div>
        )
    }
}

export default Contact;