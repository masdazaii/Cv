import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import {
    Button,
    Grid,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
  } from 'semantic-ui-react'

class Contact extends React.Component{
    render(){
        return(
            <div className="bungkusContact">
                <Container fluid>  
                    <Header as='h1'>Silahkan berikan pendapat anda mengenai saya</Header>
                    <p>
                        Saran,kritik dan masukan anda akan 
                        sangat membantu saya agar menjadi lebih baik lagi untuk kedepanya, Terima kasih
                    </p>
                </Container>
                <Container>
                    <Grid columns={2} stackable>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                            <Button icon labelPosition='left'>
                                <Icon name='instagram' />
                                    Masdazai_
                            </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button icon labelPosition='left'>
                                    <Icon name='facebook' />
                                        Anggit Prayoga
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button icon labelPosition='left'>
                                    <Icon name='twitter' />
                                        Masdazai_
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Column width={10}>
                            <Button icon labelPosition='left'>
                                <Icon name='mail' />
                                    Anggitp07@gmail.com
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Button icon labelPosition='left'>
                                <Icon name='github' />
                                    masdazaii
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Contact;