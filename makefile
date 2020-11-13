	# These overwrite the shells envronment
PROJECT_NAME= my-website
PROJECT_ROOT= ./

WEB_INDEX= ${PROJECT_ROOT}/src/index.tsx
SSH_CONN= vinnie@willats.tech

.PHONY: clean
clean:
	rm -r ./deploy

.PHONY: deploy
deploy: make-deploy-folders copy-config web-build-move sync clean server-refresh

.PHONY: make-deploy-folders
make-deploy-folders:
	mkdir ./deploy
	mkdir ./deploy/config
	mkdir ./deploy/www


.PHONY: copy-config
copy-config:
	cp -a ${PROJECT_ROOT}/nginx ./deploy/config

.PHONY: sync
sync:
	rsync -a ./deploy ${SSH_CONN}:/usr/share/my-website

.PHONY: web-build-move
web-build-move: 
	npm run-script build && mv ./build/* ./deploy/www/.

.PHONY: server-refresh
server-refresh: 
	ssh ${SSH_CONN} "sudo nginx -s reload"

