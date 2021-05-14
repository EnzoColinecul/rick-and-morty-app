import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { loadCharacters } from '../../actions/characters'
import { setActivePage } from '../../actions/pages'
import { API_URL } from '../../constants'
import useFetch from '../../hooks/useFetch'

const Pagination = ({ setLoadingCards }) => {

  const dispatch = useDispatch()
  const { activePage } = useSelector(state => state.pages)

  const url = `${API_URL}/character/`

  const [params, setParams] = useState(new URLSearchParams({ page: activePage }))
  const { data, error } = useFetch(url, params)

  useEffect(() => {
    if (data) {
      setLoadingCards(false)
      dispatch(loadCharacters(data, error))
    }
  }, [data, error, dispatch, setLoadingCards])

  const handlePageChange = (newPage) => {
    setLoadingCards(true)
    let selected = newPage.selected + 1
    setParams(new URLSearchParams({ page: selected }))
    dispatch(setActivePage(selected))
  }

  return (
    <div className="pagination-container mt-20 mb-2 shadow-xl">
      <ReactPaginate
        initialPage={activePage - 1}
        previousLabel={'Previous'}
        previousClassName="pagination-navigation-btn"
        nextLabel={'Next'}
        nextClassName="pagination-navigation-btn"
        breakLabel={'...'}
        pageClassName="pagination-page"
        activeClassName="pagination-active-btn"
        containerClassName="flex flex-row self-center my-2 " 
        pageCount={data?.info.pages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Pagination
