/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
 	list:function(req, res) {
 		Articles.find({}).exec(function(err, articles){
 			if (err) {
 				res.end(500, {error: 'Mongodb Error'});
 			}
 			res.view('list', {articles: articles})
 		})
 	},
	add:function(req, res) {
		res.view('add');
	},
	create:function(req, res){
		let title = req.body.title;
		let body = req.body.body;

		Articles.create({title:title, body: body}).exec(function(err){
			if (err) {
				res.end(500, {error: 'Mongodb Article create Error'});
			}
			res.redirect('/articles/list');
		})
	}
 };
