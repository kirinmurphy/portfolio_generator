# Portfolio Generator
Starter .json [here](https://github.com/kirinmurphy/portfolio_generator/tree/master/app/portfolioData)   

## Portfolio Data
### Personal Info
`name`, `introduction`, `contactLinks` and `footerCallToAction`

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
    "title": "Specialty or Interest",
    "description": "Something about the thing.",
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
// required
```
"name": "Project name",
"tagline": "Short explanation of company or project for summaries",
"workType": "job", "solo", or "multi_project"
"timeframe: {
  "start": 2010,
  "end": 2012  // or "Present"
}
```

// optional
```
"url": "url-of-company-or-project-demo.com",
"role": "Assistant to the general manager",
"jobtype: "Freelance, Full Time, Solo Project etc.",
"description": "More detailed description for project view",
"tools": ["Excel", "Jira", "Photoshop"]
"languages": ["html", "react", "python"],
"features": ["Software does this thing.", "Software does this other thing"],
"links" [
  { name:"Code", url: "github.com/repo", "icon": "github-alt" },
  { name:"Slack group", url: "slack.com/somegroup", "icon": "slack" }
],
"categories": more below,
"parentProjectId": more below,
"highlgihts" : more below,
"marquee": more below
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


### marquee
Each project can include a marquee displaying an image slideshow, iframe, or video with chapters.       

#### Slideshow:
```
marquee: {
  type: 'slideshow',
  images: [
    'path-to-image1.jpg',
    'https://www.site.com/image-file.png'
  ]
}
```
#### Video: 
`src` required, `poster` and `chapters` are optional
```
marquee: {
  type: 'video',
  src: 'path-or-url-to-video-file.mp4',
  poster: 'image-file-displayed-before-video-loaded.png',
  chapters: [
    { startTime: '0:00', title: 'Chapter 1' },
    { startTime: '4:30', title: 'Chapter 2' }
  ]
}
```

#### Iframe
Displays main project site in iframe window
```
url: 'https://main-project-url.com',
marquee: {
  type: 'iframe'
}
```


## Additional Features
- Markdown supported in:
    - portfolioIntro: `introduction` and `footerCallToAction`
    - projects: `description`, `features`, `highlight.name`, `highlight.description`, `tools` and `languages`
    - skillsets: `skillset.intro`
- Persistent project links via `?project=projectId`
- Link hijacking opens all project and asset links in popup (including in markdown)
- Responsive slideshow images loaded with `<picture>`
- Formatted resume print view
- Sweet, sweet SEO with [Next.js](https://www.next.js) server side React rendering 
- Cached intro animation only displays in new tab or after 10 minutes

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
To change these settings, edit or delete `public/robots.txt`


## Run
- ```npm install```
- ```npm run dev```


## Deploy
Highly recommend [Netlify](http://www.netlify.com)