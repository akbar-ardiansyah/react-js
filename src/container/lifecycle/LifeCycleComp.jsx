import react,{Component} from 'react';
import './LifeCycleComp.css';


class LifeCycleComp extends Component {
    constructor(props){ //constructor digunakan untuk menginisialisasi state
        super(props);
        this.state={
            count:1
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
        setTimeout(() => {
            this.setState({
                count:2
            });
        }, 5000);
    }
    shouldComponentUpdate(nextProps,nextState){ //shouldComponentUpdate digunakan untuk mengecek apakah state atau props berubah
        console.log('shouldComponentUpdate');
        return true;
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

    render(){
        console.log('render');
    return(
        <button className='btn-dark'>test button {this.state.count}</button>
    );
}
}

export default LifeCycleComp;

