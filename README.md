# PCL

Pinnacle Component Library

PCL is a Svelte UI library containing components used across Pinnacle web services as we transition to SvelteKit as our primary framework. It is partially documented with Storybook and will be expanded as more repositories transition to using SvelteKit.

## Developing

`npm run storybook`

## Usage

[See Storybook for usage examples.](https://pinnacleusorg.github.io/components/)

## Package & Publish

1. bump version Major.Minor.Patch in `package.json`
2. git add -A && git commit -m "repo: version bump"
4. git push
5. tag, package & publish handled automatically by CI