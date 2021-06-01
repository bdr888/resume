## Hi! 
Thank you for taking time to look at this work sample. This app is my personal site with the work sample added as a page at /truss. 


## Getting Started
First, clone the repo and navigate to the root of the project.

Then, install the project dependencies:

```bash
npm install
# or
yarn
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Checkout the branch that this feature is being developed on:
```bash
git checkout feature/truss
```


Finally, navigate to [http://localhost:3000/truss](http://localhost:3000/truss) to see the work sample. There is a navigation link in the header.


## Files to look at
The files to be concerned with are `pages/truss.js` (displaying the table of planet data) and `hooks/useFetch.js` (abstracting the fetch into a custom hook to help with loading and error states).

(Please note the other pages in the app will not work without the api key environment variables. See briandridge.com if you are curious).

## Next.js resources

The app is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
