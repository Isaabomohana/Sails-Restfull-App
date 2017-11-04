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
	},
	delete:function(req, res) {
		 Articles.destroy({id: req.params.id}).exec(function(err){
			 if (err) {
 				res.end(500, {error: 'Article is not deleted'});
 			}
 			res.redirect('/articles/list');
		 })
		 return false;
	},
	edit:function(req, res){
		Articles.findOne({id: req.params.id}).exec(function(err, article){
			if (err) {
			 res.end(500, {error: 'Article Edit Error'});
		 }
		 res.view('edit', {article:article});
		})
	},
	update:function(req, res){
		let title = req.body.title;
		let body = req.body.body;

		Articles.update({id: req.params.id}, {title:title, body: body}).exec(function(err){
			if (err) {
				res.end(500, {error: 'Mongodb Article create Error'});
			}
			res.redirect('/articles/list');
		})
		return false;
	}
 };
