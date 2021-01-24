
export default (endpointName) => {
  const env = process.env.NODE_ENV
  const dev = 'http://localhost:8000/api/'  // FIXME: get from env
  const prod = dev

  const api = {
    todo: 'todo',  // GET, POST
    token: 'token',  // POST
    refresh: 'token/refresh',  // POST
  }

  return (
    env === 'production' ?
      `${prod}${api[endpointName]}/` :
      `${dev}${api[endpointName]}/`
  )
}
