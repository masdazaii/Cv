import React from 'react'
import axios from 'axios'
import {
    Card,
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
  } from 'semantic-ui-react'

class Portofolio extends React.Component{
    state = {
        informasi: []
      }
    
      componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/masdazaii/APIp/portofolio`)
          .then(res => {
            const informasi = res.data;
            this.setState({ informasi });
          })
      }
      render() {
        return (
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
                <Grid columns={2} stackable style={{
                    margin:'0 10em 0 1em',
                    width:'100%'
                }}>
                    <Grid.Row columns={3} style={{
                        display:'inline-block'
                    }}>
                        { this.state.informasi.map(portofolio =>
                            <Grid.Column>
                                <Card>
                                    <Image src={portofolio.Thumbnail} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>
                                            {portofolio.Judul}
                                        </Card.Header>
                                        <Card.Description>
                                            {portofolio.deskripsi}
                                        </Card.Description>
                                    </Card.Content>
                                </Card> 
                            </Grid.Column>
                        )}
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Portofolio;