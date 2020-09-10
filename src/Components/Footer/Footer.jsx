import React from 'react'
import { connect } from 'react-redux'
import {setVisibilityFilter, visibilityFilter} from '../../store/Action/action' 

const Footer = ({setVisibilityFilter}) => {
    return (
        <div>
            <span>Show :</span>
            <button onClick={() => {
                setVisibilityFilter(visibilityFilter.SHOW_ALL)
            }}>All</button>
            <button onClick={() => {
                setVisibilityFilter(visibilityFilter.SHOW_ACTIVE)
            }}>Active</button>
            <button onClick={() => {
                setVisibilityFilter(visibilityFilter.SHOW_COMPLETED)
            }}>Completed</button>
        </div>
    )
}

const mapDipatchToProps = (dispatch) => {
    return {
        setVisibility: (filter) => {
            dispatch(setVisibilityFilter(filter))
        }
    }
}

export default connect(null, mapDipatchToProps) (Footer)