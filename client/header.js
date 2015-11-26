Template.header.helpers({

  currentLoadTime: function () {
    var counter = Session.get( 'lastCounter' );
    return counter;
  },

  blazeLoadTime: function () {
    var counter = Session.get( 'blazeCounter' );
    var num = counter.counter;
    var time = counter.time;
    console.log( time + ' / ' + num)
    if( time === 0 ){
      return 0;
    } else {
      return Math.round( time / num );
    }
  },

  reactLoadTime: function () {
    var counter = Session.get( 'reactCounter' );
    var num = counter.counter;
    var time = counter.time;
    console.log( time + ' / ' + num)
    if( time === 0 ){
      return 0;
    } else {
      return Math.round( time / num );
    }
  },

  // Returns 'active' class if current layout is React Layout
  reactActive: function () {
    var reactActive = Session.get( 'isReactLayout' );
    if( reactActive ){
      return 'active';
    }
  },

  // Returns 'active' class if current layout is Blaze Layout
  blazeActive: function () {
    var blazeActive = Session.get( 'isBlazeLayout' );
    if( blazeActive ){
      return 'active';
    }
  },

  // Returns 'disabled' if neither blaze layout or react layout is selected. 
  // (nothing happens if clicked in this situation)
  disableBlank: function () {
    var blazeActive = Session.get( 'isBlazeLayout' );
    var reactActive = Session.get( 'isReactLayout' );
    if( !blazeActive && !reactActive ){
      return 'disabled';
    }
  }

});


Template.header.events({

  'click #switchToReact': function () {
    Session.set( 'isBlazeLayout', false );
    Session.set( 'isReactLayout', true );
    blazeVsReact.counterBegin = new Date();
  },

  // switches to the Blaze side of things. Renders document and clocks it
  'click #switchToBlaze': function () {
    Session.set( 'isReactLayout', false );
    Session.set( 'isBlazeLayout', true );
    blazeVsReact.counterBegin = new Date();
  },

  'click #loadJSON': function () {
    // Show loading animation
    if( Session.get( 'isBlazeLayout' ) ){ // load Blaze
      $( "#header__loading-animation" ).addClass( 'active' );
      Session.set( 'blazeLoader', false );
      // Timeout is needed to allow Session to resolve. 
      Meteor.setTimeout( function () {
        Session.set( 'blazeLoader', true );
        blazeVsReact.counterBegin = new Date();
      }, 500 );
    }else if( Session.get( 'isReactLayout' ) ) { // load React
      $( "#header__loading-animation" ).addClass( 'active' );
      // Timeout is needed to allow Session to resolve. 
      Session.set( 'reactLoader', false );
      Meteor.setTimeout( function () {
        Session.set( 'reactLoader', true );
        blazeVsReact.counterBegin = new Date();
      }, 500 );
    }
  },


  'click #clearBtn': function () {
    Session.set( 'blazeCounter', {
      counter: 0,
      time: 0
    });
    Session.set( 'reactCounter', {
      counter: 0,
      time: 0
    });
  },
});