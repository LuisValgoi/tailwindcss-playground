# Objective

To get to know more about the [tailwindcss](https://tailwindcss.com/) framework.

# Link

https://tailwindcss-playground-cra.vercel.app/

or

https://tailwindcss-playground-cra.netlify.app/

# Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/f4d7978e-1e32-4b67-8bcf-cde627fe015b/deploy-status)](https://app.netlify.com/sites/tailwindcss-playground-cra/deploys)

# Note

- its a `postcss` plugin.

      - CRA [adds vendor prefixes to it automatically through Autoprefixer](https://create-react-app.dev/docs/post-processing-css/) 

- `lower level` than bootstrap.

- you `won't have` out of the box components.

- you `need to create your own` components.

- tailwind `empowers you by giving several tools` out of the box for you.

- the customization of components `its faster`.

- using the `cdn` for installation, you will lose some features.

# Installation

https://tailwindcss.com/docs/guides/create-react-app

```bash
npx create-react-app my-project

npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

npm install @craco/craco

// change scripts

// add craco config

npx tailwindcss init

// add purge property

// add tailwind directives
```

# Quick

- `min-h-screen`: min-height: 100vh.

- `w-full`: width: 100%;

- `flex`: display: flex.

- `items-center`: align-items: center.

- `grid-cols-1`: grid-template-columns: repeat(1, minmax(0, 1fr)).

- `text-5xl`: font-size: 3rem; + line-height: 1.

- `rounded-lg`: border-radius: 0.5rem.

- `shadow-xl`: --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

- `rounded-full`: border-radius: 9999px.

- `py-1`: padding-top: 0.25rem; + padding-bottom: 0.25rem.

- `mx-auto`: centralize an element which has a d-block.

      - margin-left: auto; + margin-right: auto;

- `flex-shrink-0`: won't let your image be resized

      - how much the flex item will shrink relative to the rest of the flex items in the flex container when there isn't enough space on the row.

# Directive

- `@apply`: Using the apply you can create the "base"
      
      - https://tailwindcss.com/docs/functions-and-directives#apply


# Reference

[Just in Time Compilation](https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css)

[Optimizing for Production](https://tailwindcss.com/docs/optimizing-for-production)

[Alias Configuration](https://mtateam.medium.com/how-to-use-import-aliases-with-react-native-and-vs-code-dadb246674c7)

[Adding Customization to Webpack](https://stackoverflow.com/questions/65055214/import-aliases-not-working-as-expected-in-creat-react-app-with-craco)

[Designing TailwindCSS with Adam](https://www.youtube.com/watch?v=21HuwjmuS7A&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=2) + [REPO BASE](https://github.com/Miravicson/Workcation)

# Explanation

```bash
grid grid-cols-1 lg:grid-cols-2 

      - create a grid.

      - where this grid has only 1 column per line.

      - but, at the large screen, uses 2 columns per line.
```

```bash
bg-blue-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12

      - applys a dark blue.

      - from large screens to on, uses the 100vh

      - from large screens to on, change from d-block to d-flex

      - from large screens to on, centralize the elements vertically (cross axis)

      - from normal screens, uses padding:9

      - from small screen to on, uses padding:12
```

```sh
lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48
      - from large screen to on, applies 100vh

      - from large screens to on, centralize the elements vertically (cross axis)

      - in normal screens, applies padding:12

      - from large screens to on, applies padding:25

      - from extra large screens to on, applies padding:48
```
