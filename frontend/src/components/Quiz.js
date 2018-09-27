import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Title } from 'bloomer'

import apiCalls from '../apiCalls'
import Card from './Card'

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    let quizID = this.props.id
    this.getQuiz(quizID)
  }
  getQuiz (quizID) {
    apiCalls.getQuiz(quizID).then(quiz => {
      // console.log(quiz, 'quiz')
      this.setState({ quiz })
    })
  }
  render () {
    if (this.state.quiz) {
      let quiz = this.state.quiz
      // console.log(this.state.quiz, 'this.state.quiz')
      let quizID = this.props.id
      // let questions = quiz.relationships.questions
      // console.log(questions, 'question variable in Quiz')
      return (
        <Card>
          <Title><div>{quiz.attributes.title}</div></Title>
          <Button className='is-warning has-text-white'><NavLink to={`/quiz/${quizID}/question/${quiz.relationships.questions.data.attributes.number}`} >Start Quiz</NavLink></Button>
        </Card>)
    } else {
      return ('')
    }
  }
}
export default Quiz
