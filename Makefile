.PHONY: dist example

dist: webpack.config.js $(wildcard src/**/*)
	NODE_ENV=production node_modules/.bin/webpack

example:
	NODE_ENV=dev ./node_modules/.bin/webpack-dev-server --config ./webpack.config.example.js
