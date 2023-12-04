import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Todo from './Todo'

describe('Todo Component', () => {
  const todo = {
    id: 1,
    text: 'Sample Todo',
    done: false,
  }

  const deleteTodo = jest.fn()
  const completeTodo = jest.fn()

  it('renders todo correctly', () => {
    const { getByText } = render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    )

    expect(getByText('Sample Todo')).toBeInTheDocument()
    expect(getByText('This todo is not done')).toBeInTheDocument()
  })

  it('calls deleteTodo when delete button is clicked', () => {
    const { getByText } = render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    )
    fireEvent.click(getByText('Delete'))
    expect(deleteTodo).toHaveBeenCalledWith(todo)
  })

  it('calls completeTodo when Set as done button is clicked', () => {
    const { getByText } = render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    )
    fireEvent.click(getByText('Set as done'))
    expect(completeTodo).toHaveBeenCalledWith(todo)
  })

  it('displays "This todo is done" when todo is done', () => {
    const doneTodo = { ...todo, done: true }
    const { getByText } = render(
      <Todo
        todo={doneTodo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    )
    expect(getByText('This todo is done')).toBeInTheDocument()
  })

  it('displays "This todo is not done" when todo is not done', () => {
    const { getByText } = render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    )
    expect(getByText('This todo is not done')).toBeInTheDocument()
  })
})
