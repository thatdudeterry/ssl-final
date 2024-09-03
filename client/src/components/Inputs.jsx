// import React from "react";
import styled from "styled-components";

const Inputs = (props) => {
	return (
		<Input
			id={props.id}
			type={props.inputType}
			name={props.name}
			value={props.value}
			onChange={props.onchange}
		/>
	);
};

export default Inputs;

const Input = styled.input`
display: 'inline-block',
outline: 'none',
cursor: 'pointer',
borderRadius: '3px',
textDecoration: 'none',
minWidth: 100px,
maxWidth: 200px,
textAlign: 'center',
boxShadow: 0px 3px 1px -2px rgb(0 0 0/20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 8%),
transition: boxShadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
:hover {
background: rgb(98, 0, 238),
boxShadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5pk 0px rgb(0 0 0 / 14%), 0px 1px, 10px 0px rgb(0 0 0 / 8%)
}
`;
