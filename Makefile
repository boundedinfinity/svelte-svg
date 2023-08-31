.PHONY: clean deps dev build gen

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

add:
	git add . || true
	make commit m=$(m)

commit:
	git commit -m "$(m)" || true
	git tag -a $(m) -f -m "$(m)"

publish:
	@make package
	git add .
	git commit -m "updates"
	bump2version patch
	git push origin master
	git push origin --tags
	npm publish
