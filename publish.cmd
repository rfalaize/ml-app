rem publish hithub page... run this script line by line
rem *****************************************************

rem create production build...
ng build --prod --output-path docs --base-href /ml-app/

rem commit and push changes on master

rem publish on hithub
ngh --dir=docs

rem note: production build will go into /docs/ folder. github page needs to be configured accordingly. 
rem for more infos, see:
rem https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch
rem https://angular.io/guide/deployment