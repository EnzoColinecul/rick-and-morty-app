import { useEffect, useState } from "react"
import PropTypes from 'prop-types'

const useFetch = (url, params) => {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      setState({ data: null, loading: true })
    }
  }, [])

  useEffect(() => {
    if (params) {
      console.log(`${url}?${params.toString()}`);
      fetch(`${url}?${params.toString()}`)
        .then(res => res.json())
        .then(data => {
          setState({
            data: data,
            loading: false,
            error: data?.error
          })
        })
        .catch((err) => {
          setState({
            data: null,
            loading: false,
            error: 'No se pudo cargar la informacion'
          })
        })
    } else {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setState({
            data: data,
            loading: false,
            error: null
          })
        })
        .catch((err) => {
          setState({
            data: null,
            loading: false,
            error: 'No se pudo cargar la informacion'
          })
        })
    }

  }, [url, params])

  return state
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired
}


export default useFetch