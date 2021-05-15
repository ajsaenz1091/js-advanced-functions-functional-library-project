const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        if(Array.isArray(collection)){
          for(let item of collection){
            callback(item)
          }
        }else{
          for(let key in collection){
            callback(collection[key])
          }
        }
        return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      if(Array.isArray(collection)){
        for(let item of collection){
          newCollection.push(callback(item))
        }
      }else{
        for(let key in collection){
          newCollection.push(callback(collection[key])) 
        }
      }
      return newCollection
    },

    reduce: function(collection,callback,acc=0) {
      let reduced = 0;
      for(let item of collection){
        reduced += callback(acc,item,collection)
      }
      return reduced;
    },

    find: function(collection, predicate) {
      foundItem;
      for(let item of collection){
        if(predicate(item) === true){
          foundItem = item;
          break;
        }
      }
      return foundItem;
    },

    filter: function() {

    },

    size: function() {

    },



    functions: function() {

    },


  }
})()

fi.libraryMethod()
