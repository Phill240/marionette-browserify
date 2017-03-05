BUILDDIR = public
MODULESDIR = ./node_modules/.bin
APPDIR = app
ASSETSDIR = ${APPDIR}/assets
STYLESDIR = ${APPDIR}/styles
build:
	@mkdir -p public & \
	cp -f app/assets/index.html $(BUILDDIR)/index.html &\
	cp -f app/styles/app.css $(BUILDDIR)/app.css &\
	$(MODULESDIR)/browserify app/initialize.js \
	-t node-underscorify \
	-t [ babelify --presets [ es2015 ] ] \
    -t [jstify] -d | \
    $(MODULESDIR)/uglifyjs -c > $(BUILDDIR)/app.js

server: start

start: 
	$(MODULESDIR)/budo \
	$(APPDIR)/initialize.js:app.js --dir $(ASSETSDIR) --dir $(STYLESDIR) -- \
    -t node-underscorify \
    -t [ babelify --presets [ es2015 ] ] \
    -t [jstify --noMinify]

clean:
	@rm -rf public

.PHONY: clean