# To add

## Pages

- [x] Change S1/S2 to S4/5 in:
  - [x] Astro config in root
  - [x] Filepath in `/src/contents/docs`

- [x] Change sidebar config in frontmatters
  - `label` to change title in sidebar
  - `order` should already be fine.

- [ ] Consider changing the theming
  - That's just a wee bit of CSS, but lazyness.

- [x] Add a page to document the migration of config files
  - [ ] Eventually the modpack should not replace config files when importing

## Assets

- [x] Add permalinks for modpack file in `/src/contents/assets`

- [x] Replace:
  - [x] Favicon
  - [x] Logo

- [x] Consider also adding direct download links for resource/shader packs
  - Managed by Packwiz

## Modpack files

- [x] Add modpack files to Github repo cuz we're nerdz
  - Managed by Packwiz

# To test

## Deployment

- [x] Test deployment on Github pages
  - View [issues](https://github.com/itsaerosphere/wiki/issues/1) on [failed deploy action](https://github.com/itsaerosphere/wiki/actions/runs/20173385184)
  - [x] Set DNS CNAME record to point from GHP to `spherico.one`
  - Since I have no access to DNS nor repo settings, this is all you brother.

- [-] Test deployment on local server
  - Only if repo exceeds 1GB
  - This should only be an issue if we keep multiple modpack files.
  - This requires an Nginx instance. No, we're not doing Docker.

# Management of the repo

- Consider moving the roadmap to [issues](https://github.com/itsaerosphere/wiki/issues) for easier tracking.
- Also consider making the wiki part of a wider repo for the server (with [project](https://github.com/itsaerosphere/wiki/projects?query=is%3Aopen) management?)
  - If you want me to help in the dev of the server that'll be a must.

# Other tasks

- [ ] Learn how to use [nvim](https://github.com/neovim/neovim) dammit. [It's not that hard](https://vim.rtorr.com/).
  - This one is specifically for you Richard.
