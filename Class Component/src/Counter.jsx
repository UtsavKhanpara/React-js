import { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state={
            count:0,
            users:[
                {name:"John",age:25},
                {name:"Jane",age:30},
                {name:"Bob",age:35}
            ],
            color:["red","green","blue","purple","pink","black","orange"]
        }
    }

    increment=()=>{
        this.setState({count: this.state.count + 1});
    }
    decrement=()=>{
        this.setState({count: this.state.count - 1});
    }
    multification=()=>{
        this.setState({count: this.state.count * 2});
    }
    division=()=>{
        this.setState({count: this.state.count / 2});
    }
    reset=()=>{
        this.setState({count: 0});
    }
    componentDidMount(){
        console.log("Component is Running");
    }
    componentDidUpdate(){
        console.log("Component is Updating");
    }


    render() {
      return (
        <div align="center">
          <h1>Counter App</h1>
          <h2>Count:{this.state.count}</h2>
          <button onClick={this.increment}>Plus</button>
          <button onClick={this.decrement}>Minus</button>
          <button onClick={this.multification}>Multification</button>
          <button onClick={this.division}>Divison</button>
          <button onClick={this.reset}>Reset</button>

          <h3>USers</h3>
          <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
            {
            this.state.users.map((u,i)=>{
                return(
                    <>
                        <tr key={i}>
                            <td>{u.name}</td>
                            <td>{u.age}</td>
                        </tr>
                    </>
                )
            })
          }
            </tbody>
          </table>

          <h1>Color:</h1>
          {
            this.state.color.map((c,i)=>{
                return(
                    <>
                        <h2 key={i} style={{color:c}}>{c}</h2>
                    </>
                )
            })
          }
        </div>

      )
    }
}
export default Counter;