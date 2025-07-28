import React ,{useEffect} from 'react';
import { Jumbotron,Container,Button} from "reactstrap";
const Home = () =>
{
    useEffect(()=>{document.title="Home || Learn code with nidhi"},[]);
    return (
        <div>
            <Jumbotron className=" text-center " >
               
                <h1 >Learn Code With Nidhi</h1>
                <p>This is developed by Learn Code With Nidhi for learning purpose .Its Backend is on spring boot and frontend on react js</p>
                <Container>
                    <Button color="primary" outline >
                        Start Using
                    </Button>
                </Container>
            </Jumbotron>
        </div>
    )
};
export default Home;