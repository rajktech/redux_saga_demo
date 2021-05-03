import React from 'react';
import {connect} from 'react-redux';

class Comp2 extends React.Component {
    render() {
        return(
            <div>
                {this.props.age} <br />   
                <input type="button" value="Add" onClick={this.props.onAgeUp} />    
                <input type="button" value="Sub" onClick={this.props.onAgedown} />  

                <br /><br />
                <img src={this.props.dogimg} width="300" /> <br />
                <input type="button" onClick={this.props.changeimage} value="Change DOG Image" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ...state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
        onAgedown: () => dispatch({type: 'AGE_DOWN', value: 2}),
        changeimage: () => dispatch({type: 'CHANGE_DOGIMG'})
    };
  };

/*const mapDispatchToProps = dispatch => {
    return {
        onAgeUp: () => dispatch(ageup())
    };
};*/

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Comp2);