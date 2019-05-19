import React from 'react'
import {Container} from 'semantic-ui-react'


class Home extends React.Component{
    render(){
        return(
            <div>
                
                <Container fluid className="Bg">
                    <Container textAlign='left'>
                        <div>
                            <p 
                                style={{
                                    fontSize: '3em',
                                    fontWeight: 'bold',
                                    marginBottom: 0,
                                    fontFamily:'montserrat',
                                    marginLeft:'10%',
                                    marginTop:  '5em',}}>Anggit Prayoga</p>
                            <p
                                style={{
                                    fontSize: '1em',
                                    marginBottom: 0,
                                    fontWeight: 'bold',
                                    marginLeft:'10%',}}>Database Engineer,System Documentation</p>
                            <div style={{
                                textAlign:'justify',
                            }}><p
                                style={{
                                    fontSize: '1.em',
                                    marginBottom: 0,
                                    marginLeft:'10%',
                                    marginTop:'0.5em',
                                }}>Seorang database enthusiast yang mempunyai keahlian<br/>
                                dalam hal perancangan,pembuatan dan pengelolaan database.<br/>
                                Selain itu kemampuan saya dalam menganalisis juga meningkatkan<br/>
                                ketelitian dalam menyusun laporan pra/pasca sehingga saya pantas <br/>
                                ditempatkan dalam tim database Engineer maupun tim System<br/> Documentation</p>
                            </div>
                        </div>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Home;