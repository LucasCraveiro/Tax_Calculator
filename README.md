# Tax Calculator

An APP for calculating Tax amount for your Income

![Screenshot 2023-11-13 at 1 48 59 AM](https://github.com/LucasCraveiro/Tax_Calculator/assets/32401792/99f366bb-2104-4968-8a7d-6fe584e69c39)

## Stack

- React
- Typescript
- Zustand (State Management)
- React Query
- Zod (Validation)
- Vitest/Jest/React Testing Library

### Configuration

```npm intall```<br/>
<br/>
```npm run dev```

### Notes

I created this App thinking about scalability. Zustand and React Query were fundamental pieces in it.

- I used Zustand which is a State Management Library, less verbose than Redux and Redux Toolkit. It makes the use and setStates easier instead of passing props to the children.

![Screenshot 2023-11-13 at 2 01 25 AM](https://github.com/LucasCraveiro/Tax_Calculator/assets/32401792/e0d81e4a-48be-4926-8503-0e2184c12b33)

- React Query plays an important role here where it facilitate cache and refetch the API (2 times with the flag retry) when it fails. Also helps handling errors and loading.

![Screenshot 2023-11-13 at 2 00 45 AM](https://github.com/LucasCraveiro/Tax_Calculator/assets/32401792/8fcf5891-44bc-4c48-8d1c-07ee2f3533fd)

- Zod were used to validate the Income input. It shows error message when the user input is not satisfactory. 

![Screenshot 2023-11-13 at 1 59 53 AM](https://github.com/LucasCraveiro/Tax_Calculator/assets/32401792/b46167ae-fbc6-41dc-a003-2c9e9234783b)

![Screenshot 2023-11-13 at 2 02 50 AM](https://github.com/LucasCraveiro/Tax_Calculator/assets/32401792/cd7d4f95-d6a9-4be9-95c2-4f280030b5ed)
