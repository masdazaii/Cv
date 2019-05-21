import React from 'react'
import axios from 'axios'
import {
    Card,
    Container,
    Grid,
    Header,
    Image,
    Label,
    Popup,
    Rating
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
                        <Header as='h1'>Berikut beberapa proyek yang sudah saya selesaikan</Header>
                    </Container>
                </div>
                <Grid columns={2} stackable style={{
                    margin:'2em 10em 0 3em',
                    width:'100%'
                }}>
                    <Grid.Row columns={3} style={{
                        display:'inline-block'
                    }}>
                        { this.state.informasi.map(portofolio =>
                            <Grid.Column>
                                <Popup
                                    trigger={
                                        <Card style={{
                                            paddingTop:'1em',
                                        }}>
                                            <Label as='a' color='green' ribbon>
                                                success
                                            </Label>
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
                                        }
                                    ><Popup.Header>Dosen Rating</Popup.Header>
                                    <Popup.Content>
                                      <Rating icon='star' defaultRating={portofolio.Rating} maxRating={5} />
                                    </Popup.Content>
                                </Popup>
                            </Grid.Column>
                        )}
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Portofolio;