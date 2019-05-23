const Tweet = require('../database/models/tweet.model');

exports.getTweets = () => {
  return Tweet.find({}).exec();
}

exports.createTweet = (tweet) => {
  const newTweet = new Tweet(tweet);
  return newTweet.save();
}

exports.deleteTweet = (tweetId) => {
  return Tweet.findByIdAndDelete(tweetId).exec();
}

exports.getTweet = (tweetId) => {
  return Tweet.findOne({ _id: tweetId }).exec();
} 

exports.updateTweet = (tweetId, tweet) => {
  return Tweet.findByIdAndUpdate(tweetId, { $set: tweet }, { runValidators: true });
}

exports.getCurrentUserTweetsWithFollowing = (user) => {
  return Tweet.find({ author: { $in: [ ...user.following, user._id ] }}).populate('author').exec();
}

exports.getUserTweetsFormAuthorId = (authorId) => {
  return Tweet.find({ author: authorId }).populate('author').exec();
}
