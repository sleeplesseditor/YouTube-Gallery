var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.js')
var AppAPI = require('./utils/appAPI')

AppAPI.getVideos()

ReactDOM.render(<App/>, document.getElementById('app'))
