import { useSelector,useDispatch  } from 'react-redux';
import { JobPosition } from './JobPosition';
import {selectVisiblePositions } from '../store/positions/positions-selectors'

import { addFilter } from 'store/filters/filter-actions';

import { selectFilter  } from 'store/filters/filter-selectors';

const JobList = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilter)
  const positions = useSelector( (state) => selectVisiblePositions(state,currentFilters))

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  )
}

export {JobList};