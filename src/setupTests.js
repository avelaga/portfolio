// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

const homePage = getByTestId('home')

const homePage = getByTestId('home')
const homeDescendant = getByTestId('home-descendant')
const nonExistantElement = getByTestId('does-not-exist')

expect(homePage).toContainElement(homeDescendant)
expect(homeDescendant).not.toContainElement(homePage)
expect(homePage).not.toContainElement(nonExistantElement)