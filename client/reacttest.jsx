
var container = React.createClass({
  render() {
    var pages = []; // install array, to push pages to
    this.props.pages.forEach( function( page ){
      pages.push({ key: page._id, paragraphs: page.paragraphs });
    });
    
    return (
      <div className="ui text justified container">
        { pages.map( function( page ) {
          return <TextPage key={page.key} paragraphs={page.paragraphs} />;
        })}
      </div>

    )
  }
});

var TextPage = React.createClass({
  render() {
    var paragraphs = [];
    this.props.paragraphs.forEach( function( paragraph ){
      paragraphs.push({ key: paragraph.id, sentences: paragraph.sentences });
    });
    return (
      <div className="text-page">
        { paragraphs.map( function( paragraph ) {
          return <TextParagraph key={paragraph.key} sentences={paragraph.sentences} />;
        })}
      </div>
    )
  }
});

var TextParagraph = React.createClass({
  render() {
    var sentences = [];
    this.props.sentences.forEach( function( sentence ){
      sentences.push({ key: sentence.id, text: sentence.text, score: sentence.score });
    });
    return (
      <p>
        { sentences.map( function( sentence ) {
          return <TextSentence key={sentence.key} text={sentence.text} score={sentence.score} />;
        })}
      </p>
    )
  }
});

var TextSentence = React.createClass({
  checkScore() {
    var score = this.props.score;
    return "sentence score-" + ( Math.round( score / 10 ) * 10 ); // Round to nearest 10
  },
  render() {
    let scoreClasses = this.checkScore();
    return (
      <span className={ scoreClasses } >{this.props.text}</span>
    )
  }
});


Template.reacttest.helpers({
  // reactLoader is the reactive variable that controls rerendering the template
  reactLoader: function () {
    var reactLoader = Session.get( 'reactLoader' );
    return reactLoader;
  },

  container() {
    return container;
  },

  pagesJson() {
    return globalSampleJSON;
  }
});





