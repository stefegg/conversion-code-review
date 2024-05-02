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

- Create Login capability for Teachers and Students, with separate permission levels. This would involve creating a login screen and creating the project to a database.  Registration would likely be handled by the district, and not teachers/students themselves, so there would not be a sign up UI.
- Allow teacher to test more than one result at a time, ie. add more rows to the screen to input multiple answers at once before submitting.  This would allow them to grade a student's entire test at once.
- Allow logged in teacher to add a student name, class name, and test name to a test, and save this test to database.
- Allow logged in teachers to view past records by student name, class name, or test name.  Logged in students would also be able to search by the class and test name, but only see their own results, not those of other students.
- Allow logged in teachers to create new volumes / temperatures for future tests, ie. meters.
  
