Template.killCounter.onRendered( function(){
  // Kill counter and log results
  var killDate = new Date();
  var renderTime = killDate.getTime() - blazeVsReact.counterBegin.getTime();
  console.log(killDate)
  console.log(renderTime)

  var isReact = Session.get( 'isReactLayout' );

  if( isReact ){
    var reactCounter = Session.get( 'reactCounter' );
    var counter = reactCounter.counter;  
    var time = reactCounter.time;  

    Session.set( 'lastCounter', renderTime );
    Session.set( 'reactCounter', {
      counter: counter + 1,
      time: time + renderTime
    });
  } else {
    var blazeCounter = Session.get( 'blazeCounter' );
    var counter = blazeCounter.counter;  
    var time = blazeCounter.time;  

    Session.set( 'lastCounter', renderTime );
    Session.set( 'blazeCounter', {
      counter: counter + 1,
      time: time + renderTime
    });
  }
  // kill loading animation
  $( "#header__loading-animation" ).removeClass( 'active' );

});