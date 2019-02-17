
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux';

class mycomponents extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log('componentDidMount')
    }

    render(){
        return(
            <div>
                <h1>
                    SUM: {this.props.sum}
                </h1>
                <span onClick={this.props.add}>
                    add |
                </span>
                <span>
                    increase
                </span>
            </div>
        )
    }
}
//需要渲染什么数据
function mapStateToProps(state) {
    return {
        sum: state.num.sum
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      add: () => {
        dispatch({
          type: 'add'
        });
      }
    };
  }
const mycomponent = connect(mapStateToProps, mapDispatchToProps)(mycomponents)

export default mycomponent;