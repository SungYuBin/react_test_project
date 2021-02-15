import React from 'react';
import PropTypes from 'prop-types' //얘를 추가해줍니다. include 
// const MyComponent=()=>{
//     return <div>이런식으로 해도 괜찮던가</div>;
// };

const MyComponent = props=>{
    return (
        <div>
        세상에 매개변수를 넘길수있다요!!!{props.name}
        <br/>
        이건 자식값인데{props.children}
        <br/>
        이런게 디게 많아 {props.test}
        <br/>
        이런건 숫자란다 {props.num}
        <br/>
        <button  style={{color:'blue'}} onClick={} >역시 이건가...</button>
        </div>
    
        );
};


MyComponent.defaultProps={name :'끼야홋'}; //넘어올값의 초기값을 지정해 줍니다.

MyComponent.prototype =
{
    name : PropTypes.string, //string이라는 명시
    num : PropTypes.number.isRequired //숫자라는 명시
};
export default MyComponent;