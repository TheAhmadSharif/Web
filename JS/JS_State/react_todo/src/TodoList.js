import React from 'react';
import Todo from './Todo';


export default function TodoList ({abcd}) {
	return (
		abcd.map(obj => {
			return <Todo data={obj} key={obj.id}/>
		})
	)
}