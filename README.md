## Portfolio Data
[starter .json](https://github.com/kirinmurphy/portfolio_generator/tree/master/app/portfolioData)   

### Personal Info
```
{
  name: "Guy Person",
  introduction: "hi. hire me because of this and this and this."
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

### Skillsets
Grouping of projects by specialty or interest 

```
[
  {
    title: "Specialty or Interest",
    description: "Something about the thing.",
    featured: [
      { 
        projectId: 'someProjectId',
        thumb: 'thumbnail-image-file.png'  
      },
      {
        projectId: 'anotherProjectId',
        thumb: 'thumbnail-image-file.png'  
        tagline: 'overrides related project tagline',
        url: 'www.overrides-direct-link-to-project.com'
      }
    ]
  },
  ...
]
```
The projectId will pull in the `tagline`, `workType` and `timeframe` of the related project.    
Optional overrides can be added for the `url` and `tagline`.


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

Optional max view limit on init 
```
{
  maxProjectsOnInit: {
    maxJobProjects: 2,
    maxSoloProjects: 4
  },
  projectList: [...]
}
```


## Project Data
required
```
name: "Project name",
tagline: "Short explanation of company or project for summaries",
workType: "job", "solo", or "multi_project"
timeframe: {
  start: 2010,
  end: 2012  // or "Present"
}
```

optional
```
url: "url-of-company-or-project-demo.com",
role: "Assistant to the general manager",
jobtype: "Freelance, Full Time, Solo Project etc.",
description: "More detailed description for project view",
tools: ["Excel", "Jira", "Photoshop"]
languages: ["html", "react", "python"],
links" [
  { name:"Code", url: "github.com/repo", icon: "github-alt" },
  { name:"Slack group", url: "slack.com/somegroup", icon: "slack" }
],
categories: more below,
parentProjectId: more below,
highlgihts: more below,
marquee: more below,
repoReadmeFile: more below,
```

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


### workType flag
```
"workType": "job"
```
- `job` & `solo` will be grouped in work history
- `multi_project` will not display a timeframe in skillsets & does not display in work history  

![Work History Grouping](https://github.com/kirinmurphy/portfolio_generator/blob/master/notes/readme-screenshots/workHistoryFilteredByWorkType.png)


### category keywords
Project category keywords are aggregated in a filter option on the Work History list. 
```
categories: ["Product Design", "Data Driven Apps"]
```
![Category Dropdown](https://github.com/kirinmurphy/portfolio_generator/blob/master/notes/readme-screenshots/categoryDropdown.png)


### Multimediazier
Each project can include a multimedia section displaying either an image slideshow, iframe, or video with chapters.   

Multimediazer widget readme [here](https://github.com/kirinmurphy/codethings-react-ui)


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
    - skillsets: `skillset.intro`
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
- skillset thumbnails: `public/images/thumbs`
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