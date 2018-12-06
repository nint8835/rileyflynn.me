# Configuring deployment: https://gohugo.io/hosting-and-deployment/hosting-on-github/#deployment-of-project-pages-from-your-gh-pages-branch
hugo
cd public
git add --all
git commit -m "Publishing to GH Pages"
cd ..
git push origin gh-pages