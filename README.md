## Portfolio Data
[starter .json](https://github.com/kirinmurphy/portfolio_generator/tree/master/app/portfolioData)   

### Personal Info
```
{
  name: "Guy Person",
  introduction: "hi. hire me because of this and this and this.",
  title: "Assistant to the General Manager",
  contactLinks: {
    email: 'guyperson@gmail.com',
    linkedin: '//www.linkedin.com/in/guyperson',
    github: '//www.github.com/guyperson'
  },
  footerCallToAction: "seriously, hire me."
}
```
### Projects
- A job
- A project (or role) at a job
- A solo project
- A multi-project summary

```
{
  "tesla": { name: "Tesla", workType: "job", ...  },
  "tesla_solar_roof" : { "name": "Tesla Solar Roof project", workType: "job", ... },
  "flamethrower": { "name": "My Flamethrower thing", "workType": "solo", ... },
  "environmental_stuff": { "name": "Environmental stuff", "workType:"multi_project", ... } 
}
```

### Work History 
Chronological history of projects grouped by paid and solo work
```
{
  projectList: [
    'someProjectId',
    'anotherProjectid',
    'aThirdProjectId'
  ]
}
```

Option to add a filterable set of categories (more below)
```
{
  projectList: [...],
  categories: [
    { id: "technology", name: "Technology Highlights" },
    { id: "design", name:"Design Highlights" }
  ]
}
```

## Project Data
required
```
name: "Project name",
tagline: "Short explanation of company or project for summaries",
workType: "job", "contract" or "solo"
timeframe: {
  start: 2010,
  end: "Present"
}
```

optional
```
url: "url-of-company-or-project-demo.com",
detailOverrideUrl: "skip-the-detail-popup-and-go-directly-here.com",
role: "Assistant to the general manager",
description: "Detailed description of project or job",
tools: ["Excel", "Jira", "Photoshop"]
languages: ["html", "react", "python"],
links" [
  { name:"Code", url: "github.com/repo", icon: "github-alt" },
  { name:"Slack group", url: "slack.com/somegroup", icon: "slack" }
],
categories: more below
marquee: more below,
parentProjectId: more below,
highlgihts: more below,
repoReadmeFile: more below,
```


### workType flag
Groups projects by `job`, `contract` or `solo`.
```
"workType": "job"
```   
![Work History Grouping](https://github.com/kirinmurphy/portfolio_generator/blob/master/notes/readme-screenshots/workHistoryFilteredByWorkType.png)


### categories
Match to `category` ids set in the `workHistory` json to display when filtering by that keyword. 
```
// in workHistory.json
{
  projectList: [...],
  categories: [
    { id: "technology", name: "Technology Highlights" }
  ]
}

// in projects.json 
categories: ["technology"]
```    
![Category Option](https://github.com/kirinmurphy/portfolio_generator/blob/master/notes/readme-screenshots/focusFilter.png)


### Marquee
Each project can include a multimedia section displaying either an image slideshow, iframe, or video with chapters.   

Multimediazer widget readme [here](https://github.com/kirinmurphy/codethings-react-ui)


### parentProjectId
Adds a link in the project header to the parent project. 
```
"parentProjectId": "someProjectId"
```
![Parent Project Link](https://github.com/kirinmurphy/portfolio_generator/blob/master/notes/readme-screenshots/parentProjectLink.png)


### highlights
- Each highlight can include a `name`, `description` and `timeframe`
- Highlight can include an optional `projectId` which will pull `name`, `description` and `timeframe` from the related project.
- You can also link to a projectId and override the `description` or `timeframe`

```
highlights: {
  title: 'Key Features'
  list: [
    { name: 'Some Feature', description: 'Some description about it.' },
    { projectId: 'someProjectId' },
    { projectId: 'anotherProjectId', description: 'overrides related project description' }
  ]
}
```
![Linked Project Highlight](https://github.com/kirinmurphy/portfolio_generator/blob/master/notes/readme-screenshots/linkedHighlight.png)


### repoReadmeFile
Link a readme file from your project's (github, gitlab or bitbucket) repo
```
"repoReadmeFile": {
  "site": "github",
  "source": "user_name/repo_name/README.md",
  "imageFolderPrefix": "https://github.com/username/repo_name/blob/master/some_parent_folder/"
},
```
*The `source` must be the RAW version of the file.

To avoid CORS restrictions, linked images must be duplicated in the `/samples` folder. For example:      
if images are in `https://github.com/username/repo_name/blob/master/readme_images`    
then set `imageFolderPrefix`: `https://github.com/username/repo_name/blob/master/`    
and copy the image files to in `public/samples/readme_images`  


## Additional Features
- Markdown supported in:
    - portfolioIntro: `introduction` and `footerCallToAction`
    - projects: `description`, `features`, `highlight.name`, `highlight.description`, `tools` and `languages`
- Persistent project links via `?project=projectId`
- Link hijacking opens all project and asset links in popup (including in markdown)
- Formatted resume print view
- Sweet, sweet SEO with [Next.js](https://www.next.js) server side React rendering 

## Asset Management
### Copy
- Trigger project detail from markdown links by adding `#` to the projectId: `[text](#projectId)`
- Default text: `app/components/utlis/dictionary.ts`

### Images/Files
- slideshow images: `public/images/screenshots`
  - folders for `/full` and `/small` return images for different screen sizes
- thumbnails: `public/images/thumbs`
- anything else linked from markdown (other images, pdf, video, etc): `public/samples`
- favicon: `public/favicon`

### Theming
- `app/portfolioData/cssVariables.ts`:  (Almost) all theme values (colors, etc.).  Needs some cleanup.  
- `app/portfolioData/cssProjectOverrides.ts`: any project speciic overrides


## Search Bots
By default, this site will tell search crawlers NOT to index this page.   
These settings can be changed by editing or deleting `public/robots.txt`


## Run
- ```npm install```
- ```npm run dev```


## Deploy
Highly recommend [Netlify](http://www.netlify.com)