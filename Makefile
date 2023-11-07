.PHONY: clean deps dev build gen
m := "updates"


list:
	@grep '^[^#[:space:]].*:' Makefile | grep -v ':=' | grep -v '^\.' | sed 's/:.*//g' | sed 's/://g' | sort

clean:
	rm -rf .svelte-kit/
	rm -rf dist/
	rm -rf node_modules/

deps:
	npm install

dev: deps
	npm run dev

dev-clean: clean dev

package:
	npm install
	npm run package

push:
	git add . || true
	git commit m=$(m)
	git push origin master

publish:
	@make package
	git add .
	git commit -m "updates"
	bump2version patch
	git push origin master
	git push origin --tags
	npm publish
