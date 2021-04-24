/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/Layout'
import DataCard from '../components/DataCard'

// https://medium.com/analytics-vidhya/javascript-check-valid-parentheses-with-a-stack-bc7b1bab26c2
// https://paulrohan.medium.com/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911
// https://dev.to/urfan/leetcode-valid-parentheses-with-javascript-eh9
// https://www.linkedin.com/pulse/handling-classic-parenthesis-matching-problem-javascript-rohan-paul
// https://levelup.gitconnected.com/solving-balanced-brackets-in-javascript-with-stacks-edbc52a57309

const isMatching = s => {
  let stack = []
  let map = {
    '}': '{',
    ']': '[',
    ')': '(',
  }
  for (let i = 0; i < s.length; i++) {
    let lastChar = stack[stack.length - 1]
    // if opening, add to stack
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.push(s[i])
      console.log('🤘💀🔥🤘💀🔥', 'stack: ', stack, '🤘💀🔥🤘💀🔥')
    }
    // if not opening, and last char in stack matches, pop it
    else if (
      map[s[i]] === lastChar
      // (s[i] === '}' && lastChar === '{') ||
      // (s[i] === ']' && lastChar === '[') ||
      // (s[i] === ')' && lastChar === '(')
    ) {
      stack.pop() === lastChar ? console.log('yes') : console.log('no')

      console.log('🤘💀🔥🤘💀🔥', 'stack: ', stack, '🤘💀🔥🤘💀🔥')
    } else return false
  }
  return stack.length === 0
}

const unbalancedParens = '{[()]}}'
const balancedParens = '{[()]}'
const hi = '{}[]()'
const shouldBeTrue = isMatching(balancedParens)
const shouldBeFalse = isMatching(unbalancedParens)
const new2 = isMatching(hi)
console.log('🤘💀🔥🤘💀🔥', 'shouldBeTrue : ', shouldBeTrue, '🤘💀🔥🤘💀🔥')
console.log('🤘💀🔥🤘💀🔥', 'shouldBeFalse: ', shouldBeFalse, '🤘💀🔥🤘💀🔥')
console.log('🤘💀🔥🤘💀🔥', 'new2: ', new2, '🤘💀🔥🤘💀🔥')

// let isMatchingBrackets = function (str) {
//   let stack = []

//   let map = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//   }

//   for (let i = 0; i < str.length; i++) {
//     // If character is an opening brace add it to a stack
//     if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
//       stack.push(str[i])
//       console.log('🤘💀🔥🤘💀🔥', 'stack: ', stack, '🤘💀🔥🤘💀🔥')
//     }
//     //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
//     else {
//       let last = stack.pop()

//       console.log('🤘💀🔥🤘💀🔥', 'stack: ', stack, '🤘💀🔥🤘💀🔥')
//       //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
//       if (str[i] !== map[last]) {
//         return false
//       }
//     }
//   }
//   // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
//   if (stack.length !== 0) {
//     return false
//   }

//   return true
// }

// console.log(isMatchingBrackets('(){}')) // returns true
// console.log( isMatchingBrackets( '[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]')) // returns true
// console.log(isMatchingBrackets('({(()))}}')) // returns false

const Sandbox = () => {
  return <Layout>{/* <div>{result ? 'true' : 'false'}</div> */}</Layout>
}

export default Sandbox
