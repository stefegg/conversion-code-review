## Local Installation

First, clone the repo to your machine.

Then, navigate to the flexion-code-review folder, and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the project.

## Viewing the Deployed Version

To view the deployed version, please visit:

[https://flexion-code-review.vercel.app/](https://flexion-code-review.vercel.app/)

This is the most recent version of the 'main' branch.  Deployments happen automatically when a branch is merged into the main branch.  

To find the latest preview version, please visit:

[https://github.com/stefegg/flexion-code-review/deployments/Preview](https://github.com/stefegg/flexion-code-review/deployments/Preview)

Here you can view deployed working branches, such as a feature branch.

## 5 Next Development Tasks Improvement:

- Create Login for Teachers and Students, with separate permission levels
- Allow logged in teachers to create new volumes / temperatures for future tests
- Allow teacher to test more than one result at a time, ie. add more rows to the screen to input multiple answers at once.  This would allow them to grade a student's entire submission at once.
- Allow logged in teacher to add a student name, class name, and test name to a student's test, and save this test to a database.
- Allow logged in teachers to view past records by student name, class name, or test name.  Logged in students would also be able to search by the class and test name criteria, but only see their own results, not those of other students.
