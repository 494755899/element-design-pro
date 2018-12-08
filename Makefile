sync-dev:
	rsync -az -v -r --force \
    --filter="- node_modules" \
    --filter="- *.js.map" \
    -e "ssh -p 22" \
    ./dist/ \
      root@120.79.217.228:/www/paper/dev/manage
