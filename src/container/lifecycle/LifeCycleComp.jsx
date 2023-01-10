import react,{Component} from 'react';
import './LifeCycleComp.css';


class LifeCycleComp extends Component {
    constructor(props){ //constructor digunakan untuk menginisialisasi state
        super(props); //karena LifeCycleComp extend dari Component maka harus mendifine super(props)
        this.state={
            count: 1
        }
        console.log('constructor');
        // this.handleCounterChange=this.handleCounterChange.bind(this);
    }
    static getDerivedStateFromProps(props,state){ //getDerivedStateFromProps digunakan untuk mengupdate state
    console.log('getDerivedStateFromProps');
        return null;
    }
    componentDidMount(){ //componentDidMount digunakan untuk mengakses DOM
        console.log('componentDidMount');
        // setTimeout(() => {
        //     this.setState({
        //         count:'I will disapear'
        //     });
        // }, 5000);
    }
    shouldComponentUpdate(nextProps,nextState){ //shouldComponentUpdate digunakan untuk mengecek apakah state atau props berubah
        console.group('shouldComponentUpdate');
        // console.log("nextProps: ",nextProps)
        console.log("nextState: ",nextState)
        console.groupEnd();
        if(nextState.count >= 4){
            // document.writeln('so many click this button')
            // this.setState({
            //     count:"so many click this button"
            // })
            return false
        }
        return true
        
    }
    getSnapshotBeforeUpdate(prevProps,prevState){ //getSnapshotBeforeUpdate digunakan untuk mengambil data sebelum update
        console.log('getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(prevProps,prevState, snapshot){ //componentDidUpdate
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){ //componentWillUnmount
        console.log('componentWillUnmount');
    }

    counter = ()=>{
        this.setState({
            count: this.state.count +1
        })
    }
    render(){
        console.log('render');
    return(
        <div>
            <h1 className='text-center'>
                {this.state.count}
            </h1>
            <button className='btn-dark' onClick={this.counter}>this.button</button>
        </div>
    );
}
}

export default LifeCycleComp;

