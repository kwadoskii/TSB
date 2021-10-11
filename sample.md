---
Title: SVG Article
Author: Ray Villalobos
Date: January 6, 2016
heroimage: "http://i.imgur.com/rBX9z0k.png"
tags:
  - data visualization
  - bitmap
  - raster graphics
  - navigation
---

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Intro

```python
def function(foo):
    print(foo)
```

- [ ] Run `> npm-install` to install the project dependencies
- [x] Install gulp.js via the Mac terminal or Gitbash on a PC `> npm install -g gulp`
- [ ] Run the Gulp command `> gulp`

| Dimensions    | Megapixels |
| ------------- | ---------- |
| 1,920 x 1,080 | 2.1MP      |
| 3,264 x 2,448 | 8MP        |
| 4,288 x 3,216 | 14MP       |

- `console.log`
- `console.table`
- `console.warn`

![Console.log](https://gentle-eyrie-89056.herokuapp.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fydpav198t18pvae5x144.jpg&w=1920&q=75)

I may not talk alot here, because the topic is pretty straight forward and speaks for its self.

```javascript
const one = 12;
console.log("hello", one);
```

prints
`hello 12`

Peace out!!!

### Get the List of Department without Manager

To get all the department that has no manager assign to them we have to make use of `joins` to join the related tables we need to make use.

We would ben using three tables `departments`, `locations` and `countries`.
Run the code below to see it in action.

```sql
select l.city || c.country_name, d.department_name
from departments d, locations l, countries c
where d.location_id = l.location_id
and d.manager_id is null;
```

That would be all for today.
