import Worker from '@/worker?worker'

// Initialize the web worker
let worker
let init_status = false
export const init = () => {
  if (init_status == false) {
    console.log('init woker.....')
    worker = new Worker()
    init_status = true
  }
  return worker
}

export const callApi = (inData) => {
  worker.postMessage({
    type: 'api',
    data: inData,
  })
}
