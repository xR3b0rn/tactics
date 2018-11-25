PROJECT = "Tactics"

help:
	@echo "[${PROJECT}] Available Commands"; \
	echo ""; \
	echo "install        Setup and install dependencies"; \
	echo "dev   		 Start and watch the development server and assets for changes"; \
	echo "help           List available commands"

install:
	@echo "[${PROJECT}] Installing dependencies..."; \
	npm install

dev: assets-watch server-watch

server-watch:
	@echo "[${PROJECT}] Watching server for changes..."; \
	memcached &
	npm run server:watch

assets-watch:
	@echo "[${PROJECT}] Watching assets for changes..."; \
	export NODE_ENV=development; \
	npm run assets:watch

.PHONY: install dev help
