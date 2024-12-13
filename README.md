# Car Dealer App

## Overview

This project is a car dealer application built using Next.js and Tailwind CSS. It allows users to filter vehicles by make and model year, and view the results dynamically.

## Features

- Filter vehicles by make and model year using dropdowns.
- Dynamic routes to display vehicle models for the selected make and year.
- Accessible and responsive design using Tailwind CSS.

## How to Run the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/Olena-P/car-dealer-app
   cd car-dealer-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add environment variables:
   Create a `.env.local` file in the root directory and include the following:

   ```
   NEXT_PUBLIC_API_BASE_URL=https://vpic.nhtsa.dot.gov/api
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## How to Build the Application

To build the project for production, run:

```bash
npm run build
```

---

## Application Features

### Filter Page

- **Home Page:** Allows users to select a vehicle make and model year.
- **Vehicle Makes Dropdown:** Populated dynamically using data fetched from the API:
  ```
  https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json
  ```
- **Model Year Dropdown:** Displays a range of years from 2015 to the current year.
- **"Next" Button:** Navigates to the result page (`result/[makeId]/[year]`) when both fields are selected.

  ![Filter Page](/public/screenshots/filter-page-screenshot.png)

### Result Page

- **Dynamic Routes:** Pre-rendered paths for specific makes and years using `generateStaticParams`.
- **Vehicle Models List:** Displays models fetched from:
  ```
  https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json
  ```
- **Error Handling:** Displays a message if no data is available or an error occurs.
  ![Result Page](/public/screenshots/result-page-screenshot.png)

---

## Folder Structure

- `/app` - Contains application pages and dynamic routes.
- `/components` - Reusable UI components.
- `/utils` - Helper functions (e.g., API calls).
- `.env.local` - Environment variables.

---

## Dependencies

- **Next.js** - Server-side rendering and routing.
- **Tailwind CSS** - Styling framework.
- **TypeScript** - Type safety for JavaScript.
- **ESLint** and **Prettier** - For maintaining code quality and formatting.

---

## Additional Resources

- [VPIC API Documentation](https://vpic.nhtsa.dot.gov/api/?ref=public_apis)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

### Deployment

To deploy the application:

1. Push the project to a GitHub repository.
2. Use [Vercel](https://vercel.com/) for easy deployment.

---

Let me know if you need further adjustments! 🚀
