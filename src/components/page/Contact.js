import React from 'react'
import { Button,Container, Header,Popup } from 'semantic-ui-react'
import Lembar from './form.js'
import { Grid, Segment } from 'semantic-ui-react'
import Acc from './asset/Accordionset.js'

const style = {
    borderRadius: 0,
    opacity: 0.7,
  }

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
                        <Popup
                            trigger={<Button icon="instagram"/>}
                            content='Masdazaii'
                            style={style}
                            inverted
                            />
                            <Popup
                            trigger={<Button icon="twitter"/>}
                            content='Masdazai'
                            style={style}
                            inverted
                            />
                                <Popup
                            trigger={<Button icon="facebook"/>}
                            content='Anggit Prayoga'
                            style={style}
                            inverted
                            />
                            <Popup
                            trigger={<Button icon="github"/>}
                            content='Masdazaii'
                            style={style}
                            inverted
                            />
                            <Popup
                            trigger={<Button icon="mail"/>}
                            content='Anggitp07@gmail.com'
                            style={style}
                            inverted
                            />
                    </Button.Group>
                    </Grid.Column>
                </Grid.Row>
            
            </div>
        )
    }
}

export default Contact;