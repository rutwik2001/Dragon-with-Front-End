import React, { Component } from "react";
import './App.css';
import web3 from './web3';
import dragon from './dragon';

class App extends Component {

    state = {
      index: 0,
      air: 0,
      water: 0,
      earth: 0,
      fire: 0,
      light: 0,
      dark: 0,
      type: '',
      value: '',
      indexOfDragon: 0,
      Dragon: [],
      index1: 0,
      index2: 0,
      myindexes: [],
      message: ''
    };

    async componentDidMount() {
      const index = await dragon.methods.index().call();

      this.setState({index});
    };

    onSubmit = async (event) => {
      event.preventDefault();
      const accounts = await web3.eth.getAccounts();

      this.setState({message: 'Wait for the transaction to complete...'})

      await dragon.methods.createDragon(this.state.air, this.state.water, this.state.earth, this.state.fire, this.state.light, this.state.dark, this.state.type, this.state.value ).send({ from: accounts[0] });

      this.setState({message: 'Successfully dragon created!'})
    }

    seeDragon = async (event) =>{
      event.preventDefault();

      const Dragon = await dragon.methods._Dragon(this.state.indexOfDragon).call();

      this.setState({Dragon})
    }

    trainDragon = async (event) =>{
      event.preventDefault();

      
      const accounts = await web3.eth.getAccounts();

      this.setState({message: 'Wait for the transaction to complete...'})

      await dragon.methods.train(this.state.indexOfDragon).send({from: accounts[0]});

      this.setState({message: 'Training completed!'})

    }

    breedDragon = async (event) => {
      event.preventDefault();
      const accounts = await web3.eth.getAccounts();

      this.setState({message: 'Wait for the transaction to complete...'})

      await dragon.methods.breed(this.state.index1, this.state.index2).send({from: accounts[0]})

      this.setState({message: 'Breeding completed!'})
    }

    buyDragon = async (event) =>{
      event.preventDefault();
      const accounts = await web3.eth.getAccounts();

      this.setState({message: 'Wait for the transaction to complete...'})

      await dragon.methods.buyDragon(this.state.indexOfDragon).send({from: accounts[0], value: this.state.value})

      this.setState({message: 'Transaction completed!'})
    }

    onClick = async () => {

      const accounts = await web3.eth.getAccounts();


      const myindexes = await dragon.methods.MyDragonIndexes(accounts[0]).call();
      this.setState({myindexes})
      
    }
    
  
  render(){
  
  return (
    <div>
      <h2>Dragon Contract</h2>
    <p>The index of the current dragon is {this.state.index - 1}</p>

     <hr/>

      <form onSubmit={this.onSubmit}>
        <h4>Create Dragon</h4>
        <label>Air power</label>
        <input value={this.state.air} onChange={event => this.setState({air: event.target.value})}/>
        <br />
        <label>Water power</label>
        <input value={this.state.water} onChange={event => this.setState({water: event.target.value})}/>
        <br />
        <label>Earth power</label>
        <input value={this.state.earth} onChange={event => this.setState({earth: event.target.value})}/>
        <br />
        <label>Fire power</label>
        <input value={this.state.fire} onChange={event => this.setState({fire: event.target.value})}/>
        <br />
        <label>Light power</label>
        <input value={this.state.light} onChange={event => this.setState({light: event.target.value})}/>
        <br />
        <label>Dark power</label>
        <input value={this.state.dark} onChange={event => this.setState({dark: event.target.value})}/>
        <br />
        <label>Type of Dragon</label>
        <input value={this.state.type} onChange={event => this.setState({type: event.target.value})}/>
        <br />
        <label>Value</label>
        <input value={this.state.value} onChange={event => this.setState({value: event.target.value})}/>
        <br />
        <button>Enter</button>
        </form>

        <hr/>

        <form onSubmit={this.seeDragon}>
          <h4>See the Dragon</h4>
          <label>Index of Dragon</label>
        <input value={this.state.indexOfDragon} onChange={event => this.setState({indexOfDragon: event.target.value})}/>
        <button>Enter</button>
        <p>air: {this.state.Dragon.air}</p>
        <p>water: {this.state.Dragon.water}</p>
        <p>earth: {this.state.Dragon.earth}</p>
        <p>fire: {this.state.Dragon.fire}</p>
        <p>light: {this.state.Dragon.light}</p>
        <p>dark: {this.state.Dragon.dark}</p>
        <p>Type of Dragon: {this.state.Dragon.typeOfDragon}</p>
        <p>value: {this.state.Dragon.value}</p>
        
        </form>

        <hr/>

        

        

        <form onSubmit={this.trainDragon}>
          <h4>Train the Dragon</h4>
          <label>Index of Dragon</label>
        <input value={this.state.indexOfDragon} onChange={event => this.setState({indexOfDragon: event.target.value})}/>
        <button>Enter</button>
        </form>

        <hr/>

        <form onSubmit={this.breedDragon}>
          <h4>Breed Dragons</h4>
          <label>Index of Dragon 1</label>
        <input value={this.state.index1} onChange={event => this.setState({index1: event.target.value})}/>
        <label>Index of Dragon 2</label>
        <input value={this.state.index2} onChange={event => this.setState({index2: event.target.value})}/>
        <button>Enter</button>
        </form>
        <hr/>
        <form onSubmit={this.buyDragon}>
          <h4>Buy a Dragon</h4>
          <label>Index of Dragon</label>
        <input value={this.state.indexOfDragon} onChange={event => this.setState({indexOfDragon: event.target.value})}/>
        <label>Value of Dragon</label>
        <input value={this.state.value} onChange={event => this.setState({value: event.target.value})}/>
        <button>Enter</button>
        </form>

        <hr/>

        <h4>See my dragon indexes</h4>
        <button onClick={this.onClick}>My Dragons</button>
        
        <p>Indexes: {this.state.myindexes}</p>
        <hr/>

        <h1>{this.state.message}</h1>



    </div>
  );
  }
}

export default App;
