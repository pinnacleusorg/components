# PCL

Pinnacle Component Library

PCL is a Svelte UI library containing components used across Pinnacle web services as we transition to SvelteKit as our primary framework. It is partially documented with Storybook and will be expanded as more repositories transition to using SvelteKit.

## Developing

`npm run storybook`

## Package & Publish

1. Bump version Major.Minor.Patch in `package.json`
2. git add -A && git commit -m "repo: version bump"
3. git tag vMajor.Minor.Patch
4. git push
5. Package & publish handled automatically by CI