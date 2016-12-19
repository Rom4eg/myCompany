export class Cookie{

  cookie = {}

  constructor(){
    let names = document.cookie.split("&");
    for(let idx in names){
      let name = names[idx].split("=");
      this.cookie[name[0]] = name[1] || "" ;
    }
  }

  getName(name){
    return this.cookie[name];
  }
}

export class UrlParser{

  params = {}
  hash = {}

  constructor(){
    let pairs = location.search.slice(1).split("&");
    for(let raw_pair of pairs){
      let pair = raw_pair.split('=');
      this.params[pair[0].trim()] = pair.length > 1? pair[1].trim() : ""
    }
  }

  getParam(name, default_val){
    if(this.params.hasOwnProperty(name)){
      return this.params[name];
    }
    return default_val;
  }
}
