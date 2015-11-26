Template.layout.onCreated( function(){
  Session.set( 'isBlazeLayout', false );
  Session.set( 'isReactLayout', false );
  Session.set( 'lastCounter', 0 );
  Session.set( 'blazeCounter', {
    counter: 0,
    time: 0
  });
  Session.set( 'reactCounter', {
    counter: 0,
    time: 0
  });
});




Template.layout.helpers({


  // Checks both, so nothing gets rendered on the initial load
  isBlazeTest: function () {
    return Session.get( 'isBlazeLayout' );
  },

  isReactTest: function () {
    return Session.get( 'isReactLayout' );
  }

});