Template.blazetest.helpers({

  // blazeLoader is the reactive variable that controls rerendering the template
  blazeLoader: function () {
    var blazeLoader = Session.get( 'blazeLoader' );
    return blazeLoader;
  },

  page: function () {
    return globalSampleJSON;
  },

  paragraph: function () {
    return this.paragraphs;
  },

  sentence: function () {
    return this.sentences;
  },

  score: function () {
    var score = this.score;
    return Math.round( score / 10 ) * 10; // Round to nearest 10
  }

});