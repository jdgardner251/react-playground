import React from 'react';

// class Counter extends React.Component {
//     static defaultProps = {
//         step: 1 
//     };
//     constructor(props){
//         super(props)
//         this.state = { count: 0 }
//     }
   
//       handleButtonClick = () => {
//           const newCount = this.state.count + this.props.step;
//           this.setState({
//               count: newCount
//           })
//       }
//       render() {
//         return (
//           <div>
//             <p>The current count: {this.state.count}</p>
//             <button
//                 onClick={this.handleButtonClick}
//             >
//               Add {this.props.step}
//             </button>
//           </div>
//         )
//       }
// }

// Counter Example in Function Component from Udemy course

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1);
//   }

//   function decrease() {
//     setCount(count - 1);
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={decrease}>-</button>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// }


class Counter extends React.Component {
  static defaultProps = {
    step: 1
  }

  state = {
    count: 0
  }

  render() {
    return (
      <div>
      <p>Current Count is {this.state.count}</p>
      <button onClick={() => this.setState({ count: this.state.count + this.props.step })}>
        Add {this.props.step}
      </button>
    </div>
    )
  
  }
}

export default Counter;