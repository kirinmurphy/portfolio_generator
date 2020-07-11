## Features
- Data driven UI (currently) managed through json files
- Nagivatable paths from linked parent/child projects
- Persistent project links via query parameters
- Markdown supported in lists and body copy
- Link hijacking opens all project and asset links in popup
- Filterable category option on work history list 
- Option to display project assets as an image slidehsow, iframe link, or video with chapter navigation.  
- Small/large slideshow images loaded based on screen resolution with `<picture>`
- Fontawesome5 React integration
- Formatted resume print view
- Server side rendering of React generated views via [Next.js](https://www.next.js)
- Cached intro animation only displays in new tab or after 10 minutes


## Data Model
Starter .json [here](https://github.com/kirinmurphy/portfolio_builder/tree/master/data)       
Full list of data props [here](https://github.com/kirinmurphy/portfolio_builder/tree/master/types)

### Projects.json 
- `projects.json` - "table" of all projects  
  - `parentProjectId` - optional foreign key
  - `highlight.projectId` - optional foreight key
  - `workType` - flag: `job`, `solo`, or `multi_project`
  - `categories` - filterable keywords in work history

- `work_history_index.json`: sorted list of projects
  - `projectId` - foreign key
  - filtered in the view by `job` or `solo` `workType`

- `skillsets.json`: collection with nested featured projects collection
  - `projectId` - optional foreign key

- `intro.json`: personal and contact info



## Markdown enhancemnets
Trigger project detail from markdown links by adding `#` to the projectId`[text](#projectId)`


## Assets
- slideshow images: `public/images/screenshots`
  - folders for `full` and `small` return images for different screen sizes
- skillset thumbnails: `public/images/thumbs`
- anything else (other images, pdf, video, etc): `public/samples`
- favion: `public/favicon`


## Theming
- (Almost) all theme values (colors, etc.) abstracted into `app/components/css/cssVariables.js`.  Definitely needs some cleanup.  
- project specific overrides in `app/components/css/cssProjectOverrides.js`


## Search Bots
By default, this site will tell search crawlers NOT to index this page. 
To change these settings, edit or delete `public/robots.txt`


## Run
- ```npm install```
- ```npm run dev```
