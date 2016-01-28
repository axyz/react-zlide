.PHONY: dist example clean

dist: clean build

build:
	NODE_ENV=production node_modules/.bin/webpack

dev:
	NODE_ENV=dev ./node_modules/.bin/webpack-dev-server --config ./webpack.config.example.js

clean:
	rm -rf dist
