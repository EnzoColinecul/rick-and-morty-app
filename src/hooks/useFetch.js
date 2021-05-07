import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types'

const useFetch = (url, params) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    fetch(`${url}?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted.current) {
          setState({
            data: data,
            loading: false,
            error: null
          })
        }
      })
      .catch((err) => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la informacion'
        })
      })
  }, [url, params])

  return state
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired
}


export default useFetch