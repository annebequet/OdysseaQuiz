babel src -d lib
echo "commit message?"
read commit_name
git add --all && git commit -m "$commit_name" && git push
echo "major | minor | patch?"
read bump_type
npm-bump $bump_type
