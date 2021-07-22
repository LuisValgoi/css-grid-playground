# Repo Goal

To learn more about CSS Grid.

It was used [this](https://www.youtube.com/watch?v=HN1UjzRSdBk&ab_channel=Rocketseat) tutorial as reference.

# Grid Motivation

- RAW HTML Renders elements all below each others.

- In the very beggining `float` and `table` came up to try to solve.

- They did. Partially.

- But, another better approach came up: Flexbox.

- It has changed the way elements structure were organized.

- Axis `x` and `y` could provide a bunch of flexibility that before we couldn't.

- But it wasn't enough. It was onedimensional. Then, CSS Grid have arrived.

- It basically create a 2D (bi-dimensional) approach. With rows and columns.

# Grid vs Flexbox

- one fills the gap of others.

- `GRIDs`: works for the layout limits. Page structure.

- `FLEXBOXEs`: works for the elements itself. Components structure.

# Notes

- `1fr`: means 1 Flex. 1 fraction.

- `vh`: means viewport height.

- `gridGap`: 20px stands for `grid-row-gap`: 20px and `grid-column-gap`: 20px.

- `grid-<column||row>-<start||end>`: will depend on the virtual lines of your structure. The amount changes according to how much columns/rows you want.

  - lets say you have a 2 columns grid.

  - you will have 3 slots where you can start or end your grid-item.

- `grid-<column||row>: 3/4` its the same as the `grid-<column||row>-start: 3` + `grid-<column||row>-end:4`.

- `grid-template-areas`:

```
.container {
  ...
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-areas: "h h"
                        "m a"
                        "f f
}

.header {
  ...
  grid-area: h;
}

.main {
  ...
  grid-area: m;
}

.aside {
  ...
  grid-area: a;
}

.footer {
  ...
  grid-area: f;
}

```

# Properties

### Containers

- `display: grid`: says that its a grid.

- `grid-template-columns`: says how many columns my container will have.

- `grid-template-rows`: says how many rows my container will have.

- `grid-template-areas`: .

- `grid-gap`: says about the spacing/gaps on:

  - `grid-column-gap`: says about the spacing on the column.

  - `grid-row-gap`: says about the spacing on the row.

### Items

- `grid-column`: says about where the item will be placed on the column.

  - `grid-column-start`: its the verbose way to write. it represents where te item will start on your columns virtual lines.

  - `grid-column-end`: its the verbose way to write. it represents where te item will ends on your columns virtual lines.

- `grid-row`: says about where the item will be placed on the row.

  - `grid-row-start`:its the verbose way to write. it represents where te item will start on your rows virtual lines.

  - `grid-row-end`: its the verbose way to write. it represents where te item will ends on your rows virtual lines.

- `grid-area`: says about where the item will be placed on the area. (applicable only with `grid-template-areas`).
