import axios from 'axios' ;
export default function ajax(url, data= {}, type= 'get'){
  return new Promise((resolve, reject)=> {
    let promise ;
    if(type === 'get'){
      console.log('get');
      let paramString = ''
      Object.keys(data).forEach(key=> {
        paramString += key +'='+ data[key] + '&' ;
      })
      if(paramString){
        paramString = '?' + paramString.substring(0, paramString.length-1)
      }
      console.log(url, url + paramString);
      promise = axios.get(url + paramString) ;
    }else{
      promise = axios.post(url, data) ;
    }
    promise
      .then(res=> {
        resolve(res.data)
      })
      .catch(error=> {
        console.log('fail');
        resolve(error)
      })

  })

}
