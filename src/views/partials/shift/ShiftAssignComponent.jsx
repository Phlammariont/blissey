import React, {Component} from 'react'
import {AssignShiftbyService} from '../../../models'
import Grid from "../../../ui/grid/GridComponent";
import AssignShiftToServiceComponent from './AssignShiftToServiceContainer'
import {map, propEq, find, values, propOr, defaultTo} from 'ramda'
import CrudHeader from '../../../ui/crud/CrudHeaderContainer'



class ShiftAssignComponent extends Component{
  componentDidMount() {
    this.props.dispatch({type: 'LOAD_SHIFTASSIGNMENT_COLLECTION'})
    this.props.dispatch({type: 'LOAD_SERVICE_COLLECTION'})
  }

  getCollection () {
    const shiftAssignment = (service) => defaultTo(
      {},
      find(propEq('serviceId', `${service.id}`), this.props.shiftsAssignments)
    )
    return map(service => ({
      id: service.id,
      serviceName: service.name,
      serviceId: service.id,
      shifts: values(propOr([], 'assignment', shiftAssignment(service)))
    }), this.props.services)
  }

  render () {
    return !!this.getCollection().length &&
      <div>
        <CrudHeader name={'N/A'} quantity={this.getCollection().length} />
        <Grid
          collection={this.getCollection()}
          model={new AssignShiftbyService()}
          detailComponent={AssignShiftToServiceComponent} />
      </div>
  }
}

export default ShiftAssignComponent
