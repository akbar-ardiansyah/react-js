import React,{Component} from "react";
import LifeCycleComp from "../lifecycle/LifeCycleComp";

class Home extends Component{
    state={
        showComponent: true
    }
    // componentDidMount pencopotan component
    componentDidMount(){ 
        // setTimeout(()=>{
        //     this.setState({
        //      showComponent: false
        //     })
        //     // window.location.href="https://google.com";
        // }, 15000)
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="position-absolute top-50 start-50 translate-middle">
                {
                    // short-hand  react
                    this.state.showComponent 
                    ? 
                    <LifeCycleComp/> 
                    : null
                }
                </div>   
                </div>
            </div>
        )
    }
    
}

export default Home;