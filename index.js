function receivesAFunction(callback) {
    callback();
  };

  function gamer(){
    return "EA sports to the game!"
  }

  function message() {
    gamer();
  }

  receivesAFunction(message);

  function returnsANamedFunction(fifa){
    console.log (fifa);
    return function sports(){
            return ("EA sports to the game.");
    }
}

function returnsAnAnonymousFunction(casey){
    console.log (casey);
    return function (){
            return ("Maybe in the next life");
    }
}