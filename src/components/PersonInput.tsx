import React from "react";
import axios from "axios";

type IProps = {

};
interface MyState {
  name: any

}

export default class PersonInput extends React.Component<IProps, MyState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = (event: any) =>{
      this.setState({name: event.target.value})
  }


handleSubmit = (event: any) => {
    event.preventDefault()
    const user ={
        name: this.state.name,
    }
    axios.post(`https://jsonplaceholder.typicode.com/users`, {user} )
    .then(res =>{
        console.log(res)
        console.log(res.data)
    })
}

  render() {
    return (
     <form onSubmit={this.handleSubmit}>
         <label>
             Person Name:
             <input type="text" name="name" onChange={this.handleChange}/>
         </label>
         <button type="submit"> Submit</button>
     </form>
    );
  }
}
