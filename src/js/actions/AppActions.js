var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	saveVideo: function(video){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SAVE_VIDEO,
			video: video
		});
	},
	receiveVideos: function(videos){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_VIDEOS,
			videos: videos
		});
	},
    removeVideos: function(video_id){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_VIDEO,
			video_id: video_id
		});
	}
}

module.exports = AppActions;