import React, {Component} from 'react'
import Crud from '../../../ui/crud'
import {Title} from '../../../models'
import {ShiftType, Period} from '../../../models'

export default class SettingsMainComponent extends Component {

  render () {
    return <main className='page-main-content'>
      <Crud model={new Title()}/>
      <Crud model={new ShiftType()}/>
      <Crud model={new Period()}/>
    </main>
  }
}
