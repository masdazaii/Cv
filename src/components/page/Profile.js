import React from 'react'
import { Image } from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import Experience from './asset/Accordion.js'
import gambar from './asset/wa.jpg'

const panes = [
    {
      menuItem: { key: 'Skill', icon: 'laptop', content: 'Skill' },
      render: () => <Tab.Pane>
                        <p  style={{
                            fontWeight:'bold',
                        }}>Mysql</p>
                        <Progress percent={85} size='small' color='green' active />
                        <p style={{
                            fontWeight:'bold',
                        }}>Laravel</p>
                        <Progress percent={80} size='small' color='green' active/>
                        <p style={{
                            fontWeight:'bold',
                        }}>React</p>
                        <Progress percent={60} size='small' color='orange' active/>
                        <p style={{
                            fontWeight:'bold',
                        }}>Mobile Development</p>
                        <Progress percent={73} size='small' color='yellow' active/>
                        <p style={{
                            fontWeight:'bold',
                        }}>C++</p>
                        <Progress percent={67} size='small' color='yellow' active/>
                    </Tab.Pane>,
    },
    {menuItem: { key: 'Education', icon: 'home', content: 'Educattion' },
      render: () => <Tab.Pane>
                        <List>
                            <List.Item>
                                <List.Icon name='book' />
                                <List.Content>
                                    <List.Header as='a'>Ilmu Komputer dan Sistem Informasi,Sekolah Vokasi,Universitas Gadjah Mada</List.Header>
                                    <List.Description>
                                        2017 - Sekarang
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='book' />
                                <List.Content>
                                    <List.Header as='a'>SMA N AJIBARANG</List.Header>
                                    <List.Description>
                                        2014 - 2017
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='book' />
                                <List.Content>
                                    <List.Header as='a'>Mts Ma'arif Nu 1 Cilongok</List.Header>
                                    <List.Description>
                                        2011 - 2014
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='book' />
                                <List.Content>
                                    <List.Header as='a'>Mi Ma'arif Nu 2 Langggongsari</List.Header>
                                    <List.Description>2005 - 2011</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Tab.Pane>,
    },
    {menuItem: { key: 'Experience', icon: 'time', content: 'Experience' },
      render: () => <Tab.Pane><Experience/></Tab.Pane>,
    },
  ]

class Profile extends React.Component{
    render(){
        return(
            <div>
                
                <Image src={gambar} size='small' rounded 
                className = "profilImage" style={{
                    marginLeft:"auto",
                    marginRight:"auto"
                }}/>
                
                <div>
                <Tab panes={panes} style={{
                    width:'50em',
                    marginLeft:"auto",
                    marginRight:"auto",
                    marginTop:"4em"
                }}/>
                </div>
            </div>
        )
    }
}

export default Profile;